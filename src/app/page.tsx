'use client';
import { MotionConfig } from 'framer-motion';

import { framerMotionConfig } from '@/lib/utils';
import Skills from '@/components/Skills/Skills';
import SectionDivider from '@/components/General/SectionDivider';
import About from '@/components/About/About';

export default function Home() {
  return (
    <MotionConfig
      transition={{
        ...framerMotionConfig,
      }}
    >
      {/* <Hero /> */}
      <SectionDivider className='mt-5' />
      <About />

      {/* <Skills /> */}
      {/* <SectionDivider className='' /> */}
      {/* <Skills /> */}
    </MotionConfig>
  );
}
