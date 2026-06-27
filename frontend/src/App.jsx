import { useEffect, useMemo, useState } from "react";
import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
  stats
} from "./data/portfolio.js";
import Chatbot from "./components/Chatbot.jsx";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="nav-inner">
          <a className="brand" href="#hero" aria-label="Muhammad Humayun home" onClick={closeMenu}>
            <span className="brand-mark">MH</span>
            <span>Muhammad Humayun</span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <a className="button button-primary button-small" href="#contact">
              Contact
            </a>
            <button
              className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <p className="availability">{profile.availability}</p>
          <h1 className="hero-title" id="hero-title">
            {profile.name}
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-copy">{profile.intro}</p>

          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href={profile.resume} target="_blank" rel="noopener">
              Resume
            </a>
            <a className="button button-secondary" href="#contact">
              Contact
            </a>
          </div>

          <div className="hero-stats" aria-label="Portfolio highlights">
            {stats.map((item) => (
              <div key={item.label}>
                <span className="stat-value">{item.value}</span>
                <span className="stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="portrait-wrap reveal">
          <div className="portrait-frame">
            <img src={profile.portrait} alt="Portrait of Muhammad Humayun" />
          </div>
          <p className="portrait-note">AI / ML Engineer based in {profile.location}</p>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card reveal ${project.featured ? "project-wide" : ""}`}>
      <div className="project-media">
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
      </div>
      <div className="project-body">
        <p className="project-meta">{project.category}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {project.points?.length ? (
          <ul className="project-points">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}

        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.github ? (
            <a className="button button-primary button-small" href={project.github} target="_blank" rel="noopener">
              GitHub
            </a>
          ) : null}
          {project.demo ? (
            <a className="button button-secondary button-small" href={project.demo} target="_blank" rel="noopener">
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section-muted" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-title" id="projects-title">
              Production-minded AI systems.
            </h2>
          </div>
          <p className="section-intro">
            A focused set of full-stack AI products, RAG systems, computer vision tools, and workflow automation projects.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <p className="section-label">Technical skills</p>
            <h2 className="section-title" id="skills-title">
              A focused AI engineering stack.
            </h2>
          </div>
          <p className="section-intro">
            Categorized for quick scanning: model development, LLM applications, backend systems, vector search, cloud deployment, and workflow automation.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card reveal" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-muted" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="reveal">
          <p className="section-label">About</p>
          <h2 className="section-title" id="about-title">
            I build AI systems with product discipline.
          </h2>
        </div>

        <div className="about-copy reveal">
          <p>
            I am an <strong>AI/ML Engineer</strong> with hands-on experience building machine learning systems and LLM-powered applications, from data pipelines and retrieval workflows to deployed inference endpoints.
          </p>
          <p>
            My strongest work sits at the intersection of research-aware AI development and practical engineering: RAG pipelines, agentic workflows, computer vision systems, API design, and cloud deployment.
          </p>
          <p>
            I am currently pursuing a B.S. in Computer Science at UET Mardan while continuing to build portfolio projects that demonstrate real implementation depth.
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <p className="section-label">Experience</p>
            <h2 className="section-title" id="experience-title">
              Practical AI engineering experience.
            </h2>
          </div>
          <p className="section-intro">
            A concise timeline focused on applied AI, measurable systems work, and production-ready engineering habits.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item reveal" key={`${item.role}-${item.company}`}>
              <div className="timeline-card">
                <div className="timeline-top">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-company">{item.company}</p>
                  </div>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <ul className="timeline-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section-muted" id="education" aria-labelledby="education-title">
      <div className="container edu-grid">
        <div className="reveal">
          <p className="section-label">Education</p>
          <h2 className="section-title" id="education-title">
            Computer science foundation.
          </h2>
        </div>
        <div className="info-card reveal">
          <div className="timeline-top">
            <div>
              <h3 className="timeline-role">{education.degree}</h3>
              <p className="timeline-company">{education.school}</p>
            </div>
            <span className="timeline-date">{education.date}</span>
          </div>
          <p className="info-copy">{education.note}</p>
          <p className="info-copy muted">{education.location}</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("Please complete all fields before sending.");
      return;
    }

    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app...");
    event.currentTarget.reset();
  }

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="reveal">
          <p className="section-label">Contact</p>
          <h2 className="section-title" id="contact-title">
            Open to AI engineering roles and collaborations.
          </h2>
          <p className="section-intro">
            Best fit: applied AI teams building LLM applications, RAG systems, ML platforms, automation, or production computer vision tools.
          </p>

          <div className="contact-links">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              Email <span>{profile.email}</span>
            </a>
            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn <span>linkedin.com/in/humayun-mhk</span>
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noopener">
              GitHub <span>github.com/humayun-mhk</span>
            </a>
            <a className="contact-link" href="tel:+923140818147">
              Phone <span>{profile.phone}</span>
            </a>
          </div>
        </div>

        <form className="contact-panel reveal" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="form-row">
              Your name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label className="form-row">
              Email address
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="form-row">
              Subject
              <input name="subject" type="text" required />
            </label>
            <label className="form-row">
              Message
              <textarea name="message" required />
            </label>
            <button className="button button-primary" type="submit">
              Send message
            </button>
            <p className="form-status" aria-live="polite">
              {status}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>&copy; 2026 Muhammad Humayun. Built for clarity and credibility.</span>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

function useRevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useRevealObserver();
  const chatApiUrl = useMemo(
    () => import.meta.env.VITE_CHAT_API_URL || "https://humayun-mhk-humayun-portfolio-chatbot.hf.space/chat",
    []
  );

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Chatbot apiUrl={chatApiUrl} />
    </>
  );
}
