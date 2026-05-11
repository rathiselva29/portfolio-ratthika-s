import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Sparkles,
  Code2,
  Palette,
  GraduationCap,
  Briefcase,
  Target,
  ArrowDown,
  Heart,
  X,
  Award,
  Eye,
} from "lucide-react";
import { Suspense, lazy, useState } from "react";
import profilePhoto from "@/assets/ratthika-photo.jpg";
import projectArtika from "@/assets/project-artika.png";
import projectHabit from "@/assets/project-habit.png";
import projectDaily from "@/assets/project-daily.jpg";
import projectVsArt from "@/assets/project-vs-art.png";
import bannerVsArt from "@/assets/banner-vs-art.png";
import appHabitFlow from "@/assets/app-habit-flow.png";
import logoArtika from "@/assets/logo-artika.png";
import certTypewriting from "@/assets/cert-typewriting.jpg";
import certDrone from "@/assets/cert-drone.jpg";
import certSports1 from "@/assets/cert-sports-1.jpg";
import certSports2 from "@/assets/cert-sports-2.jpg";
import certMadhyama from "@/assets/cert-madhyama.jpg";
import certPrathamic from "@/assets/cert-prathamic.jpg";
import certExcel from "@/assets/cert-excel.jpg";

const AIChatbot = lazy(() => import("./components/AIChatbot"));

const RESUME_URL = "/Ratthika_S_Resume.pdf";
const EMAIL = "ratthikaratthika55@gmail.com";
const PHONE = "7397732494";

const NAUKRI_URL = "https://www.naukri.com/mnjuser/homepage";
const GITHUB_URL = "https://github.com/rathiselva29";
const LINKEDIN_URL = "https://www.linkedin.com/in/ratthika-s29/";
const INSTAGRAM_URL = "https://www.instagram.com/rathii__selva";

type ProjectCategory = "Websites" | "Application" | "Banner" | "Logo";

const projects: {
  title: string;
  description: string;
  image: string;
  live?: string;
  tech: string[];
  category: ProjectCategory;
}[] = [
  {
    title: "Artika Creations",
    description:
      "Boutique-style website showcasing handcrafted creations with elegant layout and smooth interactions.",
    image: projectArtika,
    live: "https://artika-creations-rathiselva29s-projects.vercel.app?_vercel_share=VO0lkVXyZ2xwRhVZUGhKveg3Zu4bo4zc",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Websites",
  },
  {
    title: "Habit Tracking",
    description:
      "A daily habit tracker that helps build better routines with progress tracking and clean visuals.",
    image: projectHabit,
    live: "https://rathiselva29.github.io/Habit-Tracking/",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Websites",
  },
  {
    title: "Daily Tracking Website",
    description:
      "A handmade designed daily planner web app with a soft, minimal aesthetic and intuitive UI.",
    image: projectDaily,
    live: "https://rathiselva29.github.io/DailyTracking/",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Websites",
  },
  {
    title: "VS Art Project",
    description:
      "Creative art-focused website where creativity meets passion — bold typography and playful visuals.",
    image: projectVsArt,
    live: "https://rathiselva29.github.io/ratthika_vs_art_project/",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Websites",
  },
  {
    title: "Habit Flow App",
    description:
      "A mobile-friendly habit tracking application designed for daily use. Build better habits with an intuitive interface, streak tracking, and a smooth experience optimized for on-the-go productivity.",
    image: appHabitFlow,
    live: "https://rathiselva29.github.io/Habit-Tracking/",
    tech: ["Mobile-Friendly", "PWA", "JavaScript"],
    category: "Application",
  },
  {
    title: "VS Art — Banner Design",
    description:
      "Bold, playful promotional banner created for the VS Art Project — vibrant colors and expressive typography.",
    image: bannerVsArt,
    tech: ["Canva", "Banner Design"],
    category: "Banner",
  },
  {
    title: "Artika Creations — Logo",
    description:
      "Elegant brand logo designed for Artika Creations — soft palette with a refined script identity.",
    image: logoArtika,
    tech: ["Logo Design", "Branding"],
    category: "Logo",
  },
];

const PROJECT_CATEGORIES = ["All", "Websites", "Application", "Banner", "Logo"] as const;
type ProjectFilter = (typeof PROJECT_CATEGORIES)[number];

