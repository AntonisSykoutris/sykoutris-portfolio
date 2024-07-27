'use client';

import React from 'react';
import SectionTitle from '../General/SectionTitle';
import Section from '../General/Section';

type Props = {};

export default function Contact({}: Props) {
  return (
    <Section
      leftTopCross
      rightTopCross
      id='projects_section'
      className='h-fit overflow-x-hidden'
    >
      <SectionTitle title='CONTACT' subtitle='REACH ME OUT' />
    </Section>
  );
}
