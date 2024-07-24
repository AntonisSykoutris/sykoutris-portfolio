'use client';

import React from 'react';
import Section from '../General/Section';
import SectionTitle from '../General/SectionTitle';
import { CanvasRevealEffectDemo2 } from './CanvasRevealEffectDemo2';
import { OrbitingCirclesDemo } from './OrbitingCirclesDemo';
import FileTree from './FileTree';

type Props = {};

export default function Skills({}: Props) {
  return (
    <Section className='h-fit overflow-x-hidden'>
      <SectionTitle title='SKILLS' subtitle='Introduction' />
      <CanvasRevealEffectDemo2 />
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <FileTree />
        <OrbitingCirclesDemo />
      </div>
    </Section>
  );
}
