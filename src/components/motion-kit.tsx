import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/* ---------- Cinematic loading curtain (Scene 01) ---------- */
export const CinematicIntro = () => {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), reduce ? 200 : 1900);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 1], scale: [0.6, 1, 1.06] }}
            transition={{ duration: 1.8, ease: EASE_OUT }}
            className="w-40 h-40 rounded-full bg-gradient-primary blur-3xl opacity-70"
          />
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.2 }}
            className="absolute text-xs sm:text-sm uppercase font-semibold text-muted-foreground"
          >
            Ratthika S
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ---------- Digital dust particle field ---------- */
export const ParticleField = ({ count = 26 }: { count?: number }) => {
  const reduce = useReducedMotion();
  const dots = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      dur: 12 + Math.random() * 16,
      delay: Math.random() * 6,
      drift: (Math.random() - 0.5) * 90,
    })),
  ).current;

  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-primary/40"
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size }}
          animate={{ y: [0, -120, 0], x: [0, d.drift, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

/* ---------- Cursor-following glow (desktop only) ---------- */
export const CursorGlow = () => {
  const reduce = useReducedMotion();
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 90, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 20, mass: 0.6 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[45] -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] rounded-full bg-primary/10 blur-[90px]"
    />
  );
};

/* ---------- Magnetic hover wrapper ---------- */
export const Magnetic = ({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18 });
  const sy = useSpring(y, { stiffness: 260, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.span>
  );
};

/* ---------- Letter-by-letter cinematic title ---------- */
export const RevealChars = ({
  text,
  className,
  delay = 0,
  charClassName,
}: {
  text: string;
  className?: string;
  delay?: number;
  charClassName?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          aria-hidden
          className={`inline-block ${charClassName ?? ""}`}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: "0.6em", rotateX: -70, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          transition={{ delay: delay + i * 0.035, duration: 0.7, ease: EASE_OUT }}
          style={{ transformPerspective: 600 }}
        >
          {ch === " " ? "\u00a0" : ch}
        </motion.span>
      ))}
    </span>
  );
};

/* ---------- Word-by-word reveal on scroll ---------- */
export const RevealWords = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => (
  <span className={className} aria-label={text}>
    {text.split(" ").map((w, i) => (
      <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
        <motion.span
          aria-hidden
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: delay + i * 0.08, duration: 0.75, ease: EASE_OUT }}
        >
          {w}&nbsp;
        </motion.span>
      </span>
    ))}
  </span>
);

/* ---------- Mask/clip reveal wrapper ---------- */
export const MaskReveal = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
    whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay, duration: 1, ease: EASE_OUT }}
  >
    {children}
  </motion.div>
);

/* ---------- Giant scene word ("WHO AM I?", "WORK") ---------- */
export const SceneWord = ({
  word,
  from = "left",
}: {
  word: string;
  from?: "left" | "right";
}) => (
  <motion.div
    aria-hidden
    initial={{ x: from === "left" ? "-40%" : "40%", opacity: 0 }}
    whileInView={{ x: "0%", opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.1, ease: EASE_OUT }}
    className="pointer-events-none select-none text-center font-extrabold uppercase leading-none tracking-tight text-[18vw] lg:text-[12vw] text-foreground/[0.055]"
  >
    {word}
  </motion.div>
);

/* ---------- 3D tilt card driven by pointer ---------- */
export const useTilt = (max = 8) => {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 200, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };
  const onMouseLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return { rotateX, rotateY, onMouseMove, onMouseLeave } as {
    rotateX: MotionValue<number>;
    rotateY: MotionValue<number>;
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave: () => void;
  };
};

/* ---------- Typing terminal window ---------- */
const CODE_LINES = [
  "const ratthika = {",
  "  role: 'Frontend Developer',",
  "  stack: ['React', 'CSS', 'JS'],",
  "  design: 'Canva • Logo • Banner',",
  "  status: 'open to internships',",
  "};",
];

export const CodeWindow = ({ className }: { className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`glass rounded-2xl overflow-hidden shadow-card w-full max-w-sm ${className ?? ""}`}
      initial={{ opacity: 0, y: 30, rotateX: 12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: EASE_OUT }}
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      style={{ transformPerspective: 900 }}
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/60">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-secondary/70" />
        <span className="ml-2 text-[11px] text-muted-foreground">ratthika.ts</span>
      </div>
      <div className="p-4 font-mono text-[11px] sm:text-xs leading-relaxed text-muted-foreground">
        {CODE_LINES.map((line, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.18, duration: 0.4 }}
            className={i === 0 || i === CODE_LINES.length - 1 ? "text-primary" : undefined}
          >
            {line}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
          className="inline-block w-2 h-3.5 bg-primary align-middle mt-1"
        />
      </div>
    </motion.div>
  );
};
