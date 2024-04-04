'use client';

import { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { hamburgerVariants } from '@/lib/data';

import NavMenu from './NavMenu';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const { top, middle, bottom } = hamburgerVariants;

  return (
    <>
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: 'easeInOut'
        }}
      >
        <motion.button
          initial={false}
          animate={isActive ? 'open' : 'closed'}
          onClick={() => setIsActive(pv => !pv)}
          className=' md:p-auto hamburger fixed right-5 top-5 z-50 h-12 w-12 rounded-full bg-black  p-8  transition-colors hover:bg-black/80 md:h-16 md:w-16'
        >
          <motion.span
            variants={top}
            className='hamburger absolute h-1 w-10 bg-white'
            style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
          />
          <motion.span
            variants={middle}
            className='hamburger absolute h-1 w-10 bg-white'
            style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
          />
          <motion.span
            variants={bottom}
            className='hamburger absolute h-1 w-5 bg-white'
            style={{
              x: '-50%',
              y: '50%',
              bottom: '35%',
              left: 'calc(50% + 10px)'
            }}
          />
        </motion.button>
      </MotionConfig>

      <AnimatePresence mode='wait'>
        {isActive && <NavMenu setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
}
