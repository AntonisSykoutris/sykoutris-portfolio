'use client';

import { navItems } from '@/lib/data';
import React from 'react';
import { scrolltoHash } from '@/lib/utils';

type Props = {};

export default function FooterNav({}: Props) {
  return (
    <nav className='flex flex-wrap justify-center gap-x-4 gap-y-2 text-primary-foreground md:justify-start md:gap-6'>
      {navItems.map((data, index) => (
        <div
          key={index}
          className='relative select-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:cursor-pointer hover:after:origin-bottom-left hover:after:scale-x-100'
          onClick={() => {
            scrolltoHash(`${data.href}`);
          }}
        >
          {data.title}
        </div>
      ))}
    </nav>
  );
}
