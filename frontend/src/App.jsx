import { useEffect, useMemo, useState } from "react";
import {
  education,
  experience,
  profile,
  projectFilters,
  projects,
  roleFocus,
  skillGroups
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
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.28, rootMargin: "-74px 0px -52% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
              <a
                key={item.href}
                className={activeSection === item.href.slice(1) ? "is-active" : ""}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
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
          <a
            key={item.href}
            className={activeSection === item.href.slice(1) ? "is-active" : ""}
            href={item.href}
            onClick={closeMenu}
          >
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
          <div className="hero-eyebrow">
            <span>{profile.availability}</span>
            <span>{profile.location}</span>
          </div>
          <h1 className="hero-title" id="hero-title">
            {profile.name}
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-copy">{profile.intro}</p>

          <div className="role-chips" aria-label="Role focus">
            {roleFocus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href={profile.resume} target="_blank" rel="noopener">
              Resume
            </a>
            <a className="button button-secondary" href="#contact">
              Contact
            </a>
          </div>

        </div>

        <div className="portrait-wrap reveal">
          <div className="portrait-frame">
            <img src={profile.portrait} alt="Portrait of Muhammad Humayun" />
          </div>
          <div className="portrait-proof">
            <p>Recruiter snapshot</p>
            <ul>
              <li>Full-stack AI product builder</li>
              <li>RAG, agents, CV, APIs, deployment</li>
              <li>Available for internships and junior AI roles</li>
            </ul>
          </div>
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
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

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
              Code
            </a>
          ) : null}
          {project.demo ? (
            <a className="button button-secondary button-small" href={project.demo} target="_blank" rel="noopener">
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.filters?.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="section-muted" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <h2 className="section-title" id="projects-title">
              Projects
            </h2>
          </div>
        </div>

        <div className="project-toolbar reveal" aria-label="Filter projects">
          {projectFilters.map((filter) => (
            <button
              className={activeFilter === filter ? "is-active" : ""}
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <p className="project-count reveal">
          Showing {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"}
        </p>

        <div className="project-grid">
          {filteredProjects.map((project) => (
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
            <h2 className="section-title" id="skills-title">
              Skills
            </h2>
          </div>
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
          <h2 className="section-title" id="about-title">
            About
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
            <h2 className="section-title" id="experience-title">
              Experience
            </h2>
          </div>
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
          <h2 className="section-title" id="education-title">
            Education
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
          <h2 className="section-title" id="contact-title">
            Contact
          </h2>

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
    const observedElements = new WeakSet();
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

    const observeReveals = () => {
      document.querySelectorAll(".reveal").forEach((element) => {
        if (observedElements.has(element)) return;
        observedElements.add(element);
        observer.observe(element);
      });
    };

    observeReveals();
    const mutationObserver = new MutationObserver(observeReveals);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
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
