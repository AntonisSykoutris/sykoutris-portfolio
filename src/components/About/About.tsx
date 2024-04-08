'use client';

import useMouseMove from '@/hooks/useMouseMove';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Props = {};

export default function About({}: Props) {
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

  const PATH = 'M0.5 0.980671L0.5 1566.02';

  return (
    <div
      className='mx-auto flex w-full max-w-4xl flex-row items-start space-x-10 '
      ref={ref}
    >
      <svg
        width='100'
        height='1567'
        viewBox='0 0 1 1567'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='flex-shrink-0'
      >
        <path d={PATH} stroke='url(#paint0_linear_207_38)' />
        <defs>
          <linearGradient
            id='paint0_linear_207_38'
            x1='1'
            y1='-102.823'
            x2='1'
            y2='1566.02'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#3879E7' stop-opacity='0' />
            <stop offset='1' stop-color='#3879E7' />
          </linearGradient>
        </defs>
        <motion.path
          // animatng pathLength value, goes from 1 to 0
          style={{
            pathLength: useSpring(pathLengthValue, {
              stiffness: 500,
              damping: 100
            })
          }}
          transition={transition}
          d={PATH}
          stroke='var(--blue-500)'
          strokeOpacity='1'
          strokeLinecap={'round'}
          strokeWidth='3'
        />
      </svg>
    </div>
  );
}
