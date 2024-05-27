'use client';
import { MotionConfig } from 'framer-motion';

import { framerMotionConfig } from '@/lib/utils';
import Skills from '@/components/Skills/Skills';
import SectionDivider from '@/components/General/SectionDivider';

export default function Home() {
  return (
    <MotionConfig
      transition={{
        ...framerMotionConfig,
      }}
    >
      {/* <Hero /> */}
      {/* <About /> */}
      <SectionDivider className='mt-5' />
      <Skills />
      {/* <SectionDivider className='' /> */}
      {/* <Skills /> */}
    </MotionConfig>
  );
}
