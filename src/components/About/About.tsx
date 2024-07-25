'use client';

import React from 'react';
import Section from '../General/Section';
import SectionTitle from '../General/SectionTitle';
import { BentoGrids } from './BentoGrids';

type Props = {};

export default function About({}: Props) {
  return (
    <Section className='h-fit overflow-x-hidden'>
      <SectionTitle title='ABOUT ME' subtitle='Introduction' />
      <BentoGrids />
    </Section>
  );
}
