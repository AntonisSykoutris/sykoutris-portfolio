'use client';

import React from 'react';
import Section from '../General/Section';
import ImageToParticles from '../General/ImageToParticles';
import { PHOTO_BASE64 } from '@/lib/data';
import { TbAlarmSnoozeFilled } from 'react-icons/tb';

import { cn } from '@/lib/utils';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

export default function Skills() {
  return (
    <Section
      leftTopCross
      rightTopCross
      customPaddings='p-0 lg:py-1 lg:py-0'
      className='relative z-10 bg-dot-black/[0.2] '
    >
      <BentoGrid className='mx-auto max-w-4xl md:auto-rows-[20rem]'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn('[&>p:text-lg]', item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </Section>
  );
}

const Skeleton = () => (
  <div className='flex h-full min-h-[6rem] w-full flex-1 rounded-xl   border border-transparent bg-neutral-100  bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]'></div>
);
const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <TbAlarmSnoozeFilled className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <TbAlarmSnoozeFilled className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <TbAlarmSnoozeFilled className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Power of Communication',
    description: 'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <TbAlarmSnoozeFilled className='h-4 w-4 text-neutral-500' />,
  },
];
