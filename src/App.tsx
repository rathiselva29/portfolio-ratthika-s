import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  FolderOpen, 
  Code2, 
  FileText, 
  User, 
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from "lucide-react";
import { Suspense, lazy } from "react";

// Lazy load pages
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

// Home component
const Home = () => (
  <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 flex items-center">
    <div className="max-w-6xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium mb-2">Hello, I'm</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4">
            Ratthika
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-6">
            Frontend Developer & Designer
          </p>
          <p className="text-muted-foreground mb-8 max-w-lg">
            I am actively seeking job opportunities. Let's work together!
          </p>
          <div className="flex flex-wrap gap-4">
            <NavLink 
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </NavLink>
            <a 
              href="/assets/ratthika-photo-DL1skZ1e.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
            <div className="w-full h-full rounded-xl bg-card flex items-center justify-center overflow-hidden">
              <img 
                src="/assets/ratthika-photo-DL1skZ1e.jpg" 
                alt="Ratthika"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

// Layout with navigation
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold text-foreground">
            Ratthika
          </NavLink>
          
          <div className="hidden md:flex items-center gap-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`
              }
            >
              <span className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </span>
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`
              }
            >
              <span className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4" />
                Projects
              </span>
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`
              }
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </span>
            </NavLink>
          </div>

          {/* Mobile menu - simplified */}
          <div className="md:hidden flex items-center gap-2">
            <NavLink to="/" className="p-2 rounded-lg text-muted-foreground hover:text-foreground">
              <Home className="w-5 h-5" />
            </NavLink>
            <NavLink to="/projects" className="p-2 rounded-lg text-muted-foreground hover:text-foreground">
              <FolderOpen className="w-5 h-5" />
            </NavLink>
            <NavLink to="/contact" className="p-2 rounded-lg text-muted-foreground hover:text-foreground">
              <Mail className="w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>

    <main>{children}</main>

    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ratthika. Built with passion.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
