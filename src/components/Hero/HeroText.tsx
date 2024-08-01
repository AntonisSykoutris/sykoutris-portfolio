'use client';

import { motion } from 'framer-motion';
import PulsatingButton from '../ui/pulsating-button';

const HeroText = () => {
  const name = 'Antonis Sykoutris';

  return (
    <div className='noselect container absolute z-10 mt-10 flex h-fit flex-col items-center justify-center text-primary-foreground'>
      <div
        className='flex cursor-default flex-col items-center justify-center text-center text-2xl opacity-100 sm:text-3xl md:text-4xl 2xl:text-6xl 3xl:text-7xl'
        style={{ fontFamily: 'Vermin Vibes, sans-serif' }}
      >
        <span>Hi, I&#39;m </span>
        <div className='text-primary'>
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
        </div>
      </div>
      <div className='flex justify-between gap-5 pt-10'>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='rounded-lg bg-background px-4 py-2 text-base font-bold text-foreground sm:text-lg md:text-xl'
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
          className='bg-[#399a67] text-base font-bold sm:text-lg md:text-xl'
          pulseColor='#0fba74'
        >
          Contact Me
        </PulsatingButton>
      </div>
    </div>
  );
};

export default HeroText;
