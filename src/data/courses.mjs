export const courses = {
  part1: {
    slug: "part1",
    courseLabel: "Part 1",
    title: "AI Foundations for Everyone",
    subtitle: "A practical introduction to using AI safely, clearly, and effectively at work.",
    summary:
      "Start with AI basics, build better prompts, practice verification, develop security-aware habits, and see how agents, automation, and real workflows fit into practical work.",
    badges: ["Five sections", "Workplace AI basics", "Safe use and verification"],
    cssHref: "styles.css?v=20260604-agentactions",
    navPrefix: "",
    activeNav: "part1",
    primaryButtons: [
      { label: "Start Section 1", href: "session-1.html", variant: "primary" },
      { label: "Compare AI model types", href: "ai-models/" }
    ],
                sectionDetails: [
      {
        label: "Section 1",
        title: "AI basics, safe use, and building your AI Starter Kit",
        href: "session-1.html",
        detail:
          "Start with plain-English AI basics, safe-use habits, and a practical starter kit learners can reuse at work.",
        bullets: [
          "Understand what common AI tools can and cannot do",
          "Set personal guardrails for safe workplace use",
          "Create an AI Working Agreement and starter prompts"
        ],
        action: { label: "Open Section 1", href: "session-1.html" }
      },
      {
        label: "Section 2",
        title: "Better prompting, verification, and improving AI outputs",
        href: "session-2.html",
        detail:
          "Practice clearer prompts, stronger context, and verification habits so AI output becomes easier to review and improve.",
        bullets: [
          "Write prompts with role, task, context, format, and constraints",
          "Test outputs against source material and common-sense checks",
          "Revise weak AI responses into usable drafts"
        ],
        action: { label: "Open Section 2", href: "session-2.html" }
      },
      {
        label: "Section 3",
        title: "Projects, reusable documents, Markdown, and sharing useful results",
        href: "session-3.html",
        detail:
          "Move from one-off chats to reusable project materials, clean documents, and shareable outputs.",
        bullets: [
          "Use AI projects and saved context to reduce repeated setup",
          "Create structured documents with Markdown",
          "Turn rough ideas into clear workplace artifacts"
        ],
        action: { label: "Open Section 3", href: "session-3.html" }
      },
      {
        label: "Section 4",
        title: "Agents, automation, APIs, and workflows",
        href: "session-4.html",
        detail:
          "Explore how agents and automation connect AI to files, tools, APIs, and repeatable workflows.",
        bullets: [
          "Compare chatbot use with agent-assisted workflows",
          "Identify tasks that benefit from repeatable automation",
          "Decide where human review should stay in the loop"
        ],
        action: { label: "Open Section 4", href: "session-4.html" }
      },
      {
        label: "Section 5",
        title: "Security, private/local AI, and where AI is going next",
        href: "session-5.html",
        detail:
          "Connect AI use to security, privacy, local/private options, and practical next steps for responsible adoption.",
        bullets: [
          "Recognize sensitive data risks and safer sharing practices",
          "Understand why local and private AI options matter",
          "Plan practical next steps for responsible AI use"
        ],
        action: { label: "Open Section 5", href: "session-5.html" }
      }
    ],
    sectionDetailsIntro:
      "Each section includes a focused topic, practical activities, and a clear outcome participants can use after class.",
    why: {
      id: "why-this-matters",
      title: "Why this matters",
      cards: [
        {
          title: "AI is no longer just a chatbot. It is becoming a workflow tool.",
          paragraphs: [
            "Current AI models can read large amounts of information, generate useful drafts, write and review code, compare options, use tools, and follow multi-step instructions. Agents take that further by connecting AI to actions, APIs, files, and workflows.",
            "That is powerful for productivity, but it also raises the stakes. The same speed that helps someone draft an email, summarize a report, or build a workflow can also speed up mistakes, weak assumptions, and security risks.",
            "This course teaches the practical habits that matter now: better prompts, safer examples, verification, human judgment, and a clear understanding of when AI should - and should not - be used."
          ]
        }
      ]
    },
    about: {
      id: "what-this-course-is-about",
      title: "What this course is about",
      intro: "No technical background required. The focus is practical judgment, not hype.",
      cards: [
        {
          list: [
            "Plain-English AI foundations",
            "Useful workplace prompting",
            "Safe and responsible use",
            "Verification and human judgment",
            "Agents, automation, and real workflows"
          ]
        }
      ]
    },
    outcomes: {
      id: "expected-outcomes",
      title: "Expected outcomes",
      cards: [
        {
          list: [
            "Use AI tools with clearer prompts and safer context.",
            "Review AI outputs before acting on them.",
            "Create reusable prompts and documents for common workplace tasks.",
            "Explain where agents, automation, and human judgment fit.",
            "Recognize security, privacy, and data-sharing risks."
          ]
        }
      ]
    },
    registration: {
      title: "Registration",
      id: "registration",
      intro: "Section 1 starts with foundations and ends with a reusable AI Starter Kit.",
      cards: [
        {
          label: "Start here",
          title: "Build your AI Starter Kit",
          list: [
            "AI Working Agreement",
            "Personal Context Prompt",
            "Task Playbook Prompt",
            "One test chat or project"
          ],
          action: { label: "Start Section 1", href: "session-1.html", variant: "primary" }
        }
      ]
    },
    additionalNotes: [
      {
        title: "Why security matters",
        cards: [
          {
            paragraphs: [
              "AI can be useful, but learners need to know what not to share, how to sanitize examples, and why important outputs need human review before anyone acts on them.",
              "A later section will cover security risks, private/local AI options, and safer workflows so you can make better choices about which tool fits which task."
            ]
          }
        ]
      },
      {
        title: "AI needs ownership",
        intro: "AI is becoming too important to manage casually.",
        cards: [
          {
            paragraphs: [
              "Modern AI can help people write, summarize, analyze, code, troubleshoot, and automate. Agents can go further by connecting AI to files, tools, APIs, and workflows.",
              "For organizations that depend on secure systems, this cannot be treated as only an IT issue or only a programming issue. AI needs clear ownership across leadership, security, operations, software, and training.",
              "That means approved tools, safe data practices, AI-aware security review, testing of AI-built systems, monitoring for misuse, and people who are responsible for understanding how these tools change both productivity and risk."
            ]
          }
        ]
      },
      {
        title: "Why agents matter",
        cards: [
          {
            paragraphs: [
              "Chatbots mostly respond to what you ask. Agents can plan steps, call tools, check files, work with APIs, and help move a task from idea to action. That is why prompt quality, permissions, review, and security habits matter more as AI becomes part of real workflows."
            ]
          }
        ]
      },
      {
        title: "Additional course notes",
        intro: "Useful context and references for later in the course.",
        cards: [
          {
            title: "Who this is for",
            paragraphs: [
              "This course is for employees across production, quality, maintenance, engineering, scheduling, procurement, finance, HR, office staff, and leadership."
            ]
          },
          {
            title: "Prerequisites",
            list: [
              "At least 18 years of age",
              "High school diploma, GED, or HiSet",
              "Resident of Maine",
              "Proof of authorization to work in the U.S."
            ]
          },
          {
            title: "AI Foundations Part 2",
            paragraphs: [
              "The follow-on course explores local AI, private workflows, RAG, lightweight model customization, and practical agent systems."
            ],
            action: { label: "View Part 2 overview", href: "part2/", variant: "primary" }
          },
          {
            title: "SMCC AI Adoption draft site",
            paragraphs: [
              "A planning resource for AI adoption training, published as a draft companion site for review."
            ],
            action: { label: "Open SMCC AI Adoption", href: "/smcc-ai-adoption/" }
          },
          {
            title: "AI model categories at a glance",
            paragraphs: [
              "Use the AI Models page to explain where GPT-style tools fit, and how models like YOLO, SAM, and Whisper solve different kinds of problems."
            ],
            action: { label: "Compare AI model types", href: "ai-models/" }
          }
        ]
      }
    ]
  },
  part2: {
    slug: "part2",
    courseLabel: "Part 2",
    title: "AI Foundations for Everyone - Part 2",
    subtitle: "Local AI, Private Workflows, and Practical Agent Systems",
    summary:
      "Part 2 moves from safe AI use into practical AI systems. You will set up a local-first workflow, run models, connect AI to files and tools, use agents carefully, and learn when local AI makes sense compared with cloud services.",
    badges: ["Five sections", "2-hour meetings", "Local AI lab focus"],
    cssHref: "../styles.css?v=20260604-agentactions",
    navPrefix: "../",
    activeNav: "part2",
    primaryButtons: [
      { label: "Start Section 1", href: "session-1.html", variant: "primary" },
      { label: "View registration details", href: "#registration" }
    ],
                sectionDetails: [
      {
        label: "Section 1",
        title: "Setup Path: Local Machine to Deployed App",
        href: "session-1.html",
        detail:
          "Move from a fresh Raspberry Pi/Linux lab machine to terminal basics, updates, Node.js, GitHub, Codex, a simple class app, a public GitHub repo for today, and Vercel deployment.",
        bullets: [
          "Linux terminal basics, system checks, updates, and required tools",
          "Node.js, Git, GitHub account setup, and Git configuration",
          "Codex install, inspect-only prompt, simple app build, review, push, and deploy",
          "Public repo today because the app uses no private data and avoids SSH or token setup; private repos and SSH keys can come later"
        ],
        action: { label: "Open Section 1", href: "session-1.html", variant: "primary" }
      },
      {
        label: "Section 2",
        title: "Run Local Models and Understand Inference",
        href: "session-2.html",
        detail:
          "Run a local model with Ollama or a similar tool, then compare inference, context windows, model size, hardware limits, and local-vs-cloud tradeoffs.",
        bullets: [
          "Understand inference compared with training and fine-tuning",
          "Compare small local models with larger cloud models",
          "Discuss speed, privacy, cost, capability, context windows, and reliability",
          "Local is not always better; quality varies by model size, hardware, and task"
        ],
        action: { label: "Open Section 2", href: "session-2.html", variant: "primary" }
      },
      {
        label: "Section 3",
        title: "Ground AI with Local Files",
        href: "#section-3",
        detail:
          "Use retrieval-augmented generation as grounding: how AI answers from your files instead of guessing.",
        bullets: [
          "Documents -> chunks -> embeddings -> vector search -> retrieved context -> cited answer",
          "Prepare a local or private document set and evaluate answers against sources",
          "Check for hallucinations, weak citations, missing context, and prompt injection inside documents",
          "This is not a vector database deep dive; the goal is to understand grounding and review"
        ]
      },
      {
        label: "Section 4",
        title: "How a Neural Network Learns",
        href: "session-4.html",
        detail:
          "See how a small neural network learns XOR by making predictions, measuring error, and adjusting its weights and biases.",
        bullets: [
          "Understand inputs, weights, biases, activation functions, predictions, targets, and loss",
          "See how backpropagation and gradient descent adjust a model's parameters",
          "Experiment with epochs, learning rates, saved models, and inference",
          "Build and inspect a dependency-free XOR neural network from GitHub"
        ],
        action: { label: "Open Section 4", href: "session-4.html", variant: "primary" }
      },
      {
        label: "Section 5",
        title: "Customize, Secure, and Present a Local AI Workflow",
        href: "#section-5",
        detail:
          "Bring the course together with lightweight customization choices, privacy review, permissions, local/cloud deployment decisions, and a final practical demonstration.",
        bullets: [
          "Understand when customization helps and when retrieval is enough",
          "Review privacy, permissions, data handling, and oversight practices",
          "Decide whether a local, cloud, or hybrid workflow fits the task",
          "Evaluate whether the workflow used the right source, cited clearly, admitted uncertainty, and can be reproduced"
        ]
      }
    ],
    sectionDetailsIntro:
      "Each section builds a practical workflow: local setup, models, grounded answers, tool-using agents, and a final reviewed system.",
    why: {
      id: "why-this-matters",
      title: "Why this matters",
      cards: [
        {
          title: "More control over data, tools, and infrastructure.",
          paragraphs: [
            "Part 1 focused on safe, effective AI use. Part 2 moves into practical AI systems: local tools, coding agents, GitHub, deployment, local models, grounded answers from files, and tool-using workflows.",
            "The goal is not to master every AI engineering tool. The goal is to understand the workflow well enough to build safely, review changes, and make smart local-vs-cloud decisions."
          ]
        }
      ]
    },
    about: {
      id: "what-this-course-is-about",
      title: "What this course is about",
      intro: "The focus is practical local AI judgment, not hype.",
      cards: [
        {
          list: [
            "Local-first setup with Linux, GitHub, Codex, and deployment",
            "Running local models and understanding hardware limits",
            "Grounding AI answers in files with retrieval concepts",
            "Agent workflows that inspect files, call tools, and create artifacts",
            "Privacy, permissions, prompt injection, and deployment tradeoffs"
          ]
        }
      ]
    },
    outcomes: {
      id: "expected-outcomes",
      title: "Expected outcomes",
      cards: [
        {
          list: [
            "Explain the difference between cloud AI and local AI.",
            "Set up and test a Raspberry Pi based AI lab environment.",
            "Use Git basics to track course work and move between examples safely.",
            "Explain inference, context windows, retrieval, agents, tools, and lightweight customization.",
            "Build a simple local-first AI workflow.",
            "Ground AI answers in local files and check sources.",
            "Use agents with clear boundaries and human review.",
            "Understand basic prompt injection and permission risks.",
            "Decide when local AI, cloud AI, or a hybrid workflow makes sense."
          ]
        }
      ]
    },
    registration: {
      title: "Registration",
      id: "registration",
      cards: [
        {
          paragraphs: [
            "For registration, scheduling, or questions about AI Foundations for Everyone - Part 2, please contact Workforce Development."
          ],
          action: {
            label: "smccworkforcereg@mainecc.edu",
            href: "mailto:smccworkforcereg@mainecc.edu",
            variant: "primary"
          }
        }
      ]
    },
    additionalNotes: [
      {
        title: "Core mental model",
        cards: [
          {
            paragraphs: [
              "Local machine + project files -> model or cloud AI -> retrieval when files matter -> tools when actions matter -> agent workflow -> human review -> Git/GitHub checkpoint -> deploy or share."
            ]
          }
        ]
      },
      {
        title: "What we will not overdo",
        cards: [
          {
            list: [
              "Deep vector database architecture",
              "Complex agent frameworks",
              "Fine-tuning mechanics or LoRA setup",
              "Kubernetes or cloud infrastructure",
              "Paid API-heavy workflows"
            ]
          }
        ]
      }
    ]
  }
};
