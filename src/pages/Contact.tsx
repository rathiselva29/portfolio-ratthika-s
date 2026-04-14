import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            If you are a recruiter or company and interested in my work, feel free to contact me. 
            I am actively looking for job and internship opportunities.
          </p>
        </motion.div>

        {/* Hire Me CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 mb-12 border border-primary/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Looking for a passionate developer or designer?
                </h2>
                <p className="text-muted-foreground mt-1">
                  I am actively seeking job opportunities. Let's work together!
                </p>
              </div>
            </div>
            <a 
              href="mailto:your-email@example.com?subject=Job Opportunity"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">ratthika.dev@gmail.com</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Phone</h3>
            <p className="text-sm text-muted-foreground">+91 98765 43210</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Location</h3>
            <p className="text-sm text-muted-foreground">Tamil Nadu, India</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
