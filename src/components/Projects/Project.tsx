'use client';

import React from 'react';
import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LuExternalLink, LuGithub } from 'react-icons/lu';
import MagneticIcon from '../General/MagneticIcon';

type Props = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  liveLink
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess
      }}
      className='group mb-3 flex justify-center last:mb-0 sm:mb-8'
    >
      <section className='0 relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-white transition [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] hover:bg-gray-100 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8'>
        <div className='flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[57%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]'>
          <div className='flex items-center justify-between align-middle'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <div className='mr-2 flex justify-between gap-4'>
              {github ? (
                <MagneticIcon
                  Icon={LuGithub}
                  href={github}
                  className='text-foreground hover:text-primary'
                  label='Github'
                />
              ) : (
                <></>
              )}
              <MagneticIcon
                Icon={LuExternalLink}
                href={liveLink}
                className='text-foreground hover:text-primary'
                label='External Link'
              />
            </div>
          </div>

          <p className='mt-2 leading-relaxed text-foreground'>{description}</p>
          <ul className='mt-4 flex flex-wrap gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt='Project I worked on'
          quality={95}
          className='absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block'
        />
      </section>
    </motion.div>
  );
}
