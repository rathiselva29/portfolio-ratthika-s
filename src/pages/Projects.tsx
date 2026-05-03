import { motion } from "framer-motion";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Habit Tracking",
    description: "A personal habit tracking application built with vanilla JavaScript. Features include daily habit logging, progress visualization, and local storage persistence.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://rathiselva29.github.io/Habit-Tracking/",
    github: "https://github.com/rathiselva29/Habit-Tracking",
    featured: true,
  },
  {
    title: "Artika Gallery",
    description: "A responsive art gallery showcasing creative works with smooth animations and modern design principles.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://artikagallery.netlify.app/",
    github: null,
    featured: true,
  },
  {
    title: "Responsive Website - Codebind Tech",
    description: "A fully responsive company website built during internship at Codebind Technologies. Features modern UI components and cross-browser compatibility.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: null,
    github: null,
    featured: false,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my work showcasing frontend development and design skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FolderOpen className="w-5 h-5 text-primary" />
                  {project.featured && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
