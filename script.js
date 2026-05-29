const projects = [
  {
    title: "Queens CLI",
    image: "resources/queens-cli-banner.webp",
    description: "A terminal-based Java implementation of the popular LinkedIn \"Queens\" logic puzzle, built with Maven and JUnit.",
    tags: ["Java", "Maven", "JUnit"],
    code: "https://github.com/chamered/queens-cli",
    demo: "https://github.com/chamered/queens-cli/releases/tag/v1.1.0"
  },
  {
    title: "TriniTalk Website",
    image: "resources/trinitalk-banner.webp",
    description: "The official website of the TriniTalk Podcast where you can ask any question about the Church and receive the answer in it.",
    tags: ["SvelteKit", "JavaScript", "CSS"],
    code: "https://github.com/chamered/trinitalk",
    demo: "https://trinitalk.vercel.app"
  },
  {
    title: "poLite Compiler",
    image: "resources/polite-banner.webp",
    description: "A custom compiler for 'poLite', a well-mannered and gentle variation of the C programming language. Built with FLEX and BISON.",
    tags: ["Flex", "Bison", "C"],
    code: "https://github.com/chamered/polite-compiler",
    demo: "https://github.com/chamered/polite-compiler/releases"
  }
];

function renderProjects() {
  const container = document.getElementById("project-container");

  container.innerHTML = projects.map(p => `
    <div class="col-md-6 col-lg-4">
      <div class="card project-card h-100 border-0 shadow-sm">
        <img src="${p.image}" class="card-img-top project-img" alt="${p.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold">${p.title}</h5>
          <p class="card-text text-secondary small flex-grow-1">${p.description}</p>
          <div class="mb-3">
            ${p.tags.map(t => `<span class="badge tech-badge me-1">${t}</span>`).join("")}
          </div>
          <div class="d-flex gap-2 mt-auto">
            <a href="${p.code}" class="btn btn-outline-dark btn-sm rounded-pill"><i class="bi bi-github me-1"></i>Code</a>
            <a href="${p.demo}" class="btn btn-primary btn-sm rounded-pill"><i class="bi bi-box-arrow-up-right me-1"></i>Demo</a>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
