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
    href: 'home_section'
  },
  {
    title: 'About',
    href: 'about_section'
  },
  {
    title: 'Skills',
    href: 'skills_section'
  },
  {
    title: 'Projects',
    href: 'projects_section'
  },
  {
    title: 'Experience',
    href: 'experiance_section'
  },
  {
    title: 'Education',
    href: 'education_section'
  },
  {
    title: 'Contact',
    href: 'contact_section'
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
          className='mt-20 flex h-screen flex-col justify-between gap-10 p-28 pt-5 text-2xl sm:text-5xl'
        >
          {navItems.map((data, index) => (
            <NavLink
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
