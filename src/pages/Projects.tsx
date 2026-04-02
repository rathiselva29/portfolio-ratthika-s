import { Github, ExternalLink } from "lucide-react";
import { StaggerContainer, FadeUp, TiltCard } from "../components/AnimationWrappers";

const projects = [
  {
    title: "HabitFlow — Perfect Habit Tracker",
    description:
      "A personal habit tracking application to build and maintain daily habits with an intuitive and clean interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    live: "https://rathiselva29.github.io/Habit-Tracking/",
    github: "https://github.com/rathiselva29/Habit-Tracking",
  },
  {
    title: "Artika Gallery",
    description:
      "Artist website to showcase paintings and creative works, demonstrating my web development and design skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
    live: "https://artika-gallery.vercel.app/",
  },
  {
    title: "Responsive Website — Codebind Tech",
    description:
      "Designed responsive and user-friendly websites during web development internship at Codebind Tech, Trichy.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
  },
];

const Projects = () => (
  <section className="min-h-screen py-24 px-4">
    <div className="container mx-auto max-w-6xl">
      <StaggerContainer className="flex flex-col items-center mb-16">
        <FadeUp>
          <h1 className="section-title text-center">
            My <span className="gradient-text">Projects</span>
          </h1>
        </FadeUp>
        <FadeUp>
          <p className="section-subtitle text-center">
            A collection of projects that showcase my skills and passion for development.
          </p>
        </FadeUp>
      </StaggerContainer>

      <StaggerContainer className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <FadeUp key={project.title}>
            <TiltCard className="glass-card-hover overflow-hidden h-full flex flex-col">
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
                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-primary/30 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                {(project.github || project.live) && (
                  <div className="flex gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-btn text-sm px-4 py-2 inline-flex items-center gap-1.5"
                      >
                        <ExternalLink size={14} /> View Project
                      </a>
                    )}
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
                )}
              </div>
            </TiltCard>
          </FadeUp>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Projects;
