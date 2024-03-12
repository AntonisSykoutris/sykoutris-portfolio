'use client';
import React from 'react';
import { heroData } from '@/lib/data';
import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import CodeBlock from '@/components/CodeBlock/CodeBlock';
import { slideInFromRight } from '@/lib/motion';
import { motion } from 'framer-motion';

type Props = {};

export default function Typewriter({}: Props) {
  return (
    <section id='typewriter'>
      <motion.div
        variants={slideInFromRight(0.5)}
        initial='initial'
        animate='animate'
      >
        <CodeBlock
          textArray={heroData.codeBlock1}
          fileName='Hero.tsx'
          Icon={FaReact}
        />
      </motion.div>
      <motion.div
        className='pl-10'
        variants={slideInFromRight(0.8)}
        initial='initial'
        animate='animate'
      >
        <CodeBlock
          textArray={heroData.codeBlock2}
          fileName='type.ts'
          Icon={BiLogoTypescript}
        />
      </motion.div>
      <motion.div
        variants={slideInFromRight(1.1)}
        initial='initial'
        animate='animate'
      >
        <CodeBlock
          textArray={heroData.codeBlock3}
          fileName='page.tsx'
          Icon={FaReact}
        />
      </motion.div>
    </section>
  );
}
