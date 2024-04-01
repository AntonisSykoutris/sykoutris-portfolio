'use client';

import { navMenuScale, navMenuSlide } from '@/lib/data';
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
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}

export default NavLink;
