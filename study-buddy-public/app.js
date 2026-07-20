const form = document.querySelector("#ask-form");
const modelInput = document.querySelector("#model");
const promptInput = document.querySelector("#prompt");
const statusEl = document.querySelector("#status");
const responseEl = document.querySelector("#response");
const askButton = document.querySelector("#ask-button");

loadDefaultModel();

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const prompt = promptInput.value.trim();
  const model = modelInput.value.trim();

  if (!prompt) {
    showStatus("Please enter a question first.", true);
    return;
  }

  askButton.disabled = true;
  responseEl.textContent = "";
  showStatus(`Asking ${model || "the default local model"}...`, false);

  try {
    const result = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, model })
    });

    const data = await result.json();

    if (!result.ok) {
      throw new Error(data.error || "The local model request failed.");
    }

    responseEl.textContent = data.response;
    showStatus(`Response received from ${data.model}.`, false);
  } catch (error) {
    responseEl.textContent = "No response yet.";
    showStatus(error.message, true);
  } finally {
    askButton.disabled = false;
  }
});

async function loadDefaultModel() {
  try {
    const result = await fetch("/api/config");
    const config = await result.json();

    if (config.defaultModel) {
      modelInput.value = config.defaultModel;
    }
  } catch {
    // The hard-coded default in the HTML is enough if config loading fails.
  }
}

function showStatus(message, isError) {
  statusEl.textContent = message;
  statusEl.classList.toggle("error", isError);
}
