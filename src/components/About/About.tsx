'use client'

import React from 'react'
import Section from '../General/Section';
import SectionTitle from '../General/SectionTitle';
import { BentoGridDemo } from './BentoGridDemo';
import { gridItems } from '@/lib/data';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

type Props = {}

export default function About({}: Props) {
  return (
    <Section className='h-fit'>
         <SectionTitle title="ABOUT ME" subtitle="Introduction" />
         <BentoGrid className='w-full py-10 xl:py-20'>
        {gridItems.map(({id,title,description, className, img , imgClassName, titleClassName, spareImg}, i) => (
          <BentoGridItem
            id={id}
            key={i}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </Section>
  )
}