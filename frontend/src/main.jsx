import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Phone,
  Send,
  Server,
  Sparkles,
  Trophy,
  UserRound,
  X
} from 'lucide-react';
import './styles.css';

const isDevelopment = import.meta.env.DEV;
const API_BASE = import.meta.env.VITE_API_BASE_URL || (isDevelopment ? 'http://localhost:8080/api' : 'https://api-placeholder.com/api');

const fallback = {
  profile: {
    name: 'Himanshu Kumar Thakur',
    title: 'Java Full Stack Developer',
    email: 'hkumar54321s@gmail.com',
    phone: '+91 6201340937',
    location: 'Dehradun, Uttarakhand',
    resumeUrl: '/resume/Himanshu_Kumar_Thakur_Resume.pdf',
    summary:
      'Final-year B.Tech CSE student with experience building scalable web applications using Spring Boot, React.js, and REST APIs. Skilled in backend development, database design, and API integration, with strong foundations in Data Structures, OOP, and system design.',
    highlights: [
      'Final-year B.Tech CSE student, expected 2026',
      'Java, Spring Boot, React, REST APIs and MySQL',
      'GATE CSE qualified twice: 2026 and 2025',
      'Interested in software engineering and full-stack systems'
    ]
  },
  projects: [
    {
      id: 1,
      title: 'Sahi Raasta - AI-Powered Career Guidance Platform',
      period: 'Mar 2026 - Current',
      category: 'AI career platform',
      accent: '#22c55e',
      description:
        'A full-stack career guidance platform that gives students dynamic, step-by-step roadmaps from 10th grade onwards.',
      techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'LLM API'],
      impact: [
        'Built React and Java flows for personalized career guidance.',
        'Integrated an LLM API to analyze user data and generate tailored college and career roadmaps.',
        'Designed backend support for safe authentication and smooth roadmap retrieval.'
      ]
    },
    {
      id: 2,
      title: 'Memory Allocator Simulator',
      period: 'Oct 2025 - Dec 2025',
      category: 'Operating systems visualizer',
      accent: '#38bdf8',
      description:
        'An interactive simulation application for visualizing core operating system memory allocation algorithms.',
      techStack: ['Java', 'React.js', 'Spring Boot', 'REST APIs'],
      impact: [
        'Implemented First Fit and Best Fit allocation logic in Java.',
        'Engineered REST endpoints to connect backend simulation logic with the frontend.',
        'Created a dynamic React interface for real-time memory allocation visualization.'
      ]
    },
    {
      id: 3,
      title: 'Full-Stack Calorie Tracker',
      period: 'Apr 2025 - Jul 2025',
      category: 'Health tracking app',
      accent: '#f97316',
      description:
        'A full-stack nutrition tracker for daily intake, BMR calculation, food cataloging, and consumption logs.',
      techStack: ['React', 'Tailwind CSS', 'Java', 'Spring Boot', 'REST APIs', 'MySQL'],
      impact: [
        'Built a responsive React frontend and Spring Boot backend for REST API management.',
        'Used MVC and service-layer architecture to calculate BMR and daily caloric limits.',
        'Designed normalized MySQL schemas for users, foods, and daily consumption logs.'
      ]
    }
  ],
  skills: [
    ['Java', 'Languages', 'java/java-original.svg', 92],
    ['JavaScript', 'Languages', 'javascript/javascript-original.svg', 84],
    ['Python', 'Languages', 'python/python-original.svg', 72],
    ['C Programming', 'Languages', 'c/c-original.svg', 95],
    ['HTML5', 'Languages', 'html5/html5-original.svg', 86],
    ['CSS3', 'Languages', 'css3/css3-original.svg', 82],
    ['React.js', 'Frontend', 'react/react-original.svg', 88],
    ['Tailwind CSS', 'Frontend', 'tailwindcss/tailwindcss-original.svg', 78],
    ['Spring Boot', 'Backend', 'spring/spring-original.svg', 88],
    ['REST APIs', 'Backend', 'swagger/swagger-original.svg', 86],
    ['Microservices', 'Backend', 'spring/spring-original.svg', 70],
    ['MySQL', 'Database', 'mysql/mysql-original.svg', 84],
    ['SQL', 'Database', 'azuresqldatabase/azuresqldatabase-original.svg', 80],
    ['AWS', 'Cloud & Tools', 'amazonwebservices/amazonwebservices-original-wordmark.svg', 62],
    ['Git', 'Cloud & Tools', 'git/git-original.svg', 82],
    ['GitHub', 'Cloud & Tools', 'github/github-original.svg', 82],
    ['Linux', 'Cloud & Tools', 'linux/linux-original.svg', 74],
    ['Maven', 'Cloud & Tools', 'maven/maven-original.svg', 76],
    ['IntelliJ IDEA', 'Cloud & Tools', 'intellij/intellij-original.svg', 78],
    ['VS Code', 'Cloud & Tools', 'vscode/vscode-original.svg', 84]
  ].map(([name, category, icon, level], index) => ({
    id: index + 1,
    name,
    category,
    iconUrl: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`,
    level
  })),
  experience: [
    {
      id: 1,
      role: 'Java Developer Intern',
      company: 'InternPe',
      location: 'Remote',
      period: 'Jul 2025 - Sep 2025',
      points: [
        'Implemented exception handling and input validation to improve application reliability.',
        'Used Core Java, OOP, and data structures to build modular application logic.',
        'Completed console-based applications including Tic-Tac-Toe, Rock-Paper-Scissors, and Hangman.'
      ]
    }
  ],
  education: [
    {
      id: 1,
      institution: 'Quantum University',
      location: 'Roorkee, India',
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2022 - Expected 2026'
    },
    {
      id: 2,
      institution: 'DAV Public School Sec-4',
      location: 'Bokaro Steel City, Jharkhand',
      degree: 'Class XII (CBSE)',
      period: '2020 - 2021'
    }
  ],
  achievements: [
    {
      id: 1,
      title: 'GATE CSE Qualified Twice',
      detail: 'Qualified GATE CSE in 2026 during final year and in 2025 during third year.'
    },
    {
      id: 2,
      title: 'PAHAL Volunteer',
      detail: 'Volunteered with PAHAL - ek nanha kadam, supporting education for village kids.'
    }
  ]
};

function LiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pointer = {
      x: window.innerWidth * 0.68,
      y: window.innerHeight * 0.32,
      targetX: window.innerWidth * 0.68,
      targetY: window.innerHeight * 0.32,
      active: false
    };
    const bursts = [];
    const motes = Array.from({ length: 82 }, (_, index) => ({
      angle: index * 0.73,
      orbit: 0.16 + (index % 17) * 0.013,
      speed: 0.0026 + (index % 9) * 0.00045,
      size: 0.7 + (index % 6) * 0.26,
      hue: [42, 49, 31, 18, 174, 348][index % 6],
      drift: (index % 2 ? 1 : -1) * (0.15 + (index % 5) * 0.03)
    }));
    let frame = 0;
    let width = 0;
    let height = 0;
    let animationId;

    const setAppPointerVars = (x, y) => {
      document.documentElement.style.setProperty('--pointer-x', `${x}px`);
      document.documentElement.style.setProperty('--pointer-y', `${y}px`);
      document.documentElement.style.setProperty('--pointer-x-percent', `${(x / Math.max(width, 1)) * 100}%`);
      document.documentElement.style.setProperty('--pointer-y-percent', `${(y / Math.max(height, 1)) * 100}%`);
    };

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      setAppPointerVars(pointer.targetX, pointer.targetY);
    };

    const movePointer = (event) => {
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
      pointer.active = true;
      setAppPointerVars(event.clientX, event.clientY);
    };

    const addBurst = (event) => {
      if (event.target.closest('a, button, input, textarea, select, label, [role="button"], [role="tab"]')) return;
      bursts.push({
        x: event.clientX,
        y: event.clientY,
        age: 0,
        hue: 38 + Math.random() * 20
      });
      if (bursts.length > 12) bursts.shift();
    };

    const draw = () => {
      frame += 1;
      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, width * 0.5, height * 0.5, Math.max(width, height) * 0.82);
      gradient.addColorStop(0, pointer.active ? '#5a3207' : '#3a2108');
      gradient.addColorStop(0.24, '#17100b');
      gradient.addColorStop(0.52, '#0f1511');
      gradient.addColorStop(0.76, '#21100d');
      gradient.addColorStop(1, '#090807');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const flame = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, Math.min(width, height) * 0.54);
      flame.addColorStop(0, 'rgba(255, 214, 89, 0.38)');
      flame.addColorStop(0.28, 'rgba(199, 93, 25, 0.18)');
      flame.addColorStop(0.58, 'rgba(45, 212, 191, 0.08)');
      flame.addColorStop(1, 'rgba(255, 214, 89, 0)');
      ctx.fillStyle = flame;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < motes.length; i += 1) {
        const mote = motes[i];
        mote.angle += mote.speed * (pointer.active ? 1.8 : 1);
        const pullX = (pointer.x / Math.max(width, 1) - 0.5) * width * 0.11;
        const pullY = (pointer.y / Math.max(height, 1) - 0.5) * height * 0.09;
        const orbitX = width * mote.orbit + (i % 11) * 23;
        const orbitY = height * (mote.orbit * 0.82) + (i % 13) * 17;
        const x = width * 0.5 + Math.cos(mote.angle + frame * 0.0013) * orbitX + pullX * mote.drift;
        const y = height * 0.5 + Math.sin(mote.angle * 1.16 + frame * 0.001) * orbitY + pullY * mote.drift;
        const radius = mote.size + Math.sin(frame * 0.025 + i) * 0.7;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${mote.hue + Math.sin(frame * 0.012 + i) * 16}, 96%, 64%, 0.46)`;
        ctx.arc(x, y, Math.max(0.7, radius), 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < 11; i += 1) {
        const y = (height / 10) * (i + 0.5);
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${32 + i * 5}, 96%, ${62 + i}%, ${0.11 + i * 0.006})`;
        ctx.lineWidth = i % 3 === 0 ? 1.6 : 1;
        for (let x = -40; x <= width + 40; x += 22) {
          const influence = Math.max(0, 1 - Math.hypot(x - pointer.x, y - pointer.y) / 380);
          const wave = Math.sin(x * 0.011 + frame * 0.018 + i) * (16 + influence * 44);
          if (x === -40) ctx.moveTo(x, y + wave);
          else ctx.lineTo(x, y + wave);
        }
        ctx.stroke();
      }

      for (let i = bursts.length - 1; i >= 0; i -= 1) {
        const burst = bursts[i];
        burst.age += 1;
        const progress = burst.age / 72;
        const alpha = Math.max(0, 1 - progress);
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${burst.hue}, 100%, 66%, ${alpha * 0.55})`;
        ctx.lineWidth = 2 + alpha * 6;
        ctx.arc(burst.x, burst.y, progress * 340, 0, Math.PI * 2);
        ctx.stroke();

        const spark = ctx.createRadialGradient(burst.x, burst.y, 0, burst.x, burst.y, 120 + progress * 220);
        spark.addColorStop(0, `hsla(${burst.hue}, 100%, 66%, ${alpha * 0.24})`);
        spark.addColorStop(1, `hsla(${burst.hue}, 100%, 66%, 0)`);
        ctx.fillStyle = spark;
        ctx.fillRect(0, 0, width, height);

        if (burst.age > 72) bursts.splice(i, 1);
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', movePointer, { passive: true });
    window.addEventListener('pointerdown', addBurst, { passive: true });
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', movePointer);
      window.removeEventListener('pointerdown', addBurst);
    };
  }, []);

  return <canvas ref={canvasRef} className="live-bg" aria-hidden="true" />;
}

