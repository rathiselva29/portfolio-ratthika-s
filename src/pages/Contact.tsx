import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, CircleCheckBig, LoaderCircle, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { StaggerContainer, FadeUp } from "../components/AnimationWrappers";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Contact form submitted:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <StaggerContainer className="flex flex-col items-center mb-16">
          <FadeUp>
            <h1 className="section-title text-center">
              Get in <span className="gradient-text">Touch</span>
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="section-subtitle text-center">
              I'd love to hear from you. Let's connect and create something amazing together.
            </p>
          </FadeUp>
        </StaggerContainer>

        {/* Job Vacancy Banner */}
        <FadeUp>
          <div className="glass-card-hover p-6 mb-10 text-center border-primary/30">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Briefcase size={24} className="text-primary" />
              <h2 className="text-xl font-bold gradient-text">Looking for Opportunities</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              I am actively looking for <span className="text-foreground font-semibold">internship</span> and{" "}
              <span className="text-foreground font-semibold">job opportunities</span>. If you have any vacancy available or know of any openings, please feel free to contact me. I'd be happy to connect!
            </p>
            <a
              href="https://www.linkedin.com/in/ratthika-s29"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-2 mt-4 text-sm px-6 py-2.5"
            >
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-5 mb-12">
          <FadeUp>
            <div className="glass-card-hover p-6 text-center">
              <div
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, hsl(190 90% 50% / 0.15), hsl(270 60% 55% / 0.15))" }}
              >
                <Briefcase size={22} className="text-primary" />
              </div>
              <h3 className="font-bold mb-1">Open to Intern</h3>
              <p className="text-muted-foreground text-sm">Seeking internship & job roles</p>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="glass-card-hover p-6 text-center">
              <div
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, hsl(190 90% 50% / 0.15), hsl(270 60% 55% / 0.15))" }}
              >
                <Mail size={22} className="text-primary" />
              </div>
              <h3 className="font-bold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">ratthika.dev@gmail.com</p>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="glass-card-hover p-6 text-center">
              <div
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, hsl(190 90% 50% / 0.15), hsl(270 60% 55% / 0.15))" }}
              >
                <MapPin size={22} className="text-primary" />
              </div>
              <h3 className="font-bold mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">Tamil Nadu, India</p>
            </div>
          </FadeUp>
        </StaggerContainer>

        <FadeUp>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card-hover p-12 text-center"
            >
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, hsl(190 90% 50% / 0.2), hsl(270 60% 55% / 0.2))" }}
              >
                <CircleCheckBig size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground mb-6">Thank you for reaching out. I'll get back to you soon.</p>
              <button onClick={() => setSubmitted(false)} className="glow-btn-outline px-6 py-2 text-sm">
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card-hover p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  {...register("name")}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={loading} className="glow-btn w-full py-3 inline-flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  );
};

export default Contact;
