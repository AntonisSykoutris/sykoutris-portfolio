'use client';
import MagneticFramer from '@/ui/magnetic-framer';
import React from 'react';
import { LuFacebook, LuInstagram, LuTwitter, LuLinkedin } from 'react-icons/lu';

type Props = {};

export default function FooterSocial({}: Props) {
  return (
    <>
      <MagneticFramer>
        <LuFacebook className=' h-6 w-6 cursor-pointer   text-foreground   transition duration-200 ease-in-out hover:text-primary ' />
      </MagneticFramer>
      <MagneticFramer>
        <LuInstagram className=' h-6 w-6 cursor-pointer   text-foreground    transition duration-200 ease-in-out hover:text-primary ' />
      </MagneticFramer>
      <MagneticFramer>
        <LuTwitter className=' h-6 w-6 cursor-pointer  text-foreground    transition duration-200 ease-in-out hover:text-primary ' />
      </MagneticFramer>
      <MagneticFramer>
        <LuLinkedin className=' h-6 w-6 cursor-pointer  text-foreground    transition duration-200 ease-in-out hover:text-primary ' />
      </MagneticFramer>
    </>
  );
}
