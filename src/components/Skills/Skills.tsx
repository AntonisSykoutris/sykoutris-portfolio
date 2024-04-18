'use client';

import React from 'react';
import Section from '../General/Section';
import PlusSvg from '../General/PlusSvg';
import { LuPlus } from 'react-icons/lu';
import { motion } from 'framer-motion';

type Props = {};

export default function Skills({}: Props) {
  return (
    <Section className=''>
      <motion.div className='testBorder relative h-full w-full  p-8 opacity-50'>
        <LuPlus
          className={` pointer-events-none absolute  inset-0 z-2 hidden h-8 w-8  -translate-x-1/2 -translate-y-1/2 lg:block`}
        />

        <LuPlus
          className={` pointer-events-none absolute bottom-0 left-0 z-2 hidden h-8 w-8  -translate-x-1/2 translate-y-1/2 lg:block`}
        />

        <LuPlus
          className={` pointer-events-none absolute right-0 top-0 z-2 hidden h-8 w-8  -translate-y-1/2 translate-x-1/2 lg:block`}
        />

        <LuPlus
          className={` pointer-events-none absolute bottom-0 right-0 z-2 hidden h-8 w-8  translate-x-1/2 translate-y-1/2      lg:block`}
        />
      </motion.div>
    </Section>
  );
}
