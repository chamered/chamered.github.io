const projects = [
  {
    title: "Queens CLI",
    description: "A terminal-based Java implementation of the popular LinkedIn \"Queens\" logic puzzle, built with Maven and JUnit.",
    tags: ["Java", "Maven", "JUnit"],
    code: "https://github.com/chamered/queens-cli",
    demo: ""
  },
  {
    title: "TriniTalk Website",
    description: "The official website of the TriniTalk Podcast where you can ask any question about the Church and receive the answer in it.",
    tags: ["SvelteKit", "JavaScript", "CSS"],
    code: "https://github.com/chamered/trinitalk",
    demo: "https://trinitalk.vercel.app"
  },
  {
    title: "poLite Compiler",
    description: "A custom compiler for 'poLite', a well-mannered and gentle variation of the C programming language. Built with FLEX and BISON.",
    tags: ["Flex", "Bison", "C"],
    code: "https://github.com/chamered/polite-compiler",
    demo: ""
  },
  {
    title: "Minnarino Twitch Bot",
    description: "An autonomous, AI-powered Twitch chatbot built with Python and Groq, featuring short-term memory and spontaneous human-like interactions.",
    tags: ["Python", "Groq", "Twitch API"],
    code: "https://github.com/chamered/minnarino-twitch-bot",
    demo: ""
  }
];

const skills = [
  { 
    skill: "Languages",
    items: ["Java", "Kotlin", "Python", "C", "JavaScript", "HTML/CSS"],
    icon: "bi bi-code-slash",
    color: "primary"
  },
  {
    skill: "Frameworks",
    items: ["Bootstrap", "SvelteKit", "React", "Node.js"],
    icon: "bi bi-layers",
    color: "accent"
  },
  {
    skill: "Tools",
    items: ["Git", "VS Code", "IntelliJ IDEA", "Maven", "JUnit", "Godot Engine"],
    icon: "bi bi-tools",
    color: "danger"
  },
  {
    skill: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
    icon: "bi bi-database",
    color: "warning"
  }
]

function renderProjects() {
  const container = document.getElementById("project-container");

  container.innerHTML = projects.map(p => `
    <div class="col">
      <div class="card h-100 border-0 shadow">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
            <h4 class="card-title">
              <a href="${p.code}" class="text-decoration-none hover:link-70" target="_blank">${p.title}</a>
            </h4>
            <span class="d-flex flex-shrink-0 gap-1">
              ${p.code ? `<a class="btn btn-xs" href="${p.code}" target="_blank" aria-label="${p.title} code"><i class="bi bi-github"></i></a>` : ""}
              ${p.demo ? `<a class="btn btn-xs" href="${p.demo}" target="_blank" aria-label="${p.title} demo"><i class="bi bi-box-arrow-up-right"></i></a>` : ""}
            </span>
          </div>
          <p class="card-text fg-secondary">${p.description}</p>
          <div class="d-flex gap-1">
            ${p.tags.map(t => `<span class="badge rounded-4">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `).join("");
}


function renderSkills() {
  const container = document.getElementById("skill-container");
  
  container.innerHTML = skills.map(s => `
    <div class="col">
      <div class="card card-subtle theme-${s.color} border-0 shadow h-100">
        <div class="card-header fw-bold text-uppercase d-inline">
          <i class="${s.icon} me-1"></i>${s.skill}
        </div>
        <div class="card-body">
          <p class="card-text">${s.items.join(", ")}</p>
        </div>
      </div>
    </div>
  `).join("");
}
  
renderProjects();
renderSkills();