'use client';

import { navMenuScale, navMenuSlide } from '@/lib/data';
import { scrolltoHash } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
  data: any;
  isActive: any;
  setSelectedIndicator: any;
};

function NavLink({ data, isActive, setSelectedIndicator }: Props) {
  const { title, href, index } = data;

  return (
    <motion.div
      className='align-center relative flex'
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={navMenuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <motion.div
        variants={navMenuScale}
        animate={isActive ? 'open' : 'closed'}
        className=' absolute -left-8  h-2 w-2  rounded-lg  bg-white'
      ></motion.div>
      <div
        className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 '
        onClick={() => {
          scrolltoHash(`${href}`);
        }}
      >
        {title}
      </div>
    </motion.div>
  );
}

export default NavLink;
