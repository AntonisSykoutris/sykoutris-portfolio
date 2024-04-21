import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className?: string;
};

export default function SectionDivider({ className }: Props) {
  return (
    <div className={cn('section-divider ', className)}>
      <div className='divider-line  '></div>
    </div>
  );
}
