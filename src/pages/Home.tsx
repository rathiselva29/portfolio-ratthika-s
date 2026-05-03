import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Code2, Palette, GraduationCap, Briefcase } from "lucide-react";
import profilePhoto from "@/assets/ratthika-photo.jpg";

const stats = [
  { label: "Projects", value: "5+", icon: Code2 },
  { label: "Branch", value: "CSE", icon: GraduationCap },
  { label: "Internships", value: "3", icon: Briefcase },
  { label: "Dedication", value: "100%", icon: Palette },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-mono text-sm mb-4">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              I'am <span className="gradient-text">Ratthika S</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Creative Designer | Frontend Developer
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              I am a Computer Science and Engineering student passionate about building
              responsive websites and creating visually appealing designs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/projects" className="glow-btn inline-flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="glow-btn-outline inline-flex items-center gap-2">
                <Mail size={18} /> Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="section-subtitle">
                Ratthika is a dedicated Computer Science and Engineering student with strong
                interest in frontend development and creative design. Skilled in HTML, CSS,
                MySQL, Git, and GitHub. Experienced in Canva-based designing including logo
                creation, layout design, banner and poster design. Currently seeking internship
                opportunities to gain practical industry experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center lg:justify-end order-first lg:order-last"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-40"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)))",
                  }}
                />
                <div
                  className="relative w-full h-full rounded-full border-2 overflow-hidden"
                  style={{
                    borderColor: "hsl(var(--glow-primary) / 0.3)",
                    boxShadow: "0 0 60px hsl(var(--glow-primary) / 0.3)",
                  }}
                >
                  <img
                    src={profilePhoto}
                    alt="Ratthika S"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <stat.icon className="mx-auto mb-2 text-primary" size={24} />
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card-hover p-10 md:p-14 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Looking for a passionate and dedicated{" "}
              <span className="gradient-text">developer or designer?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I am actively seeking job opportunities. Let's work together!
            </p>
            <Link to="/contact" className="glow-btn inline-flex items-center gap-2">
              Hire Me <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
