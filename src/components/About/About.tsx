'use client';

import useMouseMove from '@/hooks/useMouseMove';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import HeartSvg from '../General/HeartSvg';

type Props = {};

export default function About({}: Props) {
  const ref = useRef<any>(null);

  // Track scroll progress, lies between 0 and 1.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center 60%']
  });

  // when scroll progress reached 1, path length becomes 0.
  const pathLengthValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      className='mx-auto flex w-full max-w-4xl flex-row items-start justify-center space-x-10 '
      ref={ref}
    >
      <HeartSvg pathLengthValue={pathLengthValue} />
    </div>
  );
}