function usePortfolioData() {
  const [data, setData] = useState(fallback);
  

  useEffect(() => {
    const endpoints = ['profile', 'projects', 'skills', 'experience', 'education', 'achievements'];
    Promise.all(
      endpoints.map((endpoint) =>
        fetch(`${API_BASE}/${endpoint}`)
          .then((response) => {
            if (!response.ok) throw new Error(endpoint);
            return response.json();
          })
      )
    )
      .then(([profile, projects, skills, experience, education, achievements]) => {
        setData({
          profile: { ...profile, resumeUrl: '/resume/Himanshu_Kumar_Thakur_Resume.pdf' },
          projects,
          skills,
          experience,
          education,
          achievements
        });
        
      })
     
  }, []);

  return { data };
}

function App() {
  const { data} = usePortfolioData();
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(data.projects[0]?.id);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    setActiveProject(data.projects[0]?.id);
  }, [data.projects]);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(data.skills.map((skill) => skill.category)))],
    [data.skills]
  );

  const visibleSkills = skillFilter === 'All'
    ? data.skills
    : data.skills.filter((skill) => skill.category === skillFilter);

  const currentProject = data.projects.find((project) => project.id === activeProject) || data.projects[0];
  const mailSubject = encodeURIComponent(`Portfolio connection from ${contactForm.name || 'a visitor'}`);
  const mailBody = encodeURIComponent(
    `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nPhone: ${contactForm.phone || 'Not provided'}\n\nMessage:\n${contactForm.message}`
  );

  const updateContactField = (field) => (event) => {
    setContactForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    window.location.href = `mailto:${data.profile.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <>
      <LiveBackground />
      <div className="site-shell">
        <header className="nav">
          <a href="#home" className="brand" aria-label="Go to home">
            <span>HKT</span>
          </a>
          <button className="icon-button menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} onClick={() => setMenuOpen(false)}>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section id="home" className="hero section">
            <div className="hero-copy">
              
              <p className="eyebrow">Final-year B.Tech CSE student</p>
              <h1>{data.profile.name}</h1>
              <h2>{data.profile.title}</h2>
              <p className="hero-summary">{data.profile.summary}</p>
              <div className="hero-actions">
                <a className="primary-button" href={data.profile.resumeUrl} download>
                  <Download size={18} />
                  Download Resume
                </a>
                <a className="secondary-button glow-button" href="#contact">
                  <Send size={18} />
                  Send Details
                </a>
                <a className="secondary-button" href="#projects">
                  <Layers3 size={18} />
                  View Projects
                </a>
              </div>
            </div>

            <div className="command-panel" aria-label="Portfolio quick facts">
              <div className="pulse-ring" aria-hidden="true" />
              <div className="panel-top">
                <span className="dot green" />
                <span className="dot yellow" />
                <span className="dot red" />
              </div>
              <div className="code-line"><span>student</span> = "B.Tech CSE 2026"</div>
              <div className="code-line"><span>frontend</span> = "React"</div>
              <div className="code-line"><span>backend</span> = "Spring Boot REST APIs"</div>
              <div className="code-line"><span>database</span> = "MySQL"</div>
              <div className="terminal-grid">
                {data.profile.highlights.map((item) => (
                  <div className="mini-card" key={item}>{item}</div>
                ))}
              </div>
            </div>
          </section>

          <section className="section stats-strip" aria-label="Portfolio highlights">
            <Stat icon={<Server />} value="REST" label="API driven" />
            <Stat icon={<Database />} value="MySQL" label="Data layer" />
            <Stat icon={<BrainCircuit />} value="GATE" label="Qualified twice" />
            <Stat icon={<Code2 />} value="3+" label="Full-stack projects" />
          </section>

          <section id="projects" className="section projects-section">
            <SectionHeading
              kicker="Selected builds"
              title="Projects with full-stack depth"
            />
            <div className="project-layout">
              <div className="project-tabs" role="tablist" aria-label="Project selector">
                {data.projects.map((project) => (
                  <button
                    key={project.id}
                    className={project.id === currentProject?.id ? 'project-tab active' : 'project-tab'}
                    onClick={() => setActiveProject(project.id)}
                    style={{ '--accent': project.accent }}
                  >
                    <span>{project.category}</span>
                    <strong>{project.title}</strong>
                  </button>
                ))}
              </div>
              {currentProject && (
                <article className="project-showcase" style={{ '--accent': currentProject.accent }}>
                  <div className="project-orbit">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p className="eyebrow">{currentProject.period}</p>
                  <h3>{currentProject.title}</h3>
                  <p>{currentProject.description}</p>
                  <div className="tech-row">
                    {currentProject.techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <ul className="impact-list">
                    {currentProject.impact.map((item) => (
                      <li key={item}><ChevronRight size={16} />{item}</li>
                    ))}
                  </ul>
                </article>
              )}
            </div>
          </section>

          <section id="skills" className="section skills-section">
            <SectionHeading
              kicker="Tech stack"
              title="Skills and Technologies"
              text="A snapshot of the languages, frameworks, and tools that showcase my expertise."
            />
            <div className="filter-row">
              {categories.map((category) => (
                <button
                  key={category}
                  className={category === skillFilter ? 'filter-chip active' : 'filter-chip'}
                  onClick={() => setSkillFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="skill-grid">
              {visibleSkills.map((skill) => (
                <article className="skill-card" key={skill.id}>
                  <img src={skill.iconUrl} alt={`${skill.name} icon`} loading="lazy" />
                  <h3>{skill.name}</h3>
                  <p>{skill.category}</p>
                  <div className="skill-meter-header">
                      <span>Level</span>
                      <span>{skill.level}%</span>
                  </div>
                  <div className="skill-meter" aria-label={`${skill.name} level ${skill.level}%`}>
                        <span style={{ width: `${skill.level}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="journey" className="section journey-section">
            <SectionHeading
              kicker="Journey"
              title="Internship, education, and proof of consistency"
              text="A timeline of my experience, education, and achievements that demonstrate my growth and commitment to software engineering."
            />
            <div className="timeline-grid">
              <TimelineColumn icon={<BriefcaseBusiness />} title="Experience" items={data.experience} type="experience" />
              <TimelineColumn icon={<GraduationCap />} title="Education" items={data.education} type="education" />
              <div className="timeline-card achievement-card">
                <div className="timeline-title"><Trophy size={20} /> Achievements</div>
                {data.achievements.map((achievement) => (
                  <div className="achievement" key={achievement.id}>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section architecture-section">
            <SectionHeading
              kicker="How this portfolio is built"
              title="React talks to Spring Boot, Spring Boot prepares MySQL data"
              text="A high-level overview of the architecture and technologies that power this portfolio, demonstrating my ability to build full-stack applications with a modern tech stack."
            />
            <div className="architecture">
              <FlowCard icon={<Code2 />} title="React UI" text="Live canvas background, scroll sections, filters, project switcher, and resume actions." />
              <ArrowUpRight className="flow-arrow" />
              <FlowCard icon={<Server />} title="REST APIs" text="Spring Boot controllers expose profile, project, skills, education, and achievement data." />
              <ArrowUpRight className="flow-arrow" />
              <FlowCard icon={<Database />} title="MySQL" text="JPA entities and repositories persist the portfolio data in a MySQL database." />
            </div>
          </section>

          <section id="contact" className="section contact-section">
            <div>
              <p className="eyebrow">Open to software engineering roles</p>
              <h2>Let's build clean Java systems and sharp React experiences.</h2>
              <p className="contact-lead">
                Share your name, email, phone, and message. The form prepares a clean email so your details reach me directly.
              </p>
            </div>
            <div className="contact-stack">
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label>
                  <UserRound size={18} />
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={updateContactField('name')}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  <Mail size={18} />
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={updateContactField('email')}
                    placeholder="Your email"
                    required
                  />
                </label>
                <label>
                  <Phone size={18} />
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={updateContactField('phone')}
                    placeholder="Phone number"
                  />
                </label>
                <label className="message-field">
                  <MessageSquareText size={18} />
                  <textarea
                    value={contactForm.message}
                    onChange={updateContactField('message')}
                    placeholder="Tell me about the role, project, or opportunity"
                    rows="5"
                    required
                  />
                </label>
                <button className="primary-button submit-button" type="submit">
                  <Send size={18} />
                  Send Information
                </button>
              </form>
              <div className="contact-actions">
                <a href={`mailto:${data.profile.email}`}><Mail size={18} />{data.profile.email}</a>
                <a href={`tel:${data.profile.phone.replace(/\s/g, '')}`}><Phone size={18} />{data.profile.phone}</a>
                <span><MapPin size={18} />{data.profile.location}</span>
                <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} />GitHub</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><BookOpen size={18} />LinkedIn</a>
                
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

function Stat({ icon, value, label }) {
  return (
    <article className="stat-card">
      {React.cloneElement(icon, { size: 22 })}
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function TimelineColumn({ icon, title, items, type }) {
  return (
    <div className="timeline-card">
      <div className="timeline-title">{React.cloneElement(icon, { size: 20 })} {title}</div>
      {items.map((item) => (
        <article className="timeline-item" key={item.id}>
          <p className="timeline-period">{item.period}</p>
          <h3>{type === 'experience' ? item.role : item.degree}</h3>
          <p>{type === 'experience' ? `${item.company} - ${item.location}` : `${item.institution} - ${item.location}`}</p>
          {type === 'experience' && (
            <ul>
              {item.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

function FlowCard({ icon, title, text }) {
  return (
    <article className="flow-card">
      {React.cloneElement(icon, { size: 24 })}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

createRoot(document.getElementById('root')).render(<App />);
