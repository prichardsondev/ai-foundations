# Handoff

## Current state

This repo is a static HTML/CSS/JS course site for "AI Foundations for Everyone." The main learner path is:

1. `index.html`
2. `sessions.html`
3. `session-1.html`
4. `session-2.html`
5. `session-3.html`
6. `session-4.html`
7. `session-5.html`

Additional pages support the course but are not numbered sessions:

- `ai-models.html` for a plain-English overview of major AI model categories
- `project-example.html` for a Session 3 project workflow walkthrough
- `markdown-guide.html` for a short markdown reference
- `hallucination-associates.html` for optional parody/bonus content linked from the home page footer

## Changes in this round

- Updated `index.html` and `sessions.html` to remove cohort-specific timing language and point learners to SMCC Workforce Training for future class dates: `smccworkforcereg@mainecc.edu` or `207-741-5955`
- Updated `sessions.html` so the course arc is clearer: Session 1 prompt foundations, Session 2 workplace tasks/files/review, Session 3 projects/custom GPTs/RAG-style thinking, Session 4 agents/automation, Session 5 hands-on project lab
- Lightly revised `session-1.html` to keep reusable prompting as the main lesson: build three prompt files by hand, test them in ChatGPT, then show Halo Forge and Halo Lumin as optional workflow helpers
- Revised `session-2.html` into one guided classroom workflow: pick the right AI help, safe settings, quick examples, prepared practice files, Halo Forge prompt building, attached-file analysis, pre-meeting brief, lab, and review
- Added `class-samples/` with fake classroom practice files:
  - `workforce-issues-sample.csv`
  - `pre-meeting-notes-sample.txt`
  - `rough-sop-sample.txt`

## Review notes

All internal links and nav items were verified. No broken local references found in root HTML files.

Session 1's single-card classroom flow is the current model for future lesson pages.

Session 2 uses the existing lesson layout and a small page-local `.task-grid` / `.prompt-example` style block that was already part of the page pattern.

## Content notes

- `session-1.html` now frames Halo Forge as a helper for building reusable prompts faster after learners understand the prompt pieces manually
- `session-1.html` frames Halo Lumin as an optional way to save/share GPT-created content as a clean page, not as the main lesson
- `session-2.html` centers on uploaded/attached file analysis using the prepared fake CSV, notes, and SOP sample
- `session-2.html` keeps everyday message/checklist/summary cards as quick warm-up examples before the main lab
- `session-2.html` uses Halo Forge to help build the detailed workplace prompt faster, then uses Halo Lumin only after the final draft/brief exists
- Tone throughout is professional, practical, and respectful of adult learners — avoids language that sounds school-like or condescending
- `ai-models.html` is a supporting reference page, not a numbered course session
- Session 3 detailed revision is intentionally deferred
- `hallucination-associates.html` is intentionally humorous and should stay framed as optional/parody content

## Local workflow

- Open `index.html` directly in a browser for a quick review, or serve the folder with any simple static file server
- When revising Session 3 later, keep the Sessions Overview aligned but do not overwork Sessions 4-5 unless needed
- Keep one-off backup or scratch files in ignored folders only