const techSkills = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 90 },
  { name: "MySQL", value: 75 },
  { name: "Git", value: 85 },
  { name: "GitHub", value: 88 },
];
const designSkills = [
  { name: "Canva", value: 92 },
  { name: "Logo Design", value: 85 },
  { name: "Layout Design", value: 80 },
  { name: "Banner Design", value: 88 },
  { name: "Poster Design", value: 86 },
];

const stats = [
  { icon: Briefcase, label: "Projects", value: "5+" },
  { icon: GraduationCap, label: "Branch", value: "CSE" },
  { icon: Code2, label: "Internships", value: "3" },
  { icon: Target, label: "Dedication", value: "100%" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NavBar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("home")}
          className="text-xl font-bold text-gradient"
        >
          Ratthika S
        </button>
        <div className="hidden md:flex items-center gap-1">
          {[
            ["Home", "home"],
            ["About", "about"],
            ["Projects", "projects"],
            ["Skills", "skills"],
            ["Certifications", "certifications"],
            ["Resume", "resume"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("contact")}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-glow"
        >
          <Sparkles className="w-4 h-4" /> Hire Me
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-hero"
  >
    {/* Animated blobs */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob" />
    <div className="absolute top-1/3 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-blob [animation-delay:3s]" />
    <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-blob [animation-delay:6s]" />

    <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-5">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </span>
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-4">
          I'am <span className="text-gradient">Ratthika S</span>
        </h1>
        <p className="text-xl lg:text-2xl font-semibold text-foreground/80 mb-5">
          Creative Designer | Frontend Developer
        </p>
        <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
          I am a Computer Science and Engineering student passionate about
          building responsive websites and creating visually appealing designs.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
          >
            View Projects <ArrowDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-muted transition-colors font-semibold"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex justify-center lg:justify-end"
      >
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-gradient-primary rounded-[2rem] blur-2xl opacity-50 animate-pulse-glow" />
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-[2rem] overflow-hidden border-4 border-white/40 shadow-glow">
            <img
              src={profilePhoto}
              alt="Ratthika S — Frontend Developer and Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-card animate-float-slow">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <div className="text-sm">
                <div className="font-bold leading-none">Frontend</div>
                <div className="text-xs text-muted-foreground">Developer</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-card animate-float-slow [animation-delay:2s]">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-secondary" />
              <div className="text-sm">
                <div className="font-bold leading-none">Creative</div>
                <div className="text-xs text-muted-foreground">Designer</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
          Ratthika is a dedicated Computer Science and Engineering student with
          strong interest in frontend development and creative design. Skilled
          in HTML, CSS, MySQL, Git, and GitHub. Experienced in Canva-based
          designing including logo creation, layout design, banner and poster
          design. Currently seeking internship opportunities to gain practical
          industry experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-primary flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-3xl font-extrabold text-gradient">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

type Project = (typeof projects)[number];

const Projects = () => {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of websites, applications, banners, and logos that showcase my skills.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {PROJECT_CATEGORIES.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => setSelected(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(p);
                }
              }}
              className="group glass rounded-3xl overflow-hidden hover:shadow-glow transition-all hover:-translate-y-1 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold whitespace-nowrap">
                    {p.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    View Live <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative glass rounded-3xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-glow"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img src={project.image} alt={`${project.title} preview`} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-3 gap-2">
                <h3 id="project-modal-title" className="text-2xl font-bold">{project.title}</h3>
                <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold whitespace-nowrap">
                  {project.category}
                </span>
              </div>
              <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {t}
                  </span>
                ))}
              </div>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  View Live <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

type Mask = { top: string; left?: string; right?: string; width: string; height: string };
type Certificate = {
  title: string;
  description: string;
  year: string;
  platform: string;
  importance: string;
  highlight?: string; // e.g. "Winner", "Distinction — 85%"
  image: string;
  masks: Mask[];
};

const certificates: Certificate[] = [
  {
    title: "Excel — Course Completion",
    description:
      "Successfully completed the Excel course covering formulas, data analysis, and spreadsheet productivity.",
    year: "2025",
    platform: "Infosys Springboard",
    importance:
      "Strengthens data handling and analytical skills valued in any frontend or product role.",
    highlight: "Course Completed",
    image: certExcel,
    masks: [
      { top: "30%", right: "6%", width: "16%", height: "18%" },
    ],
  },
  {
    title: "Junior Grade Typewriting English",
    description:
      "Completed Junior Grade Typewriting English certification conducted by the Government of Tamil Nadu.",
    year: "2022",
    platform: "Government of Tamil Nadu",
    importance:
      "Improved typing speed and accuracy — useful for fast, efficient development workflows.",
    highlight: "First Class — Above 60%",
    image: certTypewriting,
    masks: [
      { top: "2%", left: "4%", width: "24%", height: "6%" },
      { top: "2%", right: "4%", width: "24%", height: "6%" },
      { top: "31%", left: "41%", width: "18%", height: "13%" },
      { top: "50%", left: "36%", width: "26%", height: "5%" },
      { top: "82%", left: "5%", width: "16%", height: "16%" },
    ],
  },
  {
    title: "Skill Development & Entrepreneurship Training Program",
    description:
      "Participated in Drone Technology skill development and entrepreneurship training program.",
    year: "2023",
    platform: "Govt. Skill Development Initiative",
    importance:
      "Hands-on exposure to emerging tech and entrepreneurship mindset.",
    image: certDrone,
    masks: [
      { top: "45%", left: "0%", width: "5%", height: "35%" },
      { top: "76%", left: "5%", width: "13%", height: "16%" },
    ],
  },
  {
    title: "Republic Day Sports Participation (2019-2020)",
    description:
      "Participated in Republic Day Games and Sports conducted by the School Education Department.",
    year: "2019-2020",
    platform: "School Education Department, Tamil Nadu",
    importance: "Demonstrates teamwork, discipline, and consistency.",
    highlight: "Winner",
    image: certSports1,
    masks: [{ top: "47%", left: "48%", width: "26%", height: "6%" }],
  },
  {
    title: "Republic Day Sports Participation (2018-2019)",
    description:
      "Participated in Republic Day Games and Sports conducted by the School Education Department.",
    year: "2018-2019",
    platform: "School Education Department, Tamil Nadu",
    importance: "Reflects commitment to physical fitness and team spirit.",
    highlight: "Winner",
    image: certSports2,
    masks: [{ top: "46%", left: "48%", width: "26%", height: "6%" }],
  },
  {
    title: "Madhyama Examination Certification",
    description:
      "Successfully completed the Madhyama level Hindi examination (Dakshina Bharat Hindi Prachar Sabha).",
    year: "2019",
    platform: "Dakshina Bharat Hindi Prachar Sabha",
    importance:
      "Demonstrates multilingual proficiency — useful for collaboration across regions.",
    image: certMadhyama,
    masks: [
      { top: "26%", left: "20%", width: "24%", height: "5%" },
      { top: "86%", left: "4%", width: "26%", height: "6%" },
    ],
  },
  {
    title: "Prathamic Examination Certification",
    description:
      "Successfully completed the Prathamic level Hindi examination (Dakshina Bharat Hindi Prachar Sabha).",
    year: "2016",
    platform: "Dakshina Bharat Hindi Prachar Sabha",
    importance:
      "Foundational language certification reflecting early dedication to learning.",
    image: certPrathamic,
    masks: [
      { top: "25%", left: "20%", width: "24%", height: "5%" },
      { top: "86%", left: "4%", width: "26%", height: "6%" },
    ],
  },
];

const CertImage = ({
  src,
  alt,
  masks,
  className = "",
}: {
  src: string;
  alt: string;
  masks: Mask[];
  className?: string;
}) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
    {masks.map((m, i) => (
      <div
        key={i}
        aria-hidden
        className="absolute backdrop-blur-xl bg-background/40"
        style={{
          top: m.top,
          left: m.left,
          right: m.right,
          width: m.width,
          height: m.height,
        }}
      />
    ))}
  </div>
);

const CertificateModal = ({
  cert,
  onClose,
}: {
  cert: Certificate | null;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {cert && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative glass rounded-3xl overflow-hidden w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-glow"
        >
          <button
            onClick={onClose}
            aria-label="Close certificate"
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <CertImage
            src={cert.image}
            alt={`${cert.title} certificate`}
            masks={cert.masks}
            className="w-full max-h-[60vh] bg-muted"
          />
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-3 gap-2">
              <h3 id="cert-modal-title" className="text-2xl font-bold">
                {cert.title}
              </h3>
              <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold whitespace-nowrap">
                {cert.year}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {cert.description}
            </p>
            <p className="mt-4 text-xs text-muted-foreground/80 italic">
              Sensitive details (register no., serial no., DOB, QR code) are
              intentionally hidden for privacy.
            </p>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Certifications = () => {
  const [selected, setSelected] = useState<Certificate | null>(null);
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <Award className="w-7 h-7 text-primary-foreground" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Certifications &{" "}
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of certifications, training programs, and achievements
            earned along my journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group glass rounded-3xl overflow-hidden hover:shadow-glow transition-all hover:-translate-y-1 flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelected(c)}
                aria-label={`Press to view ${c.title} certificate`}
                className="relative block w-full text-left focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <CertImage
                  src={c.image}
                  alt={`${c.title} preview`}
                  masks={c.masks}
                  className="aspect-[4/3] bg-muted [&>img]:blur-[2px] [&>img]:group-hover:blur-0 [&>img]:transition-all [&>img]:duration-500 [&>img]:group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow">
                    <Eye className="w-4 h-4" /> Press to View
                  </span>
                </div>
              </button>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold leading-snug">{c.title}</h3>
                  <span className="shrink-0 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                    {c.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {c.description}
                </p>
                <button
                  type="button"
                  onClick={() => setSelected(c)}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <Eye className="w-4 h-4" /> View Certificate
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <CertificateModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

const SkillBar = ({ name, value, delay }: { name: string; value: number; delay: number }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="font-semibold text-sm">{name}</span>
      <span className="text-sm text-muted-foreground">{value}%</span>
    </div>
    <div className="h-2.5 rounded-full bg-muted overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-primary"
      />
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Technical Skills</h3>
          </div>
          <div className="space-y-5">
            {techSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Palette className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Design Skills</h3>
          </div>
          <div className="space-y-5">
            {designSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Resume = () => (
  <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-10 text-center shadow-card"
      >
        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
          <Download className="w-7 h-7 text-primary-foreground" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-3">
          My <span className="text-gradient">Resume</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Take a look at my full background, education, and skills.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={RESUME_URL}
            download="Ratthika_S_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-muted transition-colors font-semibold"
          >
            <ExternalLink className="w-4 h-4" /> View Resume
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Contact = () => {
  const socials = [
    { icon: Github, label: "GitHub", url: GITHUB_URL },
    { icon: Linkedin, label: "LinkedIn", url: LINKEDIN_URL },
    { icon: Instagram, label: "Instagram", url: INSTAGRAM_URL },
    { icon: Briefcase, label: "Naukri", url: NAUKRI_URL },
  ];
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            If you are a recruiter or company and interested in my work, feel
            free to contact me. I am actively looking for job and internship
            opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <a
            href={`mailto:${EMAIL}`}
            className="glass rounded-2xl p-6 flex items-center gap-4 hover:shadow-glow transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-semibold truncate">{EMAIL}</div>
            </div>
          </a>
          <a
            href={`tel:${PHONE}`}
            className="glass rounded-2xl p-6 flex items-center gap-4 hover:shadow-glow transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="font-semibold">+91 {PHONE}</div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-4 flex flex-col items-center gap-2 hover:shadow-glow transition-all hover:-translate-y-1"
            >
              <s.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">{s.label}</span>
            </a>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 text-center shadow-glow"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
          <div className="relative">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-primary-foreground mb-3">
              Looking for a passionate and dedicated developer or designer?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              I am actively seeking job opportunities. Let's work together!
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Job Opportunity`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors"
            >
              <Sparkles className="w-4 h-4" /> Hire Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
        © 2026 Ratthika S. All rights reserved. Made with{" "}
        <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
      </p>
      <div className="flex items-center gap-2">
        {[
          { Icon: Github, url: GITHUB_URL, label: "GitHub" },
          { Icon: Linkedin, url: LINKEDIN_URL, label: "LinkedIn" },
          { Icon: Instagram, url: INSTAGRAM_URL, label: "Instagram" },
          { Icon: Mail, url: `mailto:${EMAIL}`, label: "Email" },
        ].map(({ Icon, url, label }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <AIChatbot />
      </Suspense>
    </div>
  );
}

export default App;
