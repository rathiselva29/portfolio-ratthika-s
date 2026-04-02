import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { StaggerContainer, FadeUp } from "../components/AnimationWrappers";

const technicalSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "MySQL", level: 75 },
  { name: "Git", level: 85 },
  { name: "GitHub", level: 88 },
];

const designSkills = [
  { name: "Canva", level: 92 },
  { name: "Logo Design", level: 85 },
  { name: "Layout Design", level: 80 },
  { name: "Banner Design", level: 88 },
  { name: "Poster Design", level: 86 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="glass-card p-5">
      <div className="flex justify-between mb-3">
        <span className="font-medium">{name}</span>
        <motion.span className="text-primary font-mono text-sm" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          {inView && level}%
        </motion.span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
};

const Skills = () => (
  <section className="min-h-screen py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <StaggerContainer className="flex flex-col items-center mb-16">
        <FadeUp>
          <h1 className="section-title text-center">
            My <span className="gradient-text">Skills</span>
          </h1>
        </FadeUp>
        <FadeUp>
          <p className="section-subtitle text-center">Technologies and tools I use to bring ideas to life.</p>
        </FadeUp>
      </StaggerContainer>

      <div className="mb-12">
        <FadeUp>
          <h2 className="text-2xl font-bold mb-6">
            <span className="gradient-text">Technical</span> Skills
          </h2>
        </FadeUp>
        <StaggerContainer className="grid gap-4">
          {technicalSkills.map((s) => (
            <FadeUp key={s.name}>
              <SkillBar name={s.name} level={s.level} />
            </FadeUp>
          ))}
        </StaggerContainer>
      </div>

      <div>
        <FadeUp>
          <h2 className="text-2xl font-bold mb-6">
            <span className="gradient-text">Design</span> Skills
          </h2>
        </FadeUp>
        <StaggerContainer className="grid gap-4">
          {designSkills.map((s) => (
            <FadeUp key={s.name}>
              <SkillBar name={s.name} level={s.level} />
            </FadeUp>
          ))}
        </StaggerContainer>
      </div>
    </div>
  </section>
);

export default Skills;
