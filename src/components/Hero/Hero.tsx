'use client';

import Section from '@/components/General/Section';
import {
  useMotionValue,
  useTransform,
  motion,
  useScroll,
  useMotionTemplate
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

import TiltCard from '../General/TiltCard';
import { CardContainer, CardBody, CardItem } from '../General/3d-card';

type Props = {};

export default function Hero({}: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x = useMotionValue(0);
  const compWidth = useMotionTemplate`${scale4}%`;

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number }) => {
      x.set(event.clientX);
    };

    const handleTouchMove = (event: { touches: { clientX: number }[] }) => {
      x.set(event.touches[0].clientX);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [x]);
  return (
    <section ref={container} className=' relative h-[200vh] w-full px-0 pt-0'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden bg-blue-500 '>
        <motion.div
          id='left-side'
          className='absolute  grid  h-screen w-full place-items-center  overflow-hidden bg-[#030712] text-white'
          style={{ width: compWidth }}
        >
          <h2 className='mx-[10vw] my-0 w-[80vw] self-start  text-8xl'>
            Lets give them a modern touch
            <span className='text-[#a3e635]'> !</span>
          </h2>
          <TiltCard />
        </motion.div>
        <div
          id='right-side'
          className='absolute grid  h-screen w-full place-items-center overflow-hidden bg-[#a3e635]'
        >
          <h2 className='mx-[10vw] my-0 w-[80vw] self-start text-8xl'>
            Tired of seeing boring layouts
            <span className='text-white'> ?</span>
          </h2>

          <CardContainer className='inter-var'>
            <CardBody className='group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  '>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-neutral-600 dark:text-white'
              >
                Make things float in air
              </CardItem>
              <CardItem
                as='p'
                translateZ='60'
                className='mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300'
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem translateZ='100' className='mt-4 w-full'>
                <Image
                  src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  height='1000'
                  width='1000'
                  className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
                  alt='thumbnail'
                />
              </CardItem>
              <div className='mt-20 flex items-center justify-between'>
                <CardItem
                  translateZ={20}
                  as='button'
                  className='rounded-xl px-4 py-2 text-xs font-normal dark:text-white'
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as='button'
                  className='rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black'
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}

// const left = document.getElementById('left-side');

// const handleMove = e => {
//   left.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
// };

// document.onmousemove = e => handleMove(e);

// document.ontouchmove = e => handleMove(e.touches[0]);
