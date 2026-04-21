import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import AIChatbot from "./AIChatbot";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/resume", label: "Resume" },
  { to: "/profiles", label: "Profiles" },
  { to: "/contact", label: "Contact" },
];

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="gradient-blob-1" />
      <div className="gradient-blob-2" />
      <div className="gradient-blob-3" />

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <NavLink to="/" className="font-bold text-lg">
            <span className="gradient-text">Ratthika</span>
            <span className="text-foreground">.dev</span>
          </NavLink>
          <div className="flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="relative z-10 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="relative z-10 border-t border-border/40 py-8 px-4 backdrop-blur-xl bg-background/60">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Ratthika S. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="https://github.com/rathiselva29" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ratthika-s29/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/rathii__selva" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <Instagram size={18} />
            </a>
            <a href="mailto:ratthikaratthika55@gmail.com" aria-label="Email" className="social-icon">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>

      <AIChatbot />
    </div>
  );
};

export default Layout;
