import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Download,
  Eraser,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Moon,
  Phone,
  Redo2,
  Send,
  Sparkles,
  Sun,
  Trophy,
  Undo2,
  UserRound,
  X
} from 'lucide-react';
import './styles.css';

const isDevelopment = import.meta.env.DEV;
const API_BASE = import.meta.env.VITE_API_BASE_URL || (isDevelopment ? 'http://localhost:8080/api' : 'https://api-placeholder.com/api');

const THEMES = [
  { id: 'cyber', label: 'Cyber Dark', icon: Moon },
  { id: 'midnight', label: 'Midnight', icon: Moon },
  { id: 'clean', label: 'Clean Light', icon: Sun },
  { id: 'cream', label: 'Warm Cream', icon: Sun }
];

const fallback = {
  profile: {
    name: 'Himanshu Kumar Thakur',
    title: 'Java Full Stack Developer',
    email: 'hkumar54321s@gmail.com',
    phone: '+91 6201340937',
    location: 'Dehradun, Uttarakhand',
    resumeUrl: '/resume/Resume_.pdf',
    summary:
      'B.Tech CSE graduate with strong experience building modern web applications using React.js, Spring Boot, and REST APIs. Passionate about clean frontend architecture, thoughtful UI, and turning ideas into polished, usable products.',
    highlights: [
      'B.Tech CSE Graduate • 2026',
      'React.js • Spring Boot • REST APIs',
      'GATE CSE qualified twice (2025 & 2026)',
      'Focused on frontend craft & full-stack systems'
    ]
  },
  projects: [
    {
      id: 1,
      title: 'Privacy-Aware Medical Image Analysis',
      period: 'May 2026 - Jul 2026',
      category: 'AI Healthcare',
      accent: '#00f0ff',
      description:
        'An AI-powered web application for automated pneumonia detection from chest X-ray images with privacy-preserving deep learning and explainable AI features.',
      techStack: ['PyTorch', 'DenseNet121', 'CNN', 'Streamlit', 'Opacus', 'Grad-CAM'],
      impact: [
        'Built an AI-powered application for real-time pneumonia detection from chest X-ray images using PyTorch, DenseNet121/CNN, and Streamlit.',
        'Integrated Differential Privacy (Opacus), confidence estimation, and Grad-CAM visual explanations to enhance patient data privacy and model transparency.',
        'Designed and deployed a responsive healthcare dashboard with downloadable PDF diagnostic reports on Streamlit Community Cloud.'
      ],
      liveUrl: 'https://privacy-aware-medical-image-analysis-application.streamlit.app/',
      githubUrl: 'https://github.com/himanshucoder18/privacy-aware-medical-image-analysis'
    },
    {
      id: 2,
      title: 'Sahi Raasta - AI-Powered Career Guidance Platform',
      period: 'Mar 2026 - Apr 2026',
      category: 'AI career platform',
      accent: '#ff2a6d',
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
      id: 3,
      title: 'Memory Allocator Simulator',
      period: 'Oct 2025 - Dec 2025',
      category: 'Operating systems visualizer',
      accent: '#05ffa1',
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
      id: 4,
      title: 'Full-Stack Calorie Tracker',
      period: 'Apr 2025 - Jul 2025',
      category: 'Health tracking app',
      accent: '#ff9f1c',
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
      period: '2022 – 2026'
    },
    {
      id: 2,
      institution: 'DAV Public School Sec-4',
      location: 'Bokaro Steel City, Jharkhand',
      degree: 'Class XII (CBSE)',
      period: '2020 – 2021'
    }
  ],
  achievements: [
    {
      id: 1,
      title: 'GATE CSE Qualified Twice',
      detail: 'Qualified GATE CSE in 2026 and in 2025.'
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
    const motes = Array.from({ length: 70 }, (_, index) => ({
      angle: index * 0.73,
      orbit: 0.16 + (index % 17) * 0.013,
      speed: 0.0026 + (index % 9) * 0.00045,
      size: 0.7 + (index % 6) * 0.26,
      hue: [190, 320, 45, 160, 280, 15][index % 6],
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
      if (event.target.closest('a, button, input, textarea, select, label, [role="button"], [role="tab"], canvas')) return;
      bursts.push({
        x: event.clientX,
        y: event.clientY,
        age: 0,
        hue: 180 + Math.random() * 40
      });
      if (bursts.length > 10) bursts.shift();
    };

    const draw = () => {
      frame += 1;
      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.getAttribute('data-theme') === 'clean' ||
                      document.documentElement.getAttribute('data-theme') === 'cream';

      const gradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, width * 0.5, height * 0.5, Math.max(width, height) * 0.82);
      if (isLight) {
        gradient.addColorStop(0, '#f8f4ff');
        gradient.addColorStop(0.4, '#f0eaff');
        gradient.addColorStop(1, '#e8e0f5');
      } else {
        gradient.addColorStop(0, pointer.active ? '#1a0a2e' : '#12081f');
        gradient.addColorStop(0.3, '#0d0618');
        gradient.addColorStop(0.7, '#0a0f14');
        gradient.addColorStop(1, '#05040a');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      if (!isLight) {
        const flame = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, Math.min(width, height) * 0.5);
        flame.addColorStop(0, 'rgba(0, 240, 255, 0.22)');
        flame.addColorStop(0.35, 'rgba(255, 42, 109, 0.1)');
        flame.addColorStop(1, 'rgba(0, 240, 255, 0)');
        ctx.fillStyle = flame;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < motes.length; i += 1) {
        const mote = motes[i];
        mote.angle += mote.speed * (pointer.active ? 1.6 : 1);
        const pullX = (pointer.x / Math.max(width, 1) - 0.5) * width * 0.1;
        const pullY = (pointer.y / Math.max(height, 1) - 0.5) * height * 0.08;
        const orbitX = width * mote.orbit + (i % 11) * 23;
        const orbitY = height * (mote.orbit * 0.82) + (i % 13) * 17;
        const x = width * 0.5 + Math.cos(mote.angle + frame * 0.0013) * orbitX + pullX * mote.drift;
        const y = height * 0.5 + Math.sin(mote.angle * 1.16 + frame * 0.001) * orbitY + pullY * mote.drift;
        const radius = mote.size + Math.sin(frame * 0.025 + i) * 0.6;
        ctx.beginPath();
        ctx.fillStyle = isLight
          ? `hsla(${mote.hue}, 70%, 55%, 0.25)`
          : `hsla(${mote.hue + Math.sin(frame * 0.012 + i) * 12}, 96%, 64%, 0.4)`;
        ctx.arc(x, y, Math.max(0.6, radius), 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = bursts.length - 1; i >= 0; i -= 1) {
        const burst = bursts[i];
        burst.age += 1;
        const progress = burst.age / 70;
        const alpha = Math.max(0, 1 - progress);
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${burst.hue}, 100%, 66%, ${alpha * 0.45})`;
        ctx.lineWidth = 2 + alpha * 5;
        ctx.arc(burst.x, burst.y, progress * 300, 0, Math.PI * 2);
        ctx.stroke();
        if (burst.age > 70) bursts.splice(i, 1);
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

function Blackboard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [brushSize, setBrushSize] = useState(4);
  const [history, setHistory] = useState([]);
  const [historyStep, setHistoryStep] = useState(-1);
  const lastPos = useRef({ x: 0, y: 0 });

  const colors = ['#ffffff', '#00f0ff', '#ff2a6d', '#05ffa1', '#ff9f1c'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = 340 * ratio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = '340px';
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.fillStyle = '#1a2e1a';
      ctx.fillRect(0, 0, rect.width, 340);
      if (historyStep >= 0 && history[historyStep]) {
        const img = new Image();
        img.onload = () => ctx.drawImage(img, 0, 0, rect.width, 340);
        img.src = history[historyStep];
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const saveState = () => {
    const canvas = canvasRef.current;
    const data = canvas.toDataURL();
    const newHistory = history.slice(0, historyStep + 1);
    newHistory.push(data);
    if (newHistory.length > 30) newHistory.shift();
    setHistory(newHistory);
    setHistoryStep(newHistory.length - 1);
  };

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const pos = getPos(e);
    lastPos.current = pos;
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pos = getPos(e);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    lastPos.current = pos;
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveState();
    }
  };

  const clearBoard = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = '#1a2e1a';
    ctx.fillRect(0, 0, rect.width, 340);
    saveState();
  };

  const undo = () => {
    if (historyStep <= 0) return;
    const newStep = historyStep - 1;
    setHistoryStep(newStep);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, rect.width, 340);
      ctx.drawImage(img, 0, 0, rect.width, 340);
    };
    img.src = history[newStep];
  };

  const redo = () => {
    if (historyStep >= history.length - 1) return;
    const newStep = historyStep + 1;
    setHistoryStep(newStep);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, rect.width, 340);
      ctx.drawImage(img, 0, 0, rect.width, 340);
    };
    img.src = history[newStep];
  };

  return (
    <div className="blackboard-wrapper">
      <div className="blackboard-toolbar">
        <div className="color-palette">
          {colors.map((c) => (
            <button
              key={c}
              className={`color-swatch ${color === c ? 'active' : ''}`}
              style={{ background: c }}
              onClick={() => setColor(c)}
              aria-label={`Color ${c}`}
            />
          ))}
        </div>

        <div className="brush-control">
          <label>Size</label>
          <input
            type="range"
            min="2"
            max="18"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
          />
        </div>

        <div className="board-actions">
          <button onClick={undo} disabled={historyStep <= 0} title="Undo">
            <Undo2 size={18} />
          </button>
          <button onClick={redo} disabled={historyStep >= history.length - 1} title="Redo">
            <Redo2 size={18} />
          </button>
          <button onClick={clearBoard} title="Clear">
            <Eraser size={18} />
            Clear
          </button>
        </div>
      </div>

      <div className="blackboard-frame">
        <canvas
          ref={canvasRef}
          className="blackboard-canvas"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>
      <p className="board-hint">Draw anything you like — leave a note, a doodle, or just play around</p>
    </div>
  );
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
          profile: { ...profile, resumeUrl: '/resume/Resume_.pdf' },
          projects,
          skills,
          experience,
          education,
          achievements
        });
      })
      .catch(() => {});
  }, []);

  return { data };
}

function App() {
  const { data } = usePortfolioData();
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(data.projects[0]?.id);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'cyber');
  const [themeOpen, setThemeOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

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

  const openLiveDemo = () => {
    if (currentProject?.liveUrl) {
      window.open(currentProject.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <LiveBackground />
      <div className="site-shell">
        <header className="nav">
          <a href="#home" className="brand" aria-label="Go to home">
            <span>HKT</span>
          </a>

          <div className="nav-right">
            <div className="theme-switcher">
              <button
                className="theme-toggle"
                onClick={() => setThemeOpen((v) => !v)}
                aria-label="Change theme"
              >
                {theme === 'clean' || theme === 'cream' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              {themeOpen && (
                <div className="theme-dropdown">
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      className={theme === t.id ? 'active' : ''}
                      onClick={() => {
                        setTheme(t.id);
                        setThemeOpen(false);
                      }}
                    >
                      <t.icon size={16} />
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="icon-button menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <nav className={menuOpen ? 'nav-links open' : 'nav-links'} onClick={() => setMenuOpen(false)}>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#journey">Journey</a>
              <a href="#playground">Play</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          {/* ===== HERO ===== */}
          <section id="home" className="hero section">
            <div className="hero-copy">
              <p className="eyebrow">B.Tech CSE Graduate • 2026</p>
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

            {/* ===== CODE EDITOR STYLE PANEL ===== */}
            <div className="command-panel code-editor" aria-label="About me">
              <div className="editor-titlebar">
                <div className="editor-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="editor-filename">about.tsx</span>
              </div>

              <div className="editor-body">
                <div className="line-numbers">
                  <span>1</span><span>2</span><span>3</span><span>4</span>
                  <span>5</span><span>6</span><span>7</span><span>8</span>
                </div>
                <div className="editor-code">
                  <div><span className="kw">const</span> <span className="var">developer</span> = {'{'}</div>
                  <div className="indent"><span className="key">name</span>: <span className="str">"Himanshu Kumar Thakur"</span>,</div>
                  <div className="indent"><span className="key">role</span>: <span className="str">"Java Full Stack Developer"</span>,</div>
                  <div className="indent"><span className="key">education</span>: <span className="str">"B.Tech CSE • 2026"</span>,</div>
                  <div className="indent"><span className="key">stack</span>: [<span className="str">"React"</span>, <span className="str">"Spring Boot"</span>],</div>
                  <div className="indent"><span className="key">gate</span>: <span className="str">"Qualified twice"</span>,</div>
                  <div className="indent"><span className="key">status</span>: <span className="str">"Open to opportunities"</span></div>
                  <div>{'};'}</div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== STATS ===== */}
          <section className="section stats-strip" aria-label="Highlights">
            <Stat icon={<Code2 />} value="React" label="Frontend focus" />
            <Stat icon={<Sparkles />} value="4+" label="Projects shipped" />
            <Stat icon={<BrainCircuit />} value="GATE" label="Qualified twice" />
            <Stat icon={<Layers3 />} value="Full-stack" label="End-to-end builds" />
          </section>

          {/* ===== PROJECTS ===== */}
          <section id="projects" className="section projects-section">
            <SectionHeading kicker="Selected builds" title="Projects with full-stack depth" />
            <div className="project-layout">
              <div className="project-tabs" role="tablist">
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
                <article
                  className={`project-showcase ${currentProject.liveUrl ? 'is-clickable' : ''}`}
                  style={{ '--accent': currentProject.accent }}
                  onClick={currentProject.liveUrl ? openLiveDemo : undefined}
                  role={currentProject.liveUrl ? 'link' : undefined}
                  tabIndex={currentProject.liveUrl ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (currentProject.liveUrl && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      openLiveDemo();
                    }
                  }}
                >
                  <div className="project-orbit"><span /><span /><span /></div>
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

                  {(currentProject.liveUrl || currentProject.githubUrl) && (
                    <div className="project-links" onClick={(e) => e.stopPropagation()}>
                      {currentProject.liveUrl && (
                        <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                      {currentProject.githubUrl && (
                        <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                          <Github size={16} /> GitHub
                        </a>
                      )}
                    </div>
                  )}
                  {currentProject.liveUrl && (
                    <div className="click-hint">Click anywhere on this card to open Live Demo</div>
                  )}
                </article>
              )}
            </div>
          </section>

          {/* ===== SKILLS ===== */}
          <section id="skills" className="section skills-section">
            <SectionHeading
              kicker="Tech stack"
              title="Skills and Technologies"
              text="A snapshot of the languages, frameworks, and tools I work with."
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
                  <div className="skill-meter">
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ===== JOURNEY ===== */}
          <section id="journey" className="section journey-section">
            <SectionHeading
              kicker="Journey"
              title="Internship, education & achievements"
              text="A timeline of experience, education, and milestones."
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

          {/* ===== BLACKBOARD ===== */}
          <section id="playground" className="section playground-section">
            <SectionHeading
              kicker="Interactive corner"
              title="Leave a mark on the board"
              text="A little chalkboard for visitors. Draw, doodle, or write something — just for fun."
            />
            <Blackboard />
          </section>

          {/* ===== CONTACT ===== */}
          <section id="contact" className="section contact-section">
            <div>
              <p className="eyebrow">Open to software engineering roles</p>
              <h2>Let's build clean systems and sharp React experiences.</h2>
              <p className="contact-lead">
                Share your name, email, phone, and message. The form prepares a clean email so your details reach me directly.
              </p>
            </div>
            <div className="contact-stack">
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label>
                  <UserRound size={18} />
                  <input type="text" value={contactForm.name} onChange={updateContactField('name')} placeholder="Your name" required />
                </label>
                <label>
                  <Mail size={18} />
                  <input type="email" value={contactForm.email} onChange={updateContactField('email')} placeholder="Your email" required />
                </label>
                <label>
                  <Phone size={18} />
                  <input type="tel" value={contactForm.phone} onChange={updateContactField('phone')} placeholder="Phone number" />
                </label>
                <label className="message-field">
                  <MessageSquareText size={18} />
                  <textarea value={contactForm.message} onChange={updateContactField('message')} placeholder="Tell me about the role, project, or opportunity" rows="5" required />
                </label>
                <button className="primary-button submit-button" type="submit">
                  <Send size={18} /> Send Information
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
      {text && <p>{text}</p>}
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

createRoot(document.getElementById('root')).render(<App />);