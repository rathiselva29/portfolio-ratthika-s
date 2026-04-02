import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, ArrowRight, Sparkles } from "lucide-react";
import { StaggerContainer, FadeUp } from "../components/AnimationWrappers";
import ratthikaPhoto from "/assets/ratthika-photo-DL1skZ1e.jpg";

const roles = ["Frontend Developer", "Creative Designer"];

const TypeWriter = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (deleting) {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      } else {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1500);
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <motion.span className="gradient-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
      {text}
      <span className="animate-pulse text-primary">|</span>
    </motion.span>
  );
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ratthika-s29", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/rathiselva29", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/rathii__selva", label: "Instagram" },
];

const SocialIcons = () => (
  <div className="flex gap-3">
    {socialLinks.map((s, i) => (
      <motion.a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="social-icon"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
        whileHover={{ rotate: 10 }}
      >
        <s.icon size={20} />
      </motion.a>
    ))}
  </div>
);

const Index = () => (
  <div>
    {/* Hero */}
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <StaggerContainer className="flex flex-col items-center gap-6">
          <FadeUp>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles size={14} className="text-primary" />
              Open to Intern
            </motion.div>
          </FadeUp>
          <FadeUp>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Ratthika</span>
            </h1>
          </FadeUp>
          <FadeUp>
            <div className="text-2xl md:text-3xl font-medium h-10">
              <TypeWriter />
            </div>
          </FadeUp>
          <FadeUp>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              I am a Computer Science and Engineering student passionate about building responsive websites and creating visually appealing designs.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link to="/projects" className="glow-btn inline-flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="glow-btn-outline inline-flex items-center gap-2">
                Contact Me
              </Link>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="mt-8">
              <SocialIcons />
            </div>
          </FadeUp>
        </StaggerContainer>
      </div>
    </section>

    {/* About */}
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <StaggerContainer className="grid md:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div>
              <h2 className="section-title">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ratthika is a dedicated Computer Science and Engineering student with strong interest in frontend development and creative design. Skilled in HTML, CSS, MySQL, Git, and GitHub. Experienced in Canva-based designing including logo creation, layout design, banner and poster design. Currently seeking internship opportunities to gain practical industry experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5+", label: "Projects" },
                  { value: "CSE", label: "Branch" },
                  { value: "3", label: "Internships" },
                  { value: "100%", label: "Dedication" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="glass-card-hover p-8 text-center">
              <div
                className="w-40 h-40 mx-auto rounded-full mb-6 overflow-hidden"
                style={{
                  border: "3px solid hsl(190 90% 50% / 0.4)",
                  boxShadow: "0 0 30px hsl(190 90% 50% / 0.15)",
                }}
              >
                <img src={ratthikaPhoto} alt="Ratthika" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Ratthika S</h3>
              <p className="text-primary text-sm font-medium">Frontend Developer & Creative Designer</p>
            </div>
          </FadeUp>
        </StaggerContainer>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <StaggerContainer className="flex flex-col items-center gap-6">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold">
              Let's Build Something <span className="gradient-text">Amazing</span> Together
            </h2>
          </FadeUp>
          <FadeUp>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="glow-btn inline-flex items-center gap-2 text-lg px-10 py-4"
                style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
              >
                Contact Me <ArrowRight size={20} />
              </Link>
            </motion.div>
          </FadeUp>
        </StaggerContainer>
      </div>
    </section>
  </div>
);

export default Index;
