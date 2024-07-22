'use client';

import { navMenuScale, navMenuSlide } from '@/lib/data';
import { scrolltoHash } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  data: any;
  isActive: any;
  setSelectedIndicator: any;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

function NavLink({ data, isActive, setIsActive, setSelectedIndicator }: Props) {
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
        className=' absolute -left-8  h-2 w-2  rounded-lg   bg-primary '
      ></motion.div>
      <div
        className='relative select-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:cursor-pointer hover:after:origin-bottom-left hover:after:scale-x-100 '
        onClick={() => {
          scrolltoHash(`${href}`);
          setIsActive(false);
        }}
      >
        {title}
      </div>
    </motion.div>
  );
}

export default NavLink;
