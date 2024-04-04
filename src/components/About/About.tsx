'use client';

import Section from '@/components/General/Section';
import useMouseMove from '@/hooks/useMouseMove';
import { motion } from 'framer-motion';
import { useRef } from 'react';

type Props = {};

export default function About({}: Props) {
  const containerRef = useRef(null);
  const elementRef = useRef(null);
  const { x, y } = useMouseMove(containerRef, elementRef);

  return (
    <Section id='about_section' className='relative'>
      <h1 className='text-6xl'>ABOUT SECTION</h1>
    </Section>
  );
}
