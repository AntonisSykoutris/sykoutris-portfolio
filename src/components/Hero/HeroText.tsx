'use client';

import { motion } from 'framer-motion';
import PulsatingButton from '../ui/pulsating-button';

const HeroText = () => {
  const name = 'Antonis Sykoutris';

  return (
    <div
      className='noselect container absolute z-10 mt-10 flex h-fit flex-col items-center justify-center rounded-[50%] text-primary-foreground'
      id='repulse-div'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className='flex cursor-default flex-col items-center justify-center text-center text-xl opacity-100 sm:text-3xl md:text-4xl 2xl:text-6xl 3xl:text-7xl'
        style={{ fontFamily: 'Vermin Vibes, sans-serif' }}
      >
        <motion.span
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          Hi, I&#39;m{' '}
        </motion.span>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className='text-primary'
        >
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
      <div className='flex justify-between gap-5 pt-10'>
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
      </div>
    </div>
  );
};

export default HeroText;
