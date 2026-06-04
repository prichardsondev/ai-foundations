# SMCC AI Adoption Training Site

Internal planning draft. Not official SMCC policy. Requires faculty, staff, IT/security, accessibility, and governance review before workshop or leadership use.

## How To Run Locally

Option 1: open `index.html` directly in a browser.

Option 2:

```sh
cd training_site
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## File List

- `index.html`
- `deck.html`
- `faculty.html`
- `staff.html`
- `employers.html`
- `activities.html`
- `assets/style.css`
- `assets/site.js`
- `README.md`

## Notes

- No build step.
- No framework.
- No external dependencies.
- No tracking, analytics, external fonts, external scripts, or CDN dependencies.
- Print-friendly CSS is included for handouts, activities, and deck slides.

## Source Content

The site was built from the Markdown files in `../training_assets/`.

## Still Needing Owner Confirmation

- Named SMCC/MCCS approval owners.
- Approved/tolerated/blocked AI tools.
- Data classification process.
- Governance review path.
- Consent/release process for employer testimonials.
- Whether these materials can be shared beyond the AI adoption team.
