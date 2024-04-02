'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction, useState } from 'react';
import NavLink from './NavLink';
import { navItems, navMenuSlide } from '@/lib/data';
import Curve from './Curve';

type Props = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export default function NavMenu({ setIsActive }: Props) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={navMenuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className='menu fixed right-0 top-0 z-30 flex h-screen w-full bg-gray-800 text-white md:w-fit'
    >
      <div className=' flex h-full flex-col justify-between'>
        <div
          onMouseLeave={() => setSelectedIndicator(pathname)}
          className='mt-20 flex h-screen flex-col justify-between gap-6 p-28 text-4xl sm:text-5xl'
        >
          {navItems.map((data, index) => (
            <NavLink
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
              setIsActive={setIsActive}
            />
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
