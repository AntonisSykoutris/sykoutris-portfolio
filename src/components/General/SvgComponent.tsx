'use client';

import * as React from 'react';
import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' {...props}>
    <path
      fill='none'
      stroke='hsl(335, 77%, 50%)'
      strokeDasharray='0 0'
      strokeLinecap='round'
      strokeWidth={7.5644800000000005}
      d='m101.49 195.154 597.02 9.692'
    />
  </svg>
);
export default SvgComponent;
