'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FiMousePointer } from 'react-icons/fi';
import useMousePosition from '@/hooks/useMouseMove';
import { mouseSpring } from '@/lib/utils';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export default function TiltCard() {
  const ref = useRef(null);
  const { x, y } = useMousePosition(ref);
  const rotateX = useSpring(0, mouseSpring);
  const rotateY = useSpring(0, mouseSpring);

  const handleMouseMove = () => {
    if (!ref.current) return;
    const container = ref.current as HTMLElement;
    const { width, height } = container.getBoundingClientRect();

    const rY = (x.get() * ROTATION_RANGE) / width - HALF_ROTATION_RANGE;
    const rX = ((y.get() * ROTATION_RANGE) / height - HALF_ROTATION_RANGE) * -1;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY
      }}
      className=' preserve-3d relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300'
    >
      <div
        style={{
          transform: 'translateZ(75px)'
        }}
        className='preserve-3d absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg [&>*]:[transform-style:preserve-3d]'
      >
        <FiMousePointer
          style={{
            transform: 'translateZ(75px)',
            perspective: 1000
          }}
          className='mx-auto text-4xl'
        />
        <p
          style={{
            transform: 'translateZ(150px)',
            perspective: 1000
          }}
          className='text-center text-2xl font-bold text-black'
        >
          HOVER ME
        </p>
      </div>
    </motion.div>
  );
}
