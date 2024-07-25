'use client';
import { MotionConfig } from 'framer-motion';
import { framerMotionConfig } from '@/lib/utils';
import SectionDivider from '@/components/General/SectionDivider';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';

export default function Home() {
  return (
    <MotionConfig
      transition={{
        ...framerMotionConfig
      }}
    >
      <SectionDivider id='home_section' />
      <Hero />
      <SectionDivider id='about_section' />
      <About />
      <SectionDivider id='skills_section' />
      <Skills />
      <SectionDivider id='projects_section' />
      <Projects />
    </MotionConfig>
  );
}
