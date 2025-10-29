'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type VariantType = 'fadeUp' | 'fadeLeft' | 'fadeRight';

export default function MotionSection({
  title,
  color,
  variant = 'fadeUp',
}: {
  title: string;
  color: string;
  variant?: VariantType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  const variants: Record<VariantType, any> = {
    fadeUp: {
      hidden: { opacity: 0, y: 80 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -80 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 80 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.section
      ref={ref}
      className={`min-h-[60vh] flex items-center justify-center text-4xl ${color}`}
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {title}
    </motion.section>
  );
}
