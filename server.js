const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";
const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434/api/generate";
const DEFAULT_MODEL = process.env.OLLAMA_MODEL || "gpt-oss:20b";

app.use(express.json());
app.use(express.static(path.join(__dirname, "study-buddy-public")));

app.get("/api/config", (_req, res) => {
  res.json({
    defaultModel: DEFAULT_MODEL,
    ollamaUrl: OLLAMA_URL
  });
});

app.post("/api/ask", async (req, res) => {
  const prompt = typeof req.body.prompt === "string" ? req.body.prompt.trim() : "";
  const model = typeof req.body.model === "string" && req.body.model.trim()
    ? req.body.model.trim()
    : DEFAULT_MODEL;

  if (!prompt) {
    return res.status(400).json({ error: "Please enter a question before asking the local model." });
  }

  try {
    const ollamaResponse = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        prompt,
        stream: false
      })
    });

    const rawBody = await ollamaResponse.text();
    let data;

    try {
      data = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      return res.status(502).json({
        error: "Ollama returned a response the app could not read.",
        details: rawBody
      });
    }

    if (!ollamaResponse.ok) {
      return res.status(ollamaResponse.status).json({
        error: explainOllamaError(ollamaResponse.status, data),
        details: data.error || data.message || rawBody
      });
    }

    if (typeof data.response !== "string") {
      return res.status(502).json({
        error: "Ollama responded, but no model answer was found."
      });
    }

    return res.json({
      model,
      response: data.response
    });
  } catch (error) {
    return res.status(503).json({
      error: "Could not reach Ollama. Make sure Ollama is running at http://localhost:11434.",
      details: error.message
    });
  }
});

function explainOllamaError(status, data) {
  const message = data.error || data.message || "";

  if (status === 404 || /not found|pull model|model/i.test(message)) {
    return "The selected model is not available in Ollama. Try pulling it first or choose another model.";
  }

  return "The model request failed. Check Ollama and try again.";
}

app.listen(PORT, HOST, () => {
  console.log(`Local AI Study Buddy running at http://${HOST}:${PORT}`);
  console.log(`Using Ollama endpoint: ${OLLAMA_URL}`);
  console.log(`Default model: ${DEFAULT_MODEL}`);
});
