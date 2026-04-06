const defaults = {
  role: "Professional workplace communication assistant",
  task: "Draft a short email to notify staff about a meeting change.",
  context: "The meeting originally scheduled for Thursday at 2 PM is now Friday at 10 AM.",
  constraints: "Keep the tone clear and professional. Keep it under 120 words.",
  format: "Email with subject line and short body"
};

const examples = {
  meeting: {
    role: "Professional workplace communication assistant",
    task: "Draft a short email to notify staff about a meeting change.",
    context: "The meeting originally scheduled for Thursday at 2 PM is now Friday at 10 AM.",
    constraints: "Keep the tone clear and professional. Keep it under 120 words.",
    format: "Email with subject line and short body"
  },
  sop: {
    role: "Training assistant",
    task: "Summarize this SOP for new employees.",
    context: "Forklift battery change basic steps:\nPark forklift in battery area\nTurn off machine\nPut on gloves and face shield\nOpen battery compartment carefully\nDisconnect old battery\nUse lift tool to remove battery\nPut in charged battery and reconnect\nCheck connection before starting forklift\nIf battery looks damaged tell supervisor",
    constraints: "Use plain English. Focus on the most important safety and process steps. Keep it under 8 bullet points.",
    format: "Bullet list"
  },
  supervisor: {
    role: "Professional writing assistant",
    task: "Draft a short update for my supervisor.",
    context: "I need to explain that shipment delays affected this week's schedule.",
    constraints: "Keep it clear, direct, and under 150 words.",
    format: "Short email"
  }
};

const form = document.querySelector("#prompt-workshop");
const output = document.querySelector("#assembled-prompt");
const copyButton = document.querySelector("#copy-prompt");
const resetButton = document.querySelector("#reset-prompt");
const quickFillButtons = document.querySelectorAll(".quick-fill");

function buildPrompt() {
  const role = document.querySelector("#role").value.trim();
  const task = document.querySelector("#task").value.trim();
  const context = document.querySelector("#context").value.trim();
  const constraints = document.querySelector("#constraints").value.trim();
  const format = document.querySelector("#format").value.trim();

  const parts = [
    `Role: ${role || "[Add a role]"}`,
    `Task: ${task || "[Add a task]"}`,
    `Context: ${context || "[Add context]"}`,
    `Constraints: ${constraints || "[Add constraints]"}`,
    `Output format: ${format || "[Add an output format]"}`
  ];

  output.textContent = parts.join("\n\n");
}

function resetForm() {
  fillForm(defaults);
  buildPrompt();
}

function fillForm(values) {
  document.querySelector("#role").value = values.role || "";
  document.querySelector("#task").value = values.task || "";
  document.querySelector("#context").value = values.context || "";
  document.querySelector("#constraints").value = values.constraints || "";
  document.querySelector("#format").value = values.format || "";
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(output.textContent);
    const originalText = copyButton.textContent;
    copyButton.textContent = "Copied!";
    window.setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1800);
  } catch (error) {
    copyButton.textContent = "Failed";
    window.setTimeout(() => {
      copyButton.textContent = "Copy Prompt";
    }, 1500);
  }
}

if (form && output) {
  form.addEventListener("input", buildPrompt);
  copyButton.addEventListener("click", copyPrompt);
  resetButton.addEventListener("click", resetForm);
  quickFillButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const example = examples[button.dataset.example];
      if (example) {
        fillForm(example);
        buildPrompt();
      }
    });
  });
  resetForm();
}
