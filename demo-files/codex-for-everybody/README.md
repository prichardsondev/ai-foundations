# Codex for Everybody Demo Files

These are fictional demo files for Session 4 of AI Foundations for Everyone. They do not contain real employee, company, budget, or private data.

The goal is to show Codex App as a workplace agent workspace, not just a coding assistant. In this demo, Codex can inspect a small folder of plain workplace files, compare notes across documents, review spreadsheet-like CSV data, find patterns, and prepare a practical report or training plan for a manager.

## What the folder represents

A manager at the fictional Northstar Community Services team wants a 60-minute staff training session on using AI safely at work. The folder includes a training request, manager notes, employee feedback, signup details, a rough outline, budget data, staff questions, and a report template.

## 10-minute demo run-of-show

1. Open Codex App in this course project.
2. Ask Codex to review this folder without editing anything.
3. Ask Codex to summarize the workplace task and identify the files that matter most.
4. Ask Codex to find training needs across the request, notes, questions, and feedback CSV.
5. Ask Codex to review the budget CSV for missing fields, possible errors, and over-budget items.
6. Ask Codex to create a 60-minute training plan for non-technical staff.
7. Ask Codex to fill in the manager report template as a draft.
8. Review Codex's answer with the class: what evidence did it use, and what did it assume?
9. Ask Codex to make one small improvement to the rough outline.
10. Review the diff and decide whether to accept, revise, or reject the change.

## Sample prompts

```text
Review the files in demo-files/codex-for-everybody. Do not edit anything yet. Tell me what this folder contains and what kind of workplace task it represents.
```

```text
Using the training request, manager notes, staff questions, and feedback CSV, summarize the main training needs. Separate clear findings from assumptions.
```

```text
Review messy-budget-review.csv. Identify missing fields, possible errors, items over budget, and questions a manager should answer before approving the plan. Do not change the file yet.
```

```text
Create a 60-minute training plan using the available files. Keep it practical for non-technical staff. Include timing, activities, and what the instructor should emphasize.
```

```text
Fill in report-template.md as a manager-ready report. Use the demo files as evidence. If information is missing, list questions instead of inventing details.
```

```text
Now make a small improvement to draft-training-outline.md based on your findings. Keep the change focused. After editing, summarize exactly what changed and why.
```

## Good discussion questions

- Which files did Codex use as evidence?
- What did Codex notice in the messy CSV files?
- Where did Codex ask for clarification instead of guessing?
- What would need human approval before this became a real training plan?
- What permissions would be appropriate for this kind of workplace task?
