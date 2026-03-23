# Handoff

## Current state

This repo is a static HTML/CSS/JS course site for "AI Foundations for Everyone." The main learner path is:

1. `index.html`
2. `sessions.html`
3. `session-1.html`
4. `session-2.html`

Two additional pages support the course but are not numbered sessions:

- `ai-models.html` for a plain-English overview of major AI model categories
- `hallucination-associates.html` for optional parody/bonus content linked from the home page footer

## Changes in this round

- Created `session-2.html` — full Session 2 lesson page: Using AI for Everyday Work Tasks
- Added Session 2 to the top nav on all five existing HTML pages (`index.html`, `sessions.html`, `session-1.html`, `ai-models.html`)
- Updated `sessions.html` Session 2 card to link to `session-2.html` and applied `session-card-current` highlight; Session 1 card reverted from "Current detailed lesson" label
- Updated `session-1.html` CTA row to link forward to `session-2.html`
- Applied a wording polish pass to `session-2.html`: replaced "beginner" and "beginner-friendly" throughout with more respectful adult-professional alternatives ("easy-to-follow," "straightforward," "starter prompt," "common early mistakes," etc.)
- Made several targeted content fixes to `session-2.html`: corrected doubled word in shop-floor list, converted prompt ingredients to bullet list, added lab guidance note, added "Quick review before sharing" checklist inside Section 7, moved checklist to sit directly after the workflow callout

## Review notes

All internal links and nav items were verified. No broken local references found.

Session 2 follows the same layout and component pattern as Session 1: `page-shell lesson-shell`, `outcomes-card`, `lesson-section`, `callout`, `card lesson-card`, `grid-two`, `stack`, and `cta-row`.

No new CSS was added. Session 2 uses only existing shared classes from `styles.css`.

## Content notes

- `session-2.html` covers ChatGPT setup, personalization, safe use, everyday work tasks, prompting, file/image uploads, a hands-on lab, creating a shareable document (with review checklist), common early mistakes, and key reminders
- The hands-on lab uses a starter prompt and frames workplace content activities (emails, summaries, simple pages) — not coding or recipe tasks
- The shareable document workflow recommends plain text → Word/Google Docs → PDF, not Markdown first
- Tone throughout is professional, practical, and respectful of adult learners — avoids language that sounds school-like or condescending
- `ai-models.html` is a supporting reference page, not a numbered course session
- `hallucination-associates.html` is intentionally humorous and should stay framed as optional/parody content

## Local workflow

- Open `index.html` directly in a browser for a quick review, or serve the folder with any simple static file server
- When adding Session 3+, add to nav on all HTML files and update the session card on `sessions.html`
- Keep one-off backup or scratch files in ignored folders only
