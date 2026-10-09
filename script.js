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

function renderProjects() {
  const container = document.getElementById("project-container");

  container.innerHTML = projects.map(p => `
    <div class="col">
      <div class="card h-100 border-0 shadow">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
            <h3 class="card-title h5 mb-0">
              <a class="link-primary text-decoration-none link-underline-opacity-0 link-underline-opacity-100-hover"
                href="${p.code}" target="_blank">${p.title}</a>
            </h3>
            <span class="d-flex flex-shrink-0 gap-1">
              ${p.code ? `<a class="btn btn-sm btn-outline-dark" href="${p.code}" target="_blank" aria-label="${p.title} code"><i class="bi bi-github"></i></a>` : ""}
              ${p.demo ? `<a class="btn btn-sm btn-outline-dark" href="${p.demo}" target="_blank" aria-label="${p.title} demo"><i class="bi bi-box-arrow-up-right"></i></a>` : ""}
            </span>
          </div>
          <p class="card-text text-secondary flex-grow-1">${p.description}</p>
          <div class="d-flex flex-wrap gap-1">
            ${p.tags.map(t => `<span class="badge bg-light text-secondary">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

renderProjects();