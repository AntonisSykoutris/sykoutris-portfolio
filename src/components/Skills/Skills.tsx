'use client';

import React from 'react';
import Section from '../General/Section';

type Props = {};

export default function Skills({}: Props) {
  return (
    <Section
      leftTopCross
      rightTopCross
      className='bg-dot-black/[0.2] relative z-10 '
    >
      <div className='pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <h1 className='z-50 text-4xl'>aaaaaaaaaaa</h1>
    </Section>
  );
}
