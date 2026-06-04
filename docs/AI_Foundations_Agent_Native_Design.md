# AI Foundations Site — Agent Native Design + Implementation Prompt for C

Use this file as the single source of direction for the AI Foundations course site.

The goal is to make Part 1 and Part 2 feel like sibling courses in the same professional training system, not two separate one-off landing pages.

---

## 1. Main instruction

Please stop treating Part 1 and Part 2 as separate custom pages.

Normalize the site around:

- One shared course-page structure
- One shared design language
- One shared content pattern
- One shared terminology map
- One shared route pattern

Current pages:

```text
/
 /part2/part-2
```

Desired canonical pages:

```text
/
 /part2/
 /sections/
 /ai-models/
```

If `/part2/part-2` already exists, redirect it to `/part2/` or remove the duplicate route.

---

## 2. What Agent Native means

Agent Native does **not** mean “AI-looking,” flashy, futuristic, or jumbotron-style.

Agent Native means the site is simple for both humans and AI agents to understand, navigate, summarize, and integrate with.

The site should be:

- Clean
- Simple
- Predictable
- Structured
- Semantic
- Easy to parse
- Easy to navigate
- Easy for an agent to reference
- Easy for a human to scan

An agent should be able to look at the page and quickly understand:

- What course this is
- Who it is for
- What the sections are
- What each section covers
- What actions are available
- Where registration or next steps are
- How Part 1 and Part 2 relate to each other

This means the design should favor structure and clarity over visual drama.

Agent Native is closer to:

> A clean AI-readable course workspace.

It is not:

> A loud marketing landing page with oversized sections and giant buttons.

---

## 3. Non-negotiable consistency requirement

The current site is still inconsistent.

Examples still visible:

- Part 1 says “Five sections...”
- Part 2 says “Five 2-hour sections...”
- Part 1 says “Why this matters now”
- Part 2 says “Why this course”
- Part 2 still uses `/part2/part-2`
- Part 2 has a stray small “Section details” label above the real “Section details” heading
- Part 1 and Part 2 still do not clearly share the same section order

Please do not patch these one by one.

Create a shared content contract and make both pages conform to it.

---

## 4. Terminology contract

Use these terms consistently across the whole site.

| Concept | Standard term | Do not mix with |
|---|---|---|
| Course content unit | Section | Class, session, module, unit |
| Course structure | Section details | Course roadmap, section breakdown, class breakdown |
| Course meeting logistics | 2-hour meetings | 2-hour sections, 2-hour classes |
| Why the course exists | Why this matters | Why this course, Why Part 2 |
| Public action links | Specific action labels | Learn more, Explore, Click here |

Important distinction:

- A **section** is a content unit.
- A **meeting** is a time/logistics unit.

So do **not** say:

```text
Five 2-hour sections
```

Use:

```text
Five sections
Five 2-hour meetings
Five 2-hour course meetings
```

Recommended hero badge if needed:

```text
Five sections
2-hour meetings
```

Recommended Section details intro:

```text
Each section includes a focused topic, practical activities, and a clear outcome participants can use after class.
```

Recommended common heading:

```text
Why this matters
```

Do not use one page with “Why this matters now” and the other with “Why this course.”

---

## 5. Required page structure

Part 1 and Part 2 must use the same layout and heading order.

Required structure for both pages:

1. Header / navigation
2. Course hero
3. Why this matters
4. What this course is about
5. Section details
6. Expected outcomes
7. Registration / next step
8. Additional notes, if needed

Do not put these sections in different orders on Part 1 and Part 2.

Do not rename the headings per page unless there is a strong reason. There is no strong reason for the current inconsistency.

---

## 6. Required heading text

Use the following headings on both Part 1 and Part 2:

```text
Why this matters
What this course is about
Section details
Expected outcomes
Registration
```

Avoid:

```text
Why this matters now
Why this course
Why Part 2?
Course Breakdown
Section Breakdown
Class Breakdown
Section details
```

Only use “Part 2” inside body copy where needed, not as a replacement for shared heading structure.

---

## 7. Section details

Section details are the canonical course map. Do not add a separate Course roadmap section unless it provides a materially different navigation function. If quick navigation is needed, use compact anchor links inside or near Section details instead of repeating the same five section cards.

Section details should include:

- Section number
- Section title
- Short description
- Practical activities or bullets
- Expected outcome

Both pages should use Section details after a short intro.

Recommended section details intro:

```text
Each section includes a focused topic, practical activities, and a clear outcome participants can use after class.
```

Do not leave a stray eyebrow/label that repeats the heading, such as a small “Section details” label immediately above an `h2` that also says “Section details.”

---

## 8. Agent-friendly structure rules

Because this is Agent Native, the implementation should also be easy for agents and tools to navigate.

Use:

- Semantic HTML where practical
- Clear heading hierarchy
- Predictable section order
- Consistent component names
- Consistent route names
- Stable anchor IDs for major sections
- Clear link text
- Data-driven course content
- Reusable components
- Simple DOM structure

Avoid:

- Duplicate routes with different content
- One-off page structures
- Clever but confusing layout tricks
- Hidden content that is required to understand the page
- Giant visual blocks with vague labels
- Buttons that say only “Learn more” without context
- Inconsistent terms like “class,” “session,” “section,” and “breakdown” used interchangeably

Recommended major section anchors:

