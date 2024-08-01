'use client';

import { PHOTO_BASE64 } from '@/lib/data';
import { ImgToParticles } from 'image-to-particles';
import React from 'react';
import Section from '../General/Section';
import HeroText from './HeroText';

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <Section
        customPaddings='p-0 lg:py-1 lg:py-0'
        className='bg-dot-black/[0.2] relative z-10 flex h-[100vh] items-center justify-center overflow-hidden align-middle 3xl:h-[75vh] 4xl:h-[70vh]'
      >
        <ImgToParticles
          img_64={PHOTO_BASE64}
          pixelSize={1}
          pixelGap={4}
          imgPositionX='middle'
          imgPositionY='right'
        />
      </Section>
      <HeroText />
    </>
  );
}
