const navItems = [
  { key: "part1", label: "Part 1", href: "" },
  { key: "part2", label: "Part 2", href: "part2/" },
  { key: "ai-models", label: "AI Models", href: "ai-models/" }
];

export function renderCoursePage(course) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(course.title)}</title>
  <meta name="description" content="${escapeHtml(course.summary)}">
  <link rel="stylesheet" href="${course.cssHref}">
</head>
<body>
  ${SiteHeader(course)}
  <main>
    ${CourseHero(course)}
    ${CourseSection(course.why)}
    ${CourseSection(course.about)}
    ${SectionDetails(course)}
    ${CourseSection(course.outcomes)}
    ${CourseSection(course.registration)}
    ${CourseNotes(course.additionalNotes)}
  </main>
  ${SiteFooter(course)}
</body>
</html>
`;
}

function SiteHeader(course) {
  return `<header class="site-header">
    <div class="wrap header-inner">
      <a class="brand" href="${course.navPrefix}index.html">AI Foundations for Everyone</a>
      <nav class="site-nav" aria-label="Main navigation">
        ${navItems.map((item) => NavLink(course, item)).join("\n        ")}
      </nav>
    </div>
  </header>`;
}

function NavLink(course, item) {
  const href = item.href ? `${course.navPrefix}${item.href}` : `${course.navPrefix}index.html`;
  const active = item.key === course.activeNav ? ` class="active" aria-current="page"` : "";
  return `<a${active} href="${href}">${item.label}</a>`;
}

function CourseHero(course) {
  return `<section class="course-welcome wrap" aria-labelledby="course-title">
      <p class="eyebrow">${escapeHtml(course.courseLabel)}</p>
      <h1 id="course-title">${escapeHtml(course.title)}</h1>
      <p class="lead">${escapeHtml(course.subtitle)}</p>
      <p>${escapeHtml(course.summary)}</p>
      <div class="course-facts" aria-label="Course facts">
        ${course.badges.map((badge) => `<span>${escapeHtml(badge)}</span>`).join("\n        ")}
      </div>
      <div class="hero-actions landing-actions">
        ${course.primaryButtons.map(Button).join("\n        ")}
      </div>
    </section>`;
}

function SectionDetails(course) {
  const detailedItems = course.sectionDetails.filter((item) => item.detail || item.bullets?.length);
  if (!detailedItems.length) return "";

  return `<section class="wrap page-section" id="section-details">
      <div class="section-heading">
        <h2>Section details</h2>
        <p>${escapeHtml(course.sectionDetailsIntro)}</p>
      </div>
      <div class="section-list">
        ${detailedItems.map(DetailCard).join("\n        ")}
      </div>
    </section>`;
}

function DetailCard(item, index) {
  return `<article class="section-card" id="section-${index + 1}">
          <div class="section-meta">
            <p class="label">${escapeHtml(item.label)}</p>
            <p class="section-kind">Course section</p>
          </div>
          <h2>${escapeHtml(item.title)}</h2>
          ${item.detail ? `<p>${escapeHtml(item.detail)}</p>` : ""}
          ${item.bullets?.length ? List(item.bullets) : ""}
          ${item.action ? `<div class="hero-actions">${Button(item.action)}</div>` : ""}
        </article>`;
}

function CourseSection(section) {
  if (!section) return "";

  return `<section class="wrap page-section teaching-flow"${section.id ? ` id="${escapeHtml(section.id)}"` : ""}>
      <div class="section-heading">
        <h2>${escapeHtml(section.title)}</h2>
        ${section.intro ? `<p>${escapeHtml(section.intro)}</p>` : ""}
      </div>
      <div class="${section.cards.length > 1 ? "notes-grid" : "teaching-flow"}">
        ${section.cards.map(NoteCard).join("\n        ")}
      </div>
    </section>`;
}

function CourseNotes(sections = []) {
  return sections
    .map(CourseSection)
    .join("\n\n    ");
}

function NoteCard(card) {
  return `<article class="card">
          ${card.label ? `<p class="label">${escapeHtml(card.label)}</p>` : ""}
          ${card.title ? `<h3>${escapeHtml(card.title)}</h3>` : ""}
          ${card.paragraphs?.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n          ") ?? ""}
          ${card.list?.length ? List(card.list) : ""}
          ${card.action ? `<div class="hero-actions">${Button(card.action)}</div>` : ""}
        </article>`;
}

function Button(action) {
  const classes = action.variant === "primary" ? "button button-primary" : "button";
  return `<a class="${classes}" href="${action.href}">${escapeHtml(action.label)}</a>`;
}

function List(items) {
  return `<ul>
            ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n            ")}
          </ul>`;
}

function SiteFooter(course) {
  return `<footer class="site-footer">
    <div class="wrap footer-inner">
      <p class="footer-note">AI Foundations for Everyone</p>
      <p class="footer-bonus">Bonus: <a href="${course.navPrefix}hallucination-associates.html">Hallucination &amp; Associates</a></p>
    </div>
  </footer>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function renderRedirectPage({ title, href }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <link rel="canonical" href="${href}">
  <meta http-equiv="refresh" content="0; url=${href}">
</head>
<body>
  <p>Redirecting to <a href="${href}">${href}</a>.</p>
</body>
</html>
`;
}
