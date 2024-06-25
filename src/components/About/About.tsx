'use client';

import React from 'react';
import Section from '../General/Section';
import ImageToParticles from '../General/ImageToParticles';
import { PHOTO_BASE64, gridItems } from '@/lib/data';
import { TbAlarmSnoozeFilled } from 'react-icons/tb';

import { cn } from '@/lib/utils';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

export default function Skills() {
  return (
    <Section
      id='about_section'
      leftTopCross
      rightTopCross
      customPaddings='p-0 lg:py-1 lg:py-0'
      className='relative z-10 bg-dot-black/[0.2] h-full'
    >
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
  );
}
