import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number; // Now treated as a scaling factor
  path?: boolean;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 0.1, // Default scaling factor
  path = true
}: OrbitingCirclesProps) {
  const [computedRadius, setComputedRadius] = useState(50);

  useEffect(() => {
    const updateRadius = () => {
      const newRadius =
        Math.min(window.innerWidth, window.innerHeight) * radius;
      setComputedRadius(newRadius);
    };

    updateRadius(); // Set the initial radius
    window.addEventListener('resize', updateRadius);

    return () => window.removeEventListener('resize', updateRadius);
  }, [radius]);

  return (
    <>
      {path && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          className='pointer-events-none absolute inset-0 z-10 size-full'
        >
          <circle
            className='stroke-white/60 stroke-1'
            cx='50%'
            cy='50%'
            r={computedRadius}
            fill='none'
          />
        </svg>
      )}

      <div
        style={
          {
            '--duration': duration,
            '--radius': computedRadius,
            '--delay': -delay
          } as React.CSSProperties
        }
        className={cn(
          'absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10',
          { '[animation-direction:reverse]': reverse },
          className
        )}
      >
        {children}
      </div>
    </>
  );
}
