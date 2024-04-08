'use client';

import Section from '@/components/General/Section';
import useMouseMove from '@/hooks/useMouseMove';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { MovingLine } from '../General/MovingLine';
import TracingBeam from '@/ui/tracing-beam';
import SvgComponent from '../General/SvgComponent';

type Props = {};

export default function About({}: Props) {
  const containerRef = useRef(null);
  const elementRef = useRef(null);
  const { x, y } = useMouseMove(containerRef, elementRef);

  return (
    <Section id='about_section' className='relative justify-start'>
      <h1 className='text-6xl'>ABOUT SECTION</h1>
      {/* <TracingBeam className='px-6'>
        <div className='content mb-10 w-full '>
          <p className='text-2xl font-bold text-white  '>
            The path follows the scroll
          </p>
          <p className='text-base font-normal text-neutral-300  '>
            If you look closely, you can see the path is being animated.
          </p>
          <div className='flex w-full space-x-4 '>
            <div className='mt-4 h-40 w-full rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 md:h-96' />
            <div className='mt-4 h-40 w-full rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 md:h-96' />
          </div>
        </div>
      </TracingBeam> */}
      <SvgComponent />
    </Section>
  );
}
