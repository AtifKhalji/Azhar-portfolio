import {
  Atom,
  BrainCircuit,
  Braces,
  BriefcaseBusiness,
  CircleUserRound,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileCode2,
  FlaskConical,
  GitBranch,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Palette,
  Rocket,
  Search,
  Server,
  Sparkles,
  Terminal,
  Wifi,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import carProject from "./assets/hero.png";
import attendanceProject from "./assets/attendance.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const navLinks = ["About", "Education", "Skills", "Projects", "Contact"];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/AtifKhalji", icon: GitBranch },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/azhar-arqham",
    icon: ExternalLink,
  },
];

const roles = ["MERN Developer", "AI Explorer", "IoT Enthusiast"];

const skills = [
  { name: "React", icon: Atom, color: "#67e8f9" },
  { name: "MongoDB", icon: Database, color: "#4ade80" },
  { name: "Node.js", icon: Server, color: "#86efac" },
  { name: "Python", icon: FileCode2, color: "#facc15" },
  { name: "JavaScript", icon: Braces, color: "#fde047" },
  { name: "IoT", icon: Wifi, color: "#38bdf8" },
  { name: "Tailwind CSS", icon: Palette, color: "#22d3ee" },
  { name: "C++", icon: Terminal, color: "#60a5fa" },
];

const quickStats = [
  { value: "2+", label: "Projects Built" },
  { value: "8+", label: "Technologies" },
  { value: "AI, ML, IoT", label: "Learning" },
  { value: "B.Tech CSE", label: "Education" },
];

const highlights = [
  { label: "Deep Learning", icon: BrainCircuit },
  { label: "Problem Solving", icon: Search },
  { label: "Full-Stack Development", icon: Code2 },
  { label: "AI Research", icon: FlaskConical },
];

const learningTopics = [
  "Deep Learning",
  "Cybersecurity",
  "Federated Learning",
  "Advanced React",
];

const timeline = [
  {
    year: "2024",
    title: "Started Computer Science Engineering",
    description: "Began building a foundation in programming and software systems.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Built RentSwift",
    description: "Created a full-stack MERN car rental platform.",
    icon: Rocket,
  },
  {
    year: "2025",
    title: "Built Smart Attendance",
    description: "Developed an attendance management system for student records.",
    icon: Code2,
  },
  {
    year: "2026",
    title: "Exploring AI & Machine Learning",
    description: "Learning modern AI concepts and real-world intelligent systems.",
    icon: BrainCircuit,
  },
];

const particles = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  left: `${6 + ((index * 17) % 88)}%`,
  top: `${10 + ((index * 23) % 78)}%`,
  size: 2 + (index % 3) * 2,
  duration: 11 + (index % 5),
  delay: index * 0.5,
}));

