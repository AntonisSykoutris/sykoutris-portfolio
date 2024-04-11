'use client';

import { MotionValue, motion, useSpring } from 'framer-motion';
import React from 'react';

type Props = {
  color?: string;
  path?: string;
  pathLengthValue: MotionValue<number>;
};

export default function HeartSvg({ pathLengthValue }: Props) {
  const LEFT_PATH =
    'M5 667.104H606.82C609.614 667.104 610.992 663.685 608.874 661.864C568.131 626.846 335.36 424.081 250 290.104C156.304 143.043 362.724 -137.553 615 92.1042';
  const RIGHT_PATH =
    'M1225 667.104H623.18C620.386 667.104 619.008 663.685 621.126 661.864C661.869 626.846 894.64 424.081 980 290.104C1073.7 143.043 867.276 -137.553 615 92.1042';

  return (
    <motion.svg
      width='100%'
      height='100%'
      viewBox='0 0 1230 673'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <SvgPart
        path={LEFT_PATH}
        pathLengthValue={pathLengthValue}
        color={'blue'}
      />
      <SvgPart
        path={RIGHT_PATH}
        pathLengthValue={pathLengthValue}
        color={'red'}
      />
    </motion.svg>
  );
}

const SvgPart = ({ path, pathLengthValue, color }: Props) => {
  return (
    <>
      <path d={path} stroke='url(#paint0_linear_207_38)' />
      <defs>
        <linearGradient
          id='paint0_linear_207_38'
          x1='0'
          y1='0'
          x2='1'
          y2='0'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#3879E7' stop-opacity='0' />
          <stop offset='1' stop-color='#3879E7' />
        </linearGradient>
      </defs>

      <motion.path
        style={{
          pathLength: useSpring(pathLengthValue, {
            stiffness: 500,
            damping: 100
          })
        }}
        transition={{ duration: 14, ease: 'easeInOut' }}
        d={path}
        stroke={color}
        strokeWidth='10'
        strokeLinecap='round'
      />
    </>
  );
};
