import { cn } from '@/lib/utils';
import React, { SVGProps } from 'react';

type SVGComponentProps = {
  svg: React.FC<SVGProps<SVGSVGElement>>;
  className?: string;
  props?: SVGProps<SVGSVGElement>;
};

export default function SVGIcon({
  svg: SvgComponent,
  className,
  props
}: SVGComponentProps) {
  return (
    <SvgComponent
      className={cn('relative z-20 h-8 w-8', className)}
      {...props}
    />
  );
}
