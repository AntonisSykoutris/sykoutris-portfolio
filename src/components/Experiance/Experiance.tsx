'use client';

import React from 'react';
import SectionTitle from '../General/SectionTitle';
import Section from '../General/Section';
import Timeline from './Timeline';

type Props = {};

export default function Experiance({}: Props) {
  return (
    <Section className='h-fit'>
      <SectionTitle
        title='EXPERIANCE'
        subtitle='PROOF OF ACHIEVEMENT AND EXPERTISE'
      />
      <Timeline />
    </Section>
  );
}
