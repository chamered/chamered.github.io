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
    <div class="project-row">
      <div class="project-top">
        <span class="project-title">${p.title}</span>
        <span class="project-links">
          ${p.code ? `<a href="${p.code}" target="_blank"><i class="bi bi-github"></i> Code</a>` : ""}
          ${p.demo ? `<a href="${p.demo}" target="_blank"><i class="bi bi-box-arrow-up-right"></i> Demo</a>` : ""}
        </span>
      </div>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ── Scroll fade-in ──

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-in:not(.hero .fade-in)").forEach((el) => {
    observer.observe(el);
  });
}

// ── Navbar scroll effect ──

function initNavbar() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ── Mobile menu ──

function initMobileMenu() {
  const toggler = document.getElementById("nav-toggler");
  const menu = document.getElementById("mobile-menu");
  const close = document.getElementById("mobile-close");

  toggler.addEventListener("click", () => menu.classList.add("open"));
  close.addEventListener("click", () => menu.classList.remove("open"));

  menu.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}

// ── Init ──

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initScrollAnimations();
  initNavbar();
  initMobileMenu();
});
