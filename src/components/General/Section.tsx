'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { LuPlus } from 'react-icons/lu';

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  leftTopCross?: boolean;
  rightTopCross?: boolean;
};

function Section({
  children,
  id,
  className,
  leftTopCross = false,
  rightTopCross = false
}: Props) {
  const SectionVariants = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.6
      }
    }
  };

  return (
    <motion.section
      className={cn(
        `
      mx-auto flex h-screen w-full flex-col items-start
     justify-center border border-b-0 border-t-0 border-[#e6e6e6]
      `,
        className
      )}
      variants={SectionVariants}
      initial={'initial'}
      whileInView={'animate'}
      id={id}
    >
      <motion.div className='relative h-full w-full px-8 py-10 opacity-50 lg:py-14 '>
        {leftTopCross ? (
          <div className='absolute left-[-1px] top-[-1px] h-3.5 w-3.5 rotate-0 border-l border-t border-black'></div>
        ) : (
          <></>
        )}

        {rightTopCross ? (
          <div className='absolute right-[-1px] top-[-1px] h-3.5 w-3.5 rotate-90 border-l  border-t border-black'></div>
        ) : (
          <></>
        )}

        <div className='absolute bottom-[-1px] left-[-1px] h-3.5 w-3.5 -rotate-90 border-l border-t border-black'></div>
        <div className='absolute bottom-[-1px] right-[-1px] h-3.5 w-3.5 rotate-180 border-l border-t border-black'></div>
        {children}
      </motion.div>
    </motion.section>
  );
}

export default Section;
