'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import * as React from 'react';
import { SVGProps, useRef } from 'react';

export default function SvgComponent() {
  const transition = {
    duration: 14,
    ease: 'easeInOut'
  };

  const ref = useRef<any>(null);

  // Track scroll progress, lies between 0 and 1.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  });

  // when scroll progress reached 1, path length becomes 0.
  const pathLengthValue = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 800 400'
      style={{
        pathLength: useSpring(pathLengthValue, {
          stiffness: 500,
          damping: 100
        })
      }}
    >
      <motion.path
        fill='none'
        stroke='hsl(335, 77%, 50%)'
        strokeDasharray='0 0'
        strokeLinecap='round'
        strokeWidth={7.5644800000000005}
        d='m101.49 195.154 597.02 9.692'
      />
    </motion.svg>
  );
}
