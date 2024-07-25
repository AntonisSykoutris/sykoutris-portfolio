'use client';

import React from 'react';
import Section from '../General/Section';
import SectionTitle from '../General/SectionTitle';

type Props = {};

export default function Projects({}: Props) {
  return (
    <Section
      leftTopCross
      rightTopCross
      id='projects_section'
      className='h-fit overflow-x-hidden'
    >
      <SectionTitle title='PROJECTS' subtitle='WHAT I HAVE DONE SO FAR' />
    </Section>
  );
}
