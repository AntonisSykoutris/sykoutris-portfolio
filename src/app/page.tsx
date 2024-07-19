'use client';
import {  MotionConfig } from 'framer-motion';
import { framerMotionConfig } from '@/lib/utils';
import SectionDivider from '@/components/General/SectionDivider';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';

export default function Home() {
  return (
    <MotionConfig
      transition={{
        ...framerMotionConfig,
      }}
    >
    <SectionDivider />
    <Hero/>
    <SectionDivider />
    <About/>
    <SectionDivider />
    <Skills/>
    </MotionConfig>
  );
}
