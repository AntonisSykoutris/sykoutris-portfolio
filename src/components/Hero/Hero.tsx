'use client';

import Section from '@/components/General/Section';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect } from 'react';

type Props = {};

export default function Hero({}: Props) {
  const x = useMotionValue(0);
  const width = useTransform(
    x,
    value => `${(value / window.innerWidth) * 100}%`
  );

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number }) => {
      x.set(event.clientX);
    };

    const handleTouchMove = (event: { touches: { clientX: number }[] }) => {
      x.set(event.touches[0].clientX);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [x]);
  return (
    <Section className='hero_section px-0'>
      <motion.div id='left-side' className='side' style={{ width }}>
        <h2 className='title'>
          Sometimes a simple header is
          <span className='fancy'>better</span>
        </h2>
      </motion.div>
      <div id='right-side' className='side'>
        <h2 className='title'>
          Sometimes a simple header is
          <span className='fancy'>worse</span>
        </h2>
      </div>
    </Section>
  );
}

// const left = document.getElementById('left-side');

// const handleMove = e => {
//   left.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
// };

// document.onmousemove = e => handleMove(e);

// document.ontouchmove = e => handleMove(e.touches[0]);
