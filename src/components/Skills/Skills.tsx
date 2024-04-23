'use client';

import React from 'react';
import Section from '../General/Section';
import ParticleComp from '../Particle';

export default function Skills() {
  return (
    <Section
      leftTopCross
      rightTopCross
      className='relative z-10 bg-dot-black/[0.2] '
    >
      <div className='pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <h1 className='z-50 text-4xl'>aaaaaaaaaaa</h1>
      <ParticleComp />
    </Section>
  );
}
