"use client";

import { Children, isValidElement, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

type AutoStaggerFadeProps = {
  children: React.ReactNode;
  className?: string;
  delayStep?: number;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FadeInStagger({
  children,
  className = "",
  delayStep = 0.2,
}: AutoStaggerFadeProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const animatedChildren = Children.map(children, (child, i) => {
    if (!isValidElement(child)) return child;

    return (
      <motion.div
        key={i}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ delay: i * delayStep, duration: 0.5 }}
      >
        {child}
      </motion.div>
    );
  });

  return (
    <div ref={ref} className={className}>
      {animatedChildren}
    </div>
  );
}
