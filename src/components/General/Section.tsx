'use client';
import { cn } from '@/lib/utils';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  customPaddings?: string;
  leftTopCross?: boolean;
  rightTopCross?: boolean;
};

function Section({ children, id, className, customPaddings, leftTopCross = false, rightTopCross = false }: Props) {
  return (
    <LazyMotion features={domAnimation} strict>
         <m.section
      className={cn(
        `
      mx-auto flex h-screen w-full flex-col items-start
     justify-center border border-b-0 border-t-0 border-[#e6e6e6]
      `,
        className
      )}
      id={id}
    >
      <m.div className={cn('relative h-full w-full px-8 py-10 lg:py-14 ', customPaddings)}>{children}</m.div>

      {leftTopCross ? (
        <div className='absolute left-[-1px] top-[-1px] h-3.5 w-3.5 rotate-0 border-l border-t border-[#e6e6e6]'></div>
      ) : (
        <></>
      )}

      {rightTopCross ? (
        <div className='absolute right-[-1px] top-[-1px] h-3.5 w-3.5 rotate-90 border-l  border-t border-[#e6e6e6]'></div>
      ) : (
        <></>
      )}

      <div className='absolute bottom-[-1px] left-[-1px] h-3.5 w-3.5 -rotate-90 border-l border-t border-[#e6e6e6]'></div>
      <div className='absolute bottom-[-1px] right-[-1px] h-3.5 w-3.5 rotate-180 border-l border-t border-[#e6e6e6]'></div>
    </m.section>
    </LazyMotion>
 
  );
}

export default Section;