```text
#why-this-matters
#what-this-course-is-about
#section-details
#expected-outcomes
#registration
```

Agents should be able to navigate these sections predictably across both Part 1 and Part 2.

---

## 9. Visual direction

Use a quiet, card-based layout with restrained spacing, soft borders, readable typography, and small purposeful actions.

Preferred feel:

- Professional training workspace
- Course guide
- Agent dashboard
- Clean documentation site
- Calm AI tool interface

Avoid:

- Oversized hero sections
- Huge square CTA buttons
- Heavy gradients
- Loud marketing copy
- Massive padding
- Repeated jumbotron blocks
- Unnecessary visual drama
- Big marketing-banner treatment

The site should say:

> This is practical AI training. It is organized, trustworthy, modern, and useful.

It should not say:

> This is a generic marketing landing page with giant boxes and loud calls to action.

---

## 10. Button style

The current large square/boxy buttons feel old-school and jumbotron-like.

Please modernize the button styling.

Buttons should be quiet actions, not giant marketing blocks.

Use:

- Smaller height
- Modest padding
- Soft radius
- Light border
- Subtle hover state
- Clear text
- Calm visual weight
- Specific action labels

Avoid:

- Big boxy buttons
- Jumbo CTA panels
- Heavy shadows
- Loud colors
- Marketing-banner styling
- Oversized padding
- Vague “click here” style actions

Buttons should feel like part of a useful tool interface.

Create one shared `Button` or `ActionLink` component rather than custom button CSS scattered across pages.

Examples of better action labels:

```text
Review Part 1 sections
Review Part 2 sections
View registration details
Compare local and cloud AI
```

Avoid vague labels like:

```text
Learn more
Get started
Explore
```

unless the surrounding context makes the action obvious.

---

## 11. Shared components

Use shared components instead of hand-building each page separately.

Recommended components:

- `SiteHeader`
- `CourseHero`
- `BadgeRow`
- `ActionLink` or `Button`
- `SectionDetails`
- `SectionDetails`
- `SectionDetailCard`
- `OutcomeList`
- `RegistrationPanel`

The content should come from course data, not scattered hard-coded strings.

Recommended data source:

```text
src/data/courses.ts
```

Each course should define something like:

```ts
{
  slug: "part1",
  title: "...",
  subtitle: "...",
  summary: "...",
  badges: [...],
  actions: [...],
  whyTitle: "Why this matters",
  whyBody: "...",
  aboutTitle: "What this course is about",
  aboutBody: "...",
  sectionDetailsTitle: "Section details",
  sectionDetailsIntro: "Each section includes a focused topic, practical activities, and a clear outcome participants can use after class.",
  sectionDetails: [...],
  outcomesTitle: "Expected outcomes",
  outcomes: [...]
}
```

The goal is that Part 1 and Part 2 differ mainly through data, not custom layout logic.

---

## 12. URL structure

Use clean sibling routes.

Recommended public routes:

```text
/
 /part2/
 /sections/
 /ai-models/
```

Avoid:

```text
/part2/part-2
```

Please make `/part2/` the canonical Part 2 URL.

Then either:

- redirect `/part2/part-2` to `/part2/`, or
- remove the duplicate route entirely.

Do not allow two routes to render different versions of the same course page.

Clean routes matter for Agent Native design because they are easier for users, agents, docs, and integrations to reference.

---

## 13. Specific implementation request

Please do a focused pass with these goals:

1. Create or update a shared course-page layout.
2. Move Part 1 and Part 2 into that shared layout.
3. Normalize section order across both pages.
4. Normalize heading names across both pages.
5. Use the required heading text exactly.
6. Use “Five sections” consistently.
7. Use “2-hour meetings” or “2-hour course meetings” for time/logistics.
8. Do not use “Five 2-hour sections.”
9. Use Section details as the primary course structure on both pages.
10. Remove duplicate/stray heading labels.
11. Make `/part2/` the canonical Part 2 route.
12. Redirect or remove `/part2/part-2`.
13. Replace oversized square buttons with quiet Agent Native actions.
14. Add stable anchors for major course sections.
15. Use clear, specific link and button labels.
16. Keep the visual design calm, structured, restrained, and professional.

---

## 14. Agent Native checklist

Before calling the page done, verify:

- Part 1 and Part 2 use the same layout.
- Headings follow the same order.
- Major sections have stable anchors.
- The same core headings are used on both pages.
- “Why this matters” is used consistently.
- “Five sections” is used consistently.
- “2-hour meetings” is used only for schedule/logistics.
- “Five 2-hour sections” does not appear anywhere.
- Section details appear after a short intro on both pages.
- No duplicate route renders different content.
- `/part2/` is the canonical Part 2 URL.
- Buttons are small, restrained, and reusable.
- Button labels are specific and useful.
- No large jumbotron treatment remains.
- Copy is practical, not hype-heavy.
- The site feels like a professional training workspace.
- The site feels like a clean AI tool/course interface, not a generic landing page.
- A human can scan the site quickly.
- An AI agent can navigate and summarize the site easily.

---

## 15. Final design principle

Make the site feel like this:

> A clear, professional AI training workspace where participants and AI agents can quickly understand the course, see section details, and take the next step.

Do not make it feel like this:

> A traditional marketing page with giant hero blocks, oversized buttons, vague calls to action, and inconsistent hand-built sections.

Agent Native = clean, simple, structured, predictable, and easy to integrate with.
