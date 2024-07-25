'use client';

import { GlobeIcon, FileTextIcon } from '@radix-ui/react-icons';
import { Share2Icon, GraduationCap } from 'lucide-react';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';

import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { AnimatedBeamMultipleOutputDemo } from '../Skills/AnimatedBeamsDemo';
import Globe from '../magicui/globe';
import { motion } from 'framer-motion';
import Image from 'next/image';

const gridItems = [
  {
    name: '',
    description: '',
    href: '#',
    className: 'col-span-3 xl:col-span-1',
    background: (
      <Image
        className='transition-all duration-300 ease-out hover:scale-105'
        src={'/test.png'}
        alt={'derr'}
        objectFit='contain'
        fill
      />
    )
  },
  {
    Icon: GraduationCap,
    name: 'Who am I?',
    description: 'Something to know me better.',
    href: '#',
    className: 'col-span-3 xl:col-span-2',
    background: (
      <div className='absolute mx-auto h-full w-full px-4 pt-4 font-normal'>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0]
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className='mx-auto mt-0 max-w-4xl text-base font-bold leading-relaxed text-neutral-700 dark:text-white md:px-4 md:text-xl lg:leading-snug 2xl:text-2xl'
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ipsum
            quisquam ullam veritatis animi quo est aliquid sit, quos molestias,
            architecto excepturi necessitatibus molestiae facere quis quibusdam
            perspiciatis, accusamus
            <Highlight className='text-black dark:text-white'>
              Important.
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>
    )
  },
  {
    Icon: Share2Icon,
    name: 'Activities',
    description: 'Activities beyond work bring joy.',
    href: '#',
    className: 'col-span-3 xl:col-span-2',
    background: (
      <AnimatedBeamMultipleOutputDemo className='absolute right-2 top-4 h-full w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105' />
    )
  },
  {
    Icon: GlobeIcon,
    name: 'Globe',
    description: "I'm very flexible with time zone communications",
    className: 'col-span-3 xl:col-span-1',
    href: '#',
    background: (
      <>
        <span className='pointer-events-none relative z-50 flex justify-center whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text pt-5 text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 md:text-8xl'>
          Globe
        </span>
        <Globe className='absolute left-1/2 h-fit -translate-x-1/2 transform max-sm:top-3/4 max-sm:-translate-y-1/2 lg:top-28' />
      </>
    )
  }
];

export function BentoGrids() {
  return (
    <BentoGrid>
      {gridItems.map((item, idx) => (
        <BentoCard key={idx} {...item} />
      ))}
    </BentoGrid>
  );
}
