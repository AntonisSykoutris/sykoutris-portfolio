'use client';

import React from 'react';
import Section from '../General/Section';
import SectionTitle from '../General/SectionTitle';
import { BentoDemo } from './BentoDemo';
import { CanvasRevealEffectDemo2 } from './CanvasRevealEffectDemo2';
import { OrbitingCirclesDemo } from './OrbitingCirclesDemo';

type Props = {};

export default function Skills({}: Props) {
  return (
    <Section className='h-fit overflow-x-hidden'>
      <SectionTitle title='SKILLS' subtitle='Introduction' />
      <CanvasRevealEffectDemo2 />
      <OrbitingCirclesDemo />
    </Section>
  );
}
