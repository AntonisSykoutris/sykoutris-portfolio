import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className?: string;
  id?: string;
};

export default function SectionDivider({ className, id }: Props) {
  return (
    <div id={id} className={cn('section-divider w-fit', className)}>
      <div className='divider-line'></div>
    </div>
  );
}
