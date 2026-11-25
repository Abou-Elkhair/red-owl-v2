import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}> = ({ children, delay = 0, className = '', y = 22 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}> = ({ children, className = '', stagger = 0.06 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const CountUp: React.FC<{
  value: string;
  className?: string;
}> = ({ value, className = '' }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const numericMatch = value.match(/^(\d+)(.*)$/);
  const target = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const suffix = numericMatch ? numericMatch[2] : '';
  const hasLeadingZero = numericMatch ? numericMatch[1].startsWith('0') && numericMatch[1].length === 2 : false;
  const [display, setDisplay] = useState<string>(value);

  useEffect(() => {
    if (!inView || target === null) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }
    const start = target > 1000 ? 1990 : 0;
    const duration = 900;
    const startTime = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (target - start) * eased);
      const formatted = hasLeadingZero && current < 10 ? `0${current}` : `${current}`;
      setDisplay(`${formatted}${suffix}`);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, suffix, value, hasLeadingZero]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
};

/* Subtle animated SVG schematic pipes & electrical pulse lines for dark engineering sections */
export const MepSchematicBackdrop: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="h-full w-full opacity-[0.14]"
        viewBox="0 0 1200 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M0 140 H340 L390 190 H780 L840 130 H1200"
          stroke="#D11A22"
          strokeWidth="1.5"
        />
        <path
          d="M0 440 H260 L320 380 H690 L750 440 H1200"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeOpacity="0.45"
        />
        <motion.circle
          r="3.5"
          fill="#D11A22"
          initial={{ offsetDistance: '0%', opacity: 0.8 }}
          animate={{ cx: [0, 340, 390, 780, 840, 1200], cy: [140, 140, 190, 190, 130, 130] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          r="2.5"
          fill="#FFFFFF"
          animate={{ cx: [1200, 750, 690, 320, 260, 0], cy: [440, 440, 380, 380, 440, 440] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
};
