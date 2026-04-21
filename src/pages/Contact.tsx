import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram, Briefcase, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "ratthikaratthika55@gmail.com",
    href: "mailto:ratthikaratthika55@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 73977 32494",
    href: "tel:+917397732494",
  },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/rathiselva29" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ratthika-s29/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/rathii__selva" },
  { icon: Briefcase, label: "Naukri", href: "https://www.naukri.com/mnjuser/homepage" },
];

const Contact = () => (
  <section className="min-h-screen py-24 px-4">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <h1 className="section-title text-center">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="section-subtitle text-center">
          If you are a recruiter or company and interested in my work, feel free to contact
          me. I am actively looking for job and internship opportunities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover p-6 flex items-center gap-4"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, hsl(190 90% 50% / 0.15), hsl(270 60% 55% / 0.15))",
                border: "1px solid hsl(190 90% 50% / 0.3)",
              }}
            >
              <c.icon size={20} className="text-primary" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">{c.label}</div>
              <div className="font-medium truncate">{c.value}</div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card-hover p-8 text-center"
      >
        <h2 className="text-xl font-bold mb-2">Connect With Me</h2>
        <p className="text-muted-foreground text-sm mb-6 flex items-center justify-center gap-2">
          <MapPin size={14} /> Available for remote and on-site opportunities
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="social-icon"
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
