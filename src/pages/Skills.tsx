import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1000);
      setValue(Math.round(t * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return <span>{value}</span>;
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="glass-card p-5">
      <div className="flex justify-between mb-3">
        <span className="font-medium">{name}</span>
        <motion.span
          className="text-primary font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <Counter target={level} inView={inView} />%
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <h1 className="section-title text-center">
          My <span className="gradient-text">Skills</span>
        </h1>
        <p className="section-subtitle text-center">
          Technologies and tools I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          <span className="gradient-text">Technical</span> Skills
        </h2>
        <div className="grid gap-4">
          {technicalSkills.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">
          <span className="gradient-text">Design</span> Skills
        </h2>
        <div className="grid gap-4">
          {designSkills.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
