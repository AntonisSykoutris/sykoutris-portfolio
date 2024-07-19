'use client'

import { PHOTO_BASE64 } from '@/lib/data';
import { ImgToParticles } from 'image-to-particles';
import React from 'react'
import Section from '../General/Section';
import HeroText from './HeroText';

type Props = {}

export default function Hero({}: Props) {
  return (
    <>
        <Section
   leftTopCross
   rightTopCross
   customPaddings='p-0 lg:py-1 lg:py-0'
   className='relative  z-10 items-center overflow-hidden flex  h-[100vh] sm:h-[80vh] align-middle justify-center bg-dot-black/[0.2] '>
   <ImgToParticles img_64={PHOTO_BASE64} pixelSize={1} pixelGap={4} imgPositionX='middle' imgPositionY='right' />
 </Section>
 <HeroText/>
    </>
    
  )
}