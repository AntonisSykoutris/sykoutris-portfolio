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
    <Section leftTopCross rightTopCross className='relative h-fit'>
      <SectionTitle title='SKILLS' subtitle='WHAT I OFFER' />
      <CanvasRevealEffectDemo2 />
      <div className='grid grid-cols-1 3xl:grid-cols-2'>
        <FileTree />
        <OrbitingCirclesDemo />
      </div>
    </Section>
  );
}
