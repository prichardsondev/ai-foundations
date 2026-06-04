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
      "A five-week hands-on follow-up course where participants run local models, build private document workflows, connect AI tools, and learn when local AI makes sense compared with cloud services.",
    badges: ["Five sections", "2-hour meetings", "Local AI lab focus"],
    cssHref: "../styles.css?v=20260604-agentactions",
    navPrefix: "../",
    activeNav: "part2",
    primaryButtons: [
      { label: "View registration details", href: "#registration", variant: "primary" }
    ],
                sectionDetails: [
      {
        label: "Section 1",
        title: "Set Up the Local AI Lab",
        href: "#section-1",
        detail:
          "Get the Raspberry Pis ready for the course: boot, update, confirm SSD storage, install Git and Node.js, configure the development environment, and install an AI agent interface such as Codex or Claude.",
        bullets: [
          "Raspberry Pi 5 orientation, OS updates, networking, and storage checks",
          "Git setup and core commands: clone, status, add, commit, pull, and push",
          "Node.js installation and basic terminal confidence",
          "Codex or Claude agent setup, permissions, and first safe tasks"
        ]
      },
      {
        label: "Section 2",
        title: "Run Local Models and Understand Inference",
        href: "#section-2",
        detail:
          "Introduce local language models, Ollama, model size tradeoffs, prompts, context windows, and the practical limits of small hardware.",
        bullets: [
          "Install and test Ollama or a comparable local model runner",
          "Compare local responses with cloud AI responses",
          "Discuss speed, privacy, cost, capability, and reliability"
        ]
      },
      {
        label: "Section 3",
        title: "Build a Private Document Assistant",
        href: "#section-3",
        detail:
          "Move from chatting with a model to asking questions over local files using retrieval-augmented generation concepts.",
        bullets: [
          "Prepare a small private document set",
          "Chunk, embed, search, and cite local information",
          "Evaluate answers for usefulness, accuracy, and trust"
        ]
      },
      {
        label: "Section 4",
        title: "Connect Agents to Tools and Repeatable Workflows",
        href: "#section-4",
        detail:
          "Show how agents can inspect files, call tools, summarize work, create artifacts, and support repeatable tasks while still requiring human judgment.",
        bullets: [
          "Create a small workflow for summarizing, classifying, or searching files",
          "Use an agent to assist with command-line and project tasks",
          "Identify where automation should pause for human review"
        ]
      },
      {
        label: "Section 5",
        title: "Customize, Secure, and Present a Local AI System",
        href: "#section-5",
        detail:
          "Bring the course together with lightweight customization concepts, privacy review, deployment choices, and a final practical demonstration.",
        bullets: [
          "Understand when customization helps and when retrieval is enough",
          "Review permissions, data handling, and oversight practices",
          "Share a final local AI workflow and explain the design choices"
        ]
      }
    ],
    sectionDetailsIntro:
      "Each section includes a focused topic, practical activities, and a clear outcome participants can use after class.",
    why: {
      id: "why-this-matters",
      title: "Why this matters",
      cards: [
        {
          title: "More control over data, tools, and infrastructure.",
          paragraphs: [
            "Part 1 focused on safe, effective AI use. Part 2 moves into local-first AI systems: running models, building private document workflows, connecting agents to tools, and deciding when local systems make sense compared with cloud services.",
            "The goal is not to turn everyone into an AI engineer. The goal is to help participants understand enough of the system to use AI more safely, privately, and intentionally."
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
            "Running local models and understanding hardware limits",
            "Private document workflows and retrieval concepts",
            "Agent-assisted file, tool, and workflow tasks",
            "Privacy, permissions, and deployment tradeoffs",
            "Clear explanations of when local AI makes sense"
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
            "Describe inference, retrieval, agents, tools, and lightweight customization.",
            "Build a simple private AI workflow over local files.",
            "Identify privacy, permission, and automation risks in agent systems.",
            "Make more informed decisions about AI infrastructure and deployment."
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
    additionalNotes: []
  }
};
