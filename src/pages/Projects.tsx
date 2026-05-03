import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import artikaImg from "@/assets/project-artika.png";
import habitImg from "@/assets/project-habit.png";
import dailyImg from "@/assets/project-daily.jpg";
import vsArtImg from "@/assets/project-vsart.png";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Artika Creations",
    description:
      "Artist website to showcase paintings and creative works, demonstrating my web development and design skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: artikaImg,
    live: "https://artika-creations-rathiselva29s-projects.vercel.app?_vercel_share=VO0lkVXyZ2xwRhVZUGhKveg3Zu4bo4zc",
  },
  {
    title: "Habit Tracking App",
    description:
      "A personal habit tracking application to help users build and maintain daily habits, with progress tracking and streaks.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: habitImg,
    live: "https://rathiselva29.github.io/Habit-Tracking/",
    github: "https://github.com/rathiselva29/Habit-Tracking",
  },
  {
    title: "Daily Tracking Website",
    description:
      "A handmade-design daily tracking website with a clean, custom layout to log and review everyday activities.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: dailyImg,
    live: "https://rathiselva29.github.io/DailyTracking/",
    github: "https://github.com/rathiselva29/DailyTracking",
  },
  {
    title: "VS Art Project",
    description:
      "A visually-rich creative art project showcasing layout design and front-end styling with handcrafted visuals.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: vsArtImg,
    live: "https://rathiselva29.github.io/ratthika_vs_art_project/",
    github: "https://github.com/rathiselva29/ratthika_vs_art_project",
  },
];

const Projects = () => (
  <section className="min-h-screen py-24 px-4">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <h1 className="section-title text-center">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="section-subtitle text-center">
          A collection of projects that showcase my skills and passion for development.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover overflow-hidden h-full flex flex-col"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-primary/30 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn text-sm px-4 py-2 inline-flex items-center gap-1.5"
                >
                  <ExternalLink size={14} /> View Live
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-btn-outline text-sm px-4 py-2 inline-flex items-center gap-1.5"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
