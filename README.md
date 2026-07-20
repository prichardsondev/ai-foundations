# AI Foundations for Everyone

Static class site for the "AI Foundations for Everyone" course.

## Structure

- `index.html` - home page with flyer banner, course overview, and links into the lesson content
- `sessions.html` - five-session overview page plus the optional AI models reference page
- `session-1.html` - detailed Session 1 lesson page: AI Basics and Better Prompting
- `session-2.html` - detailed Session 2 lesson page: Using AI for Everyday Work Tasks
- `ai-models.html` - plain-English reference page covering major AI model categories and examples
- `hallucination-associates.html` - parody bonus page linked from the home page footer
- `server.js` - Local AI Study Buddy Express demo server
- `study-buddy-public/` - frontend files for the Local AI Study Buddy demo
- `styles.css` - shared site styles
- `prompt-workshop.js` - small client-side interactivity for the Prompt Workshop on Session 1
- `AI_Flyer260218_01.pdf` - source flyer used for course details
- `AI_Flyer_header.png` - header image extracted from the flyer for the home page banner
- `HANDOFF.md` - current project handoff notes
- `.gitignore` - excludes local-only working folders such as `bkup/`

## Notes

- This site uses plain HTML, one shared CSS file, and one small JavaScript file.
- There is no backend and no framework.
- The Local AI Study Buddy demo is a separate optional Node/Express app for Session 5.
- Session 1 covers AI basics and prompt structure, and includes the Prompt Workshop tool.
- Session 2 covers everyday workplace use of ChatGPT: setup, prompting, uploads, and creating shareable documents.
- The home page includes a course banner, an AI workflow note, and links to the AI models reference page.
- The AI models page is intended as a supporting classroom explainer for non-chatbot model types.
- `hallucination-associates.html` is intentionally separate from the main course flow and presented as bonus/parody content.

## Local use

Open `index.html` in a browser, or serve the folder with any simple static file server.

## Local AI Study Buddy demo

This small demo shows how a normal web app can talk to a local LLM running through Ollama.

Install dependencies:

```bash
npm install
```

Verify Ollama is running:

```bash
curl http://localhost:11434/api/tags
```

If needed, pull the default model:

```bash
ollama pull gpt-oss:20b
```

Run the app:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

How it works:

- The frontend in `study-buddy-public/` sends the question and selected model to `POST /api/ask`.
- The Express backend in `server.js` sends that prompt to `http://localhost:11434/api/generate`.
- The backend uses `stream: false` so the demo receives one complete response.
- The default model is `gpt-oss:20b`. You can change it in the UI or by running with `OLLAMA_MODEL=another-model npm start`.

What students should notice:

- The browser does not call Ollama directly. It calls the app backend.
- The backend is the bridge between a normal web app and the local model API.
- If Ollama is stopped or the model is missing, the app shows a readable error instead of failing silently.
