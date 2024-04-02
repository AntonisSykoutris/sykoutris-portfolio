'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { navMenuSlide } from '@/lib/data';
import Curve from './Curve';

const navItems = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Work',
    href: '/work'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
];

export default function NavMenu() {
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
      <div className='body flex h-full flex-col justify-between'>
        <div
          onMouseLeave={() => setSelectedIndicator(pathname)}
          className='mt-20 flex h-screen flex-col justify-between gap-3 p-28 text-5xl'
        >
          <div className='header mb-8 border-b border-gray-600 text-xs uppercase text-gray-600'>
            Navigation
          </div>
          {navItems.map((data, index) => (
            <NavLink
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        {/* <Footer /> */}
      </div>
      <Curve />
    </motion.div>
  );
}
