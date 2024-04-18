'use client';

import React, { ReactNode } from 'react';

type Props = {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children: ReactNode;
};

export default function TestSection({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children
}: Props) {
  return (
    <div
      id={id}
      className={`
  relative  
  ${
    customPaddings ||
    `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ''}`
  } 
  ${className || ''}`}
    >
      {children}
    </div>
  );
}
