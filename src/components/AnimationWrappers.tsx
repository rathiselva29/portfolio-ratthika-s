import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";

export const StaggerContainer = ({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeUp = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const TiltCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ rotateX: -5, rotateY: 5, scale: 1.02, transition: { duration: 0.3 } }}
    style={{ transformPerspective: 800 }}
    className={className}
  >
    {children}
  </motion.div>
);
