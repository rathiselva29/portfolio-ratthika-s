import { motion } from "framer-motion";
import { Github, Linkedin, Briefcase, ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    handle: "@rathiselva29",
    description: "All my code, repositories, and open-source contributions.",
    href: "https://github.com/rathiselva29",
    icon: Github,
  },
  {
    name: "LinkedIn",
    handle: "ratthika-s29",
    description: "Professional network, experience, and recommendations.",
    href: "https://www.linkedin.com/in/ratthika-s29/",
    icon: Linkedin,
  },
  {
    name: "Naukri",
    handle: "Job Profile",
    description: "Open to internship and full-time opportunities.",
    href: "https://www.naukri.com/mnjuser/homepage",
    icon: Briefcase,
  },
];

const CodingProfiles = () => (
  <section className="min-h-screen py-24 px-4">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <h1 className="section-title text-center">
          My <span className="gradient-text">Profiles</span>
        </h1>
        <p className="section-subtitle text-center">
          Find me across coding and professional platforms.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover p-6 flex flex-col gap-3 group"
          >
            <div className="flex items-center justify-between">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(190 90% 50% / 0.15), hsl(270 60% 55% / 0.15))",
                  border: "1px solid hsl(190 90% 50% / 0.3)",
                }}
              >
                <p.icon size={22} className="text-primary" />
              </div>
              <ExternalLink
                size={16}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-xs text-primary font-mono">{p.handle}</p>
            </div>
            <p className="text-sm text-muted-foreground">{p.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CodingProfiles;
