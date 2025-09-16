import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useReducedMotion,
} from "framer-motion";

const Reveal = ({
  children,
  className = "",
  distance = 40,
  duration = 0.6,
  delay = 0,
  once = true,
  staggerChildren = null,
  withMask = false,
  maskColor = "bg-white",
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once });
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      controls.start("visible");
      return;
    }
    if (inView) controls.start("visible");
    else if (!once) controls.start("hidden");
  }, [inView, controls, once, reduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        duration,
        delay,
        ...(staggerChildren ? { staggerChildren } : {}),
        ease: "easeOut",
      },
    },
  };

  const maskVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: "100%",
      transition: {
        duration: Math.min(0.6, duration),
        ease: "easeInOut",
        delay: Math.max(0, delay - 0.05),
      },
    },
  };

  const effectiveVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : containerVariants;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {withMask && !reduceMotion && (
        <motion.div
          variants={maskVariants}
          initial="hidden"
          animate={controls}
          className={`absolute inset-0 pointer-events-none z-20 ${maskColor}`}
          style={{ transformOrigin: "left" }}
        />
      )}

      <motion.div
        variants={effectiveVariants}
        initial="hidden"
        animate={controls}
        className={withMask && !reduceMotion ? "relative z-10" : ""}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
