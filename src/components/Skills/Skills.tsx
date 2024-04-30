'use client';

import React from 'react';
import Section from '../General/Section';
import ImageToParticles from '../General/ImageToParticles';
import { PHOTO_BASE64 } from '@/lib/data';

export default function Skills() {
  return (
    <Section
      leftTopCross
      rightTopCross
      customPaddings='p-0 lg:py-1 lg:py-0'
      className='relative z-10 bg-dot-black/[0.2] '
    >
      <ImageToParticles img_64={PHOTO_BASE64} pixelSize={1.9} pixelGap={2} />
    </Section>
  );
}
