import { mkdir, writeFile } from "node:fs/promises";
import { courses } from "../src/data/courses.mjs";
import { renderCoursePage, renderRedirectPage } from "../src/components/coursePage.mjs";

const outputs = [
  ["index.html", courses.part1],
  ["part2/index.html", courses.part2]
];

await Promise.all([mkdir("part2", { recursive: true }), mkdir("sections", { recursive: true }), mkdir("ai-models", { recursive: true })]);

await Promise.all(
  outputs.map(([path, course]) => writeFile(path, renderCoursePage(course), "utf8"))
);

await writeFile(
  "part2/part-2.html",
  renderRedirectPage({ title: "Redirecting to AI Foundations Part 2", href: "./" }),
  "utf8"
);

await Promise.all([
  writeFile(
    "sessions.html",
    renderRedirectPage({ title: "Redirecting to AI Foundations Sections", href: "sections/" }),
    "utf8"
  ),
  writeFile(
    "ai-models.html",
    renderRedirectPage({ title: "Redirecting to AI Model Categories", href: "ai-models/" }),
    "utf8"
  )
]);

console.log(
  `Generated ${outputs.map(([path]) => path).join(", ")}, part2/part-2.html redirect, sessions.html redirect, ai-models.html redirect`
);
