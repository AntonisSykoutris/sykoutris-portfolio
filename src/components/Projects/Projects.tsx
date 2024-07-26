'use client';

import React from 'react';
import Section from '../General/Section';
import SectionTitle from '../General/SectionTitle';
import { projectsData } from '@/lib/data';
import Project from './Project';

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
      <div className='grid grid-cols-1 gap-4 3xl:grid-cols-2'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
}
