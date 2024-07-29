'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import MagneticFramer from '../ui/magnetic-framer';

type Props = {
  href?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

export default function MagneticIcon({ href = '#', Icon, className }: Props) {
  return (
    <MagneticFramer>
      <a href={href} target='_blank'>
        <Icon
          className={cn(
            'h-6 w-6 cursor-pointer text-primary-foreground transition duration-200 ease-in-out hover:text-primary',
            className
          )}
        />
      </a>
    </MagneticFramer>
  );
}
