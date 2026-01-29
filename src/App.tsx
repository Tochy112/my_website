import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Twitter, Menu, X } from "lucide-react";
import {
  AnimatedGallery,
  BubbleMenu,
  FallingText,
  GlitchText,
  RotatingText,
  ScrollFloat,
  SplitText,
  StaggeredMenu,
} from "./components/react-bits";
import {
  galleryImages,
  menuItems,
  projects,
  techStack,
  workHistory,
} from "./constants";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [greetingStep, setGreetingStep] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("fullstack");

  useEffect(() => {
    setTimeout(() => setGreetingStep(1), 3500);
    setTimeout(() => setLoading(false), 5000);
  }, []);

  // Add this useEffect after your existing useEffects
  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const timelineLine = document.querySelector(
      ".timeline-line",
    ) as HTMLElement;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Calculate line height based on visible items
            const visibleItems = document.querySelectorAll(
              ".timeline-item.visible",
            );
            if (visibleItems.length > 0) {
              const lastVisibleItem = visibleItems[
                visibleItems.length - 1
              ] as HTMLElement;
              const itemTop = lastVisibleItem.offsetTop;
              const itemHeight = lastVisibleItem.offsetHeight / 2;
              const lineHeight = itemTop + itemHeight;

              if (timelineLine) {
                timelineLine.style.height = `${lineHeight}px`;
              }
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      },
    );

    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [loading]); // Run after loading is complete

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          {greetingStep === 0 && (
            <GlitchText className="loading-text">Chere...</GlitchText>
          )}
          {greetingStep === 1 && (
            <div className="greeting-text">
              <FallingText className="greeting-line">Ndewo</FallingText>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio">
      {/* Mobile Menu Button */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Bubble Menu */}
      <div className="desktop-menu">
        <BubbleMenu items={menuItems} onItemClick={scrollToSection} />
      </div>

      {/* Mobile Staggered Menu */}
      {isMobileMenuOpen && (
        <StaggeredMenu
          items={menuItems.map((item) => ({
            ...item,
            onClick: () => scrollToSection(item.id),
          }))}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <ScrollFloat className="hero-float">
          <div className="hero-background"></div>
        </ScrollFloat>
        <div className="hero-content">
          <h1 className="hero-title">
            <SplitText delay={0}>Hi, I'm</SplitText>
            <br />
            <span className="hero-name">REGINALD</span>
          </h1>
          <div className="hero-subtitle">
            <span className="subtitle-text">I'm a </span>
            <RotatingText
              words={[
                "FullStack Developer",
                "Blockchain Engineer",
                "Tech Enthusiast",
                "Problem Solver",
              ]}
              className="rotating-role"
            />
          </div>
          <p className="hero-description">
            Crafting innovative digital experiences with cutting-edge
            technologies. Passionate about building scalable solutions and
            exploring the decentralized web.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">
            <SplitText>About Me</SplitText>
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer with expertise spanning the entire
                technology stack. From crafting beautiful, responsive frontends
                to architecting robust backend systems and building innovative
                blockchain solutions, I thrive on solving complex problems and
                bringing ideas to life.
              </p>
              <p>
                With years of experience in the industry, I've had the privilege
                of working with amazing teams and contributing to projects that
                make a real difference. When I'm not coding, you'll find me at
                tech conferences, contributing to open source, or exploring the
                latest developments in Web3.
              </p>

              <div className="download-resume-button">
                <button className="resume-button">Download Resume</button>
              </div>
            </div>

            <div className="about-photo">
              <img
                src="/profile.jpg"
                alt="Profile Photo"
                className="about-photo-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work History */}
      <section id="work" className="work-section">
        <div className="section-container">
          <h2 className="section-title">
            <SplitText>Work History</SplitText>
          </h2>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            {workHistory.map((job, i) => (
              <div key={i} className="timeline-item" data-index={i}>
                <div className="timeline-content-left">
                  <h3 className="timeline-title">{job.title}</h3>
                  <p className="timeline-company">{job.company}</p>
                </div>

                <div className="timeline-center">
                  <div className="timeline-dot"></div>
                </div>

                <div className="timeline-content-right">
                  <div className="timeline-year">{job.period}</div>
                  <p className="timeline-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">
            <SplitText>Projects</SplitText>
          </h2>

          {/* Category Tabs */}
          <div className="project-tabs">
            <button
              className={`project-tab ${activeCategory === "fullstack" ? "active" : ""}`}
              onClick={() => setActiveCategory("fullstack")}
            >
              Full Stack
            </button>
            <button
              className={`project-tab ${activeCategory === "backend" ? "active" : ""}`}
              onClick={() => setActiveCategory("backend")}
            >
              Backend
            </button>
            <button
              className={`project-tab ${activeCategory === "blockchain" ? "active" : ""}`}
              onClick={() => setActiveCategory("blockchain")}
            >
              Blockchain
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid-cards">
            {projects[activeCategory as keyof typeof projects].map(
              (project, i) => (
                <div key={i} className="project-card-new">
                  <div className="project-number">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="project-thumbnail">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-name-new">{project.name}</h3>
                    <p className="project-description-new">
                      {project.description}
                    </p>
                    <div className="project-tech-tags">
                      {project.tech.split(", ").map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="tech-section">
        <div className="section-container">
          <h2 className="section-title">
            <SplitText>Tech Stack</SplitText>
          </h2>
          <p className="tech-subtitle">Technologies I work with</p>

          <div className="tech-grid-icons">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-icon-card">
                <div className="tech-icon">
                  <div>
                    <img src={tech.icon} alt="icons" className="stack-img" />
                  </div>
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="gallery-section">
        <div className="section-container">
          <h2 className="section-title">
            <SplitText>Photos Speak</SplitText>
          </h2>
          <p className="gallery-subtitle">
            Events, conferences, and moments that matter
          </p>
          <AnimatedGallery images={galleryImages} />
        </div>
      </section>

      {/* Companies */}
      {/* <section id="companies" className="companies-section">
        <div className="section-container">
          <h2 className="section-title">
            <SplitText>Companies I've Worked With</SplitText>
          </h2>
          <div className="companies-grid">
            {companies.map((company, i) => (
              <div key={i} className="company-card">
                <div className="company-logo">{company.logo}</div>
                <p className="company-name">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">
            <SplitText>Get In Touch</SplitText>
          </h2>
          <p className="contact-subtitle">
            Let's build something amazing together. Reach out for collaborations
            or just a friendly chat.
          </p>
          <div className="contact-content">
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-link">
                <Mail size={24} />
                <span>ukwuomatochi112@gmail.com</span>
              </a>
              <a
                href="https://github.com/tochy112"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
                <span>@tochy112</span>
              </a>
              <a
                href="https://linkedin.com/in/ukwuoma-tochukwu/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/tochy0x"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
                <span>@tochy0x</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} tochy0x.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
