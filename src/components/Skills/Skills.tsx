'use client';

import React from 'react';
import Section from '../General/Section';
import PlusSvg from '../General/PlusSvg';
import { LuPlus } from 'react-icons/lu';
import { motion } from 'framer-motion';

type Props = {};

export default function Skills({}: Props) {
  return (
    <Section showTopLeftIcon className=''>
      {/* <motion.div className='relative h-full w-full border border-dashed border-black  p-8 opacity-50'>
        <LuPlus
          className={` pointer-events-none absolute  inset-0 z-2 hidden h-5 w-5  -translate-x-1/2 -translate-y-1/2 lg:block`}
        />

        <LuPlus
          className={` pointer-events-none absolute bottom-0 left-0 z-2 hidden h-5 w-5  -translate-x-1/2 translate-y-1/2 lg:block`}
        />

        <LuPlus
          className={` pointer-events-none absolute right-0 top-0 z-2 hidden h-5 w-5  -translate-y-1/2 translate-x-1/2 lg:block`}
        />

        <LuPlus
          className={` pointer-events-none absolute bottom-0 right-0 z-2 hidden h-5 w-5  translate-x-1/2 translate-y-1/2      lg:block`}
        />
      </motion.div> */}
      <h1>SKILSSSSSSSSSSS</h1>
      <div className='border-gray-1000 absolute left-[-1px] top-[-1px] z-10 h-3.5 w-3.5 rotate-0 border-l border-t'></div>
      <div className='border-gray-1000 absolute right-[-1px] top-[-1px] z-10 h-3.5 w-3.5 rotate-90 border-l border-t'></div>
      <div className='border-gray-1000 absolute bottom-[-1px] left-[-1px] z-10 h-3.5 w-3.5 -rotate-90 border-l border-t'></div>
      <div className='border-gray-1000 absolute bottom-[-1px] right-[-1px] z-10 h-3.5 w-3.5 rotate-180 border-l border-t'></div>
    </Section>
  );
}
