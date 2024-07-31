'use client';

import { motion } from 'framer-motion';
import PulsatingButton from '../ui/pulsating-button';
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight
} from '@/lib/motion';

const HeroText = () => {
  const name = 'Antonis Sykoutris';

  return (
    <div className='noselect container absolute z-10 mt-10 flex h-fit flex-col items-center justify-center text-primary-foreground'>
      <motion.div className='flex cursor-default flex-col items-center justify-center text-center text-xl opacity-100 sm:text-3xl md:text-4xl 2xl:text-6xl 3xl:text-7xl'>
        <motion.span {...slideInFromLeft()}>Hi, I&#39;m </motion.span>
        <motion.div className='text-primary' {...slideInFromRight()}>
          {name.split('').map((char, index) => {
            if (char === ' ') {
              return ' ';
            }
            return (
              <span
                key={index}
                className='text-primary-400 bounce'
                style={{ fontSize: '1.2em' }}
              >
                {char}
              </span>
            );
          })}{' '}
          👋
        </motion.div>
      </motion.div>
      <motion.div
        className='flex justify-between gap-5 pt-10'
        {...slideInFromBottom()}
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='rounded-lg bg-background px-4 py-2 text-lg font-bold text-foreground md:text-xl'
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'antialiased',
            transformStyle: 'preserve-3d'
          }}
          href='https://github.com/AntonisSykoutris/portfolio/raw/main/cv/antonios-sykoutris-CV.pdf'
          download
          rel='noopener'
        >
          Download CV
        </motion.a>
        <PulsatingButton
          className='bg-[#399a67] text-lg font-bold md:text-xl'
          pulseColor='#0fba74'
        >
          Contact Me
        </PulsatingButton>
      </motion.div>
    </div>
  );
};

export default HeroText;
