# Handoff

## Current state

This repo is a static HTML/CSS/JS course site for "AI Foundations for Everyone." The main learner path is:

1. `index.html`
2. `sessions.html`
3. `session-1.html`

Two additional pages were added in this round:

- `ai-models.html` for a plain-English overview of major AI model categories
- `hallucination-associates.html` for optional parody/bonus content linked from the home page footer

## Changes in this round

- Added `AI_Flyer_header.png` and used it as a home page banner on `index.html`
- Added `ai-models.html`
- Linked the AI models page from `index.html`, `sessions.html`, and `session-1.html`
- Added shared table styles in `styles.css` for the comparison table on the AI models page
- Added a footer link on `index.html` to `hallucination-associates.html`
- Added `.gitignore` coverage for `bkup/` so local backup copies stay out of source control

## Review notes

I checked the modified and new HTML files for local link and asset integrity. No broken local references were found in the current site pages.

The only repo-level risk I found was the untracked `bkup/` snapshot folder. It appears to be local backup material rather than deployable site content, so it is now ignored.

## Content notes

- `ai-models.html` is a supporting reference page, not a numbered course session
- `hallucination-associates.html` is intentionally humorous and should stay framed as optional/parody content
- `index.html` includes a short note explaining that the site itself was produced with multiple AI tools plus human review

## Local workflow

- Open `index.html` directly in a browser for a quick review, or serve the folder with any static file server
- If additional lesson pages are added later, update the top nav consistently across all HTML files
- Keep one-off backup or scratch files in ignored folders only
