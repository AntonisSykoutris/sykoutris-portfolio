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
import TiltCard from '../General/TiltCard';
import Typewriter from '../CodeBlock/Typewriter';

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
    <section
      ref={container}
      id='home_section'
      className='relative h-[200vh] w-full px-0 pt-0'
    >
      <div className='sticky top-0 flex h-screen items-center overflow-hidden bg-blue-500 '>
        <motion.div
          id='left-side'
          className='absolute  grid  h-screen w-full place-items-center  overflow-hidden bg-[#030712]  text-foreground '
          style={{ width: compWidth }}
        >
          <h2 className='mx-[10vw] my-0 w-[80vw] self-start pt-5 text-center text-xl  md:text-4xl xl:text-8xl'>
            Lets give them a modern touch
            <span className='text-[#a3e635]'> !</span>
          </h2>
          <TiltCard />
        </motion.div>
        <div
          id='right-side'
          className='absolute grid h-screen  w-full place-items-center overflow-hidden bg-[#a3e635] pt-5 text-center'
        >
          <h2 className='mx-[10vw] my-0 w-[80vw] self-start justify-self-center  text-xl  md:text-4xl xl:text-8xl'>
            Tired of seeing boring layouts
            <span className=' text-foreground '> ?</span>
          </h2>
          {/* <motion.div className=' preserve-3d relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300'></motion.div> */}
          <div className=' text-start'>
            <Typewriter />
          </div>
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
