'use client';

import Section from '@/components/General/Section';
import TiltCard from '../General/TiltCard';
import useMouseMove from '@/hooks/useMouseMove';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import PlayingCard from './PlayingCard';

type Props = {};

export default function About({}: Props) {
  const containerRef = useRef(null);
  const elementRef = useRef(null);
  const { x, y } = useMouseMove(containerRef, elementRef);

  return (
    <Section className='about_section'>
      <h1 className='text-6xl'>ABOUT SECTION</h1>
      {/* <BubbleText />

      <button className='rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>
        Hover me
      </button>
      <TiltCard /> */}
      {/* <div ref={containerRef} className='h-full w-full bg-red-500'>
        <motion.div
          ref={elementRef}
          className=' h-10 w-10 bg-blue-200'
          style={{ x, y }}
        ></motion.div>
      </div> */}
      <div className='d-flex relative h-full w-full '>
        {/* <PlayingCard className='absolute left-1/2  -translate-x-1/2 transform  ' />
        <PlayingCard className='absolute left-1/2  -translate-x-1/2  rotate-6 transform  ' />
        <PlayingCard className='absolute left-1/2  -translate-x-1/2  -rotate-6 transform  ' /> */}
      </div>
    </Section>
  );
}

const BubbleText = () => {
  return (
    <h2 className='text-center text-5xl font-thin text-indigo-300'>
      {'Bubbbbbbbble text'.split('').map((child, idx) => (
        <span className='hoverText' key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};
