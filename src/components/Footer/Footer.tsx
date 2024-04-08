'use client';

import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import FooterSocial from './FooterSocial';
import FooterNav from './FooterNav';

export default function Footer() {
  const container = useRef(null);
  const paths = useRef<(SVGTextPathElement | null)[]>([]); // Make ref nullable

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });

  useEffect(() => {
    scrollYProgress.on('change', e => {
      paths.current.forEach((path, i) => {
        if (path) path.setAttribute('startOffset', -40 + i * 40 + e * 40 + '%');
      });
    });
  }, [scrollYProgress]);

  return (
    <section
      className=' mx-auto flex h-[200svh] w-screen
    flex-col items-start justify-end'
      ref={container}
    >
      <svg className='mb-40 w-full' viewBox='0 0 250 90'>
        <path
          fill='none'
          id='curve'
          d='m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68'
        />
        <text className='text-[6px] uppercase' style={{ fill: 'red' }}>
          {[...Array(3)].map((_, i) => {
            return (
              <textPath
                key={i}
                ref={ref => (paths.current[i] = ref)}
                startOffset={i * 40 + '%'}
                href='#curve'
              >
                Curabitur mattis efficitur velit
              </textPath>
            );
          })}
        </text>
      </svg>
      <Logos scrollYProgress={scrollYProgress} />
    </section>
  );
}

const Logos = ({
  scrollYProgress
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const y = useTransform(scrollYProgress, [0, 1], [-350, 0]);
  const currentYear = new Date().getFullYear();

  return (
    <div className=' w-full overflow-hidden bg-black' id='contact_section'>
      <motion.div
        style={{ y }}
        className='flex h-full flex-col items-center justify-center gap-10 p-10 px-4 md:px-8'
      >
        <div className='flex w-full flex-col items-center justify-between gap-4 border-b border-t py-6 md:flex-row'>
          <FooterNav />
          <div className='flex justify-center gap-x-5 sm:justify-start'>
            <FooterSocial />
          </div>
        </div>

        <div className='py-8 text-center text-sm text-foreground'>
          © {currentYear} - Present Sykoutris Antonis. All rights reserved.
        </div>
      </motion.div>
    </div>
  );
};
