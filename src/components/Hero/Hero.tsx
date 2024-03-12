'use client';

import Section from '@/components/General/Section';
import {
  useMotionValue,
  useTransform,
  motion,
  useScroll,
  useMotionTemplate
} from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = {};

export default function Hero({}: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x = useMotionValue(0);
  const compWidth = useMotionTemplate`${scale4}%`;

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
    <section ref={container} className=' relative h-[200vh] w-full px-0 pt-0'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden bg-blue-500 '>
        <motion.div
          id='left-side'
          className='side absolute  grid h-screen w-full place-items-center overflow-hidden bg-[#030712] text-white'
          style={{ width: compWidth }}
        >
          <h2 className='title'>
            Sometimes a simple header is
            <span className=' text-[#a3e635]'>better</span>
          </h2>
        </motion.div>
        <div
          id='right-side'
          className='side absolute grid  h-screen w-full place-items-center overflow-hidden bg-[#a3e635]'
        >
          <h2 className='title'>
            Sometimes a simple header is
            <span className='text-white'>worse</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

// const left = document.getElementById('left-side');

// const handleMove = e => {
//   left.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
// };

// document.onmousemove = e => handleMove(e);

// document.ontouchmove = e => handleMove(e.touches[0]);