const projects = [
  {
    title: "RentSwift",
    image: carProject,
    alt: "RentSwift car rental website",
    description:
      "A full-stack car rental platform where customers can browse available vehicles, manage bookings, and track rental activity. It also includes an admin dashboard for adding cars, monitoring reservations, and managing the platform through a responsive MERN interface.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    href: "https://rentswiftcars.vercel.app",
    github: "https://github.com/AtifKhalji",
    imageClass: "h-64 md:h-80",
  },
  {
    title: "Smart Attendance System",
    image: attendanceProject,
    alt: "Smart Attendance System",
    description:
      "A web-based attendance management system designed to simplify student record tracking. It provides organized attendance views, streamlined record management, and a responsive interface backed by a Node.js, Express, and MongoDB API.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    href: "https://attendance-app-azhar.onrender.com/",
    github: "https://github.com/AtifKhalji",
    imageClass: "h-64 md:h-80",
  },
];

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="starfield absolute inset-0" />
      <div className="aurora-ribbon aurora-ribbon-one" />
      <div className="aurora-ribbon aurora-ribbon-two" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_80%_45%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_18%_70%,rgba(20,184,166,0.1),transparent_32%)]"
        animate={{ scale: [1, 1.04, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-200/70 shadow-[0_0_18px_rgba(103,232,249,0.75)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -38, 0],
            x: [0, particle.id % 2 ? 18 : -18, 0],
            opacity: [0.08, 0.72, 0.08],
            scale: [0.7, 1.45, 0.7],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [profileImageFailed, setProfileImageFailed] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = typedRole === currentRole;
    const isEmpty = typedRole.length === 0;
    const delay = isComplete && !isDeleting ? 1300 : isDeleting ? 55 : 90;

    const timer = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
        return;
      }

      setTypedRole(
        isDeleting
          ? currentRole.slice(0, typedRole.length - 1)
          : currentRole.slice(0, typedRole.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, roleIndex, typedRole]);

  return (
    <div className="min-h-screen text-white">
      <AnimatedBackground />
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 shadow-[0_0_18px_rgba(34,211,238,0.75)]"
        style={{ scaleX: progressScale }}
      />

      <motion.nav
        className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-2xl font-bold text-cyan-400">
            <span className="text-shine">Azhar.dev</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`relative transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-cyan-400 after:transition-all hover:text-cyan-300 ${
                  activeSection === link.toLowerCase()
                    ? "text-cyan-300 after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      <section className="hero-section flex min-h-screen items-center justify-center px-6">
        <motion.div
          className="relative mx-auto w-full max-w-4xl text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="absolute inset-0 -z-10 rounded-[48px] bg-cyan-400/5 blur-3xl"
            animate={{ y: [0, -12, 0], opacity: [0.55, 0.85, 0.55] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="hero-content-float">
            <motion.div className="hero-profile" variants={fadeUp}>
              {!profileImageFailed ? (
                <img
                  src="/profile.jpg"
                  alt="Azhar Arqham"
                  onError={() => setProfileImageFailed(true)}
                />
              ) : (
                <CircleUserRound size={64} strokeWidth={1.35} aria-label="Profile" />
              )}
            </motion.div>

            <motion.p className="hero-greeting text-xl text-cyan-400" variants={fadeUp}>
              Hello, I'm
            </motion.p>

            <motion.h1
              className="holographic-title hero-name bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-200 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
              variants={fadeUp}
            >
              Azhar Arqham
            </motion.h1>

            <motion.div className="typing-line" variants={fadeUp} aria-live="polite">
              <span>{typedRole}</span>
              <span className="typing-cursor" aria-hidden="true" />
            </motion.div>

            <motion.p
              className="hero-description mx-auto max-w-3xl text-lg leading-8 text-slate-400"
              variants={fadeUp}
            >
              Building modern web applications, smart IoT systems, and exploring AI
              while continuously improving my technical and leadership skills.
            </motion.p>

            <motion.div
              className="hero-actions flex flex-col justify-center gap-4 sm:flex-row"
              variants={fadeUp}
            >
              <motion.a
                href="#projects"
                className="shine-button rounded-xl bg-cyan-400 px-8 py-3 text-center font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.28)] transition hover:bg-cyan-300"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="shine-button rounded-xl border border-cyan-500/80 px-8 py-3 text-center transition hover:bg-cyan-500/10 hover:text-cyan-200"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="shine-button rounded-xl border border-slate-600 px-8 py-3 text-center transition hover:border-cyan-400 hover:text-cyan-200"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-socials flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-lg"
              variants={fadeUp}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link inline-flex items-center gap-2 transition hover:text-cyan-300"
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <link.icon size={18} />
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="mailto:azhararqham@gmail.com"
                className="contact-link flex items-center justify-center gap-2 transition hover:text-cyan-300"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={18} />
                Email
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="section-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger}
      >
        <motion.h2
          className="section-title"
          variants={fadeUp}
        >
          About Me
        </motion.h2>

        <motion.div
          className="premium-about section-card"
          variants={fadeUp}
          whileHover={{ y: -6, borderColor: "rgba(34,211,238,0.45)" }}
        >
          <div className="about-profile">
            <div className="profile-image-ring">
              {!profileImageFailed && (
                <img
                  src="/profile.jpg"
                  alt="Azhar Arqham"
                  className="profile-image"
                  onError={() => setProfileImageFailed(true)}
                />
              )}
              {profileImageFailed && (
                <div className="profile-fallback" aria-label="Azhar Arqham">
                  <CircleUserRound size={72} strokeWidth={1.25} />
                </div>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">Azhar Arqham</h3>
              <p className="mt-2 text-cyan-300">MERN Developer & CSE Student</p>
            </div>

            <div className="profile-quick-info">
              <span>
                <GraduationCap size={17} />
                B.Tech Computer Science
              </span>
              <span>
                <Code2 size={17} />
                Full-Stack Development
              </span>
              <span>
                <Sparkles size={17} />
                AI & IoT Explorer
              </span>
            </div>
          </div>

          <div className="about-details">
            <div>
              <p className="about-copy text-lg leading-8 text-slate-300">
                I build full-stack web applications with the MERN stack and enjoy
                turning practical ideas into reliable, real-world products. My work
                includes RentSwift and a smart attendance platform focused on useful,
                accessible experiences.
              </p>

              <p className="about-copy mt-5 text-lg leading-8 text-slate-300">
                I am expanding my knowledge in Artificial Intelligence, Machine
                Learning, and IoT systems, with the goal of creating technology that
                solves meaningful problems and grows into scalable solutions.
              </p>

              <p className="research-interest">
                I am currently seeking internship and research opportunities in
                full-stack engineering, applied AI, and intelligent connected systems.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map((highlight) => (
                <div key={highlight.label} className="about-highlight">
                  <highlight.icon size={19} />
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <motion.a
                href="/resume.pdf"
                download
                className="shine-button inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={19} />
                Download Resume
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="shine-button inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/60 px-5 py-3 font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/10"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={19} />
                View Resume
              </motion.a>
            </div>
          </div>

          <div className="about-stats">
            {quickStats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="currently-learning">
            <div className="learning-heading">
              <Lightbulb size={20} />
              <h3>Currently Learning</h3>
            </div>
            <div className="learning-topics">
              {learningTopics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="education"
        className="section-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.h2 className="section-title" variants={fadeUp}>
          Education & Journey
        </motion.h2>

        <motion.div className="timeline" variants={stagger}>
          {timeline.map((item) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              className="timeline-item"
              variants={fadeUp}
            >
              <div className="timeline-marker">
                <item.icon size={20} />
              </div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="skills"
        className="section-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <motion.h2
          className="section-title"
          variants={fadeUp}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8"
          variants={stagger}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card glass-shimmer group"
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 group-hover:shadow-[inset_0_0_35px_rgba(34,211,238,0.08),0_0_26px_rgba(34,211,238,0.22)]" />
              <div
                className="skill-icon"
                style={{ color: skill.color, borderColor: `${skill.color}44` }}
              >
                <skill.icon size={30} strokeWidth={1.7} />
              </div>
              <h3 className="relative text-lg font-semibold md:text-xl">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="projects"
        className="section-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.h2
          className="section-title"
          variants={fadeUp}
        >
          Projects
        </motion.h2>

        <motion.div className="flex flex-col gap-10" variants={stagger}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-shimmer group overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/85 p-6 shadow-lg backdrop-blur transition-colors hover:border-cyan-400 md:p-8"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  },
                },
              }}
              whileHover={{ y: -8 }}
            >
              <div className="project-image-frame overflow-hidden rounded-xl border-2 border-cyan-500/25 shadow-lg">
                <motion.img
                  src={project.image}
                  alt={project.alt}
                  className={`${project.imageClass} w-full object-cover transition duration-700 group-hover:scale-105`}
                  whileHover={{ scale: 1.04 }}
                />
              </div>

              <div className="flex flex-col items-center justify-center px-2 py-10 text-center md:px-8">
                <h3 className="mb-5 text-3xl font-bold md:text-4xl">
                  {project.title}
                </h3>

                <p className="mx-auto mb-5 max-w-2xl text-lg leading-8 text-slate-400">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="shine-button project-button"
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <GitBranch size={19} />
                    GitHub
                  </motion.a>

                  <motion.a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="shine-button project-button project-button-primary"
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink size={19} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="section-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.h2
          className="section-title"
          variants={fadeUp}
        >
          Contact
        </motion.h2>

        <motion.div
          className="section-card"
          variants={fadeUp}
        >
          <p className="mb-10 text-lg text-slate-300">
            Let's connect and collaborate on exciting projects.
          </p>

          <div className="contact-grid">
            <motion.a
              href="mailto:azhararqham@gmail.com"
              className="contact-card"
              whileHover={{ y: -7 }}
            >
              <span className="contact-card-icon">
                <Mail size={24} />
              </span>
              <strong>Email</strong>
              <span>azhararqham@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/azhar-arqham"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
              whileHover={{ y: -7 }}
            >
              <span className="contact-card-icon">
                <BriefcaseBusiness size={24} />
              </span>
              <strong>LinkedIn</strong>
              <span>Connect professionally</span>
            </motion.a>

            <motion.a
              href="https://github.com/AtifKhalji"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
              whileHover={{ y: -7 }}
            >
              <span className="contact-card-icon">
                <GitBranch size={24} />
              </span>
              <strong>GitHub</strong>
              <span>Explore my repositories</span>
            </motion.a>

            <motion.div className="contact-card" whileHover={{ y: -7 }}>
              <span className="contact-card-icon">
                <MapPin size={24} />
              </span>
              <strong>Location</strong>
              <span>Andhra Pradesh, India</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <footer className="mt-20 border-t border-slate-800 px-6 py-8 text-center text-slate-500">
        <p>Built with React, Tailwind CSS and Framer Motion</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Azhar Arqham</p>
      </footer>
    </div>
  );
}

export default App;
