'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { LuPlus } from 'react-icons/lu';

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  showTopLeftIcon?: boolean;
  showBottomLeftIcon?: boolean;
  showTopRightIcon?: boolean;
  showBottomRightIcon?: boolean;
};

function Section({
  children,
  id,
  className,
  showTopLeftIcon = true,
  showBottomLeftIcon = true,
  showTopRightIcon = true,
  showBottomRightIcon = true
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
      mx-auto flex h-screen w-screen
      flex-col items-start justify-center p-8
      `,
        className
      )}
      variants={SectionVariants}
      initial={'initial'}
      whileInView={'animate'}
      id={id}
    >
      <motion.div className='relative h-full w-full p-8 opacity-50 lg:border lg:border-dashed lg:border-black'>
        {showTopLeftIcon && (
          <LuPlus
            className={` pointer-events-none absolute inset-0 z-2 hidden h-5 w-5  -translate-x-1/2 -translate-y-1/2 lg:block`}
          />
        )}

        {showBottomLeftIcon && (
          <LuPlus
            className={` pointer-events-none absolute bottom-0 left-0 z-2 hidden h-5 w-5  -translate-x-1/2 translate-y-1/2 lg:block`}
          />
        )}

        {showTopRightIcon && (
          <LuPlus
            className={` pointer-events-none absolute right-0 top-0 z-2 hidden h-5 w-5  -translate-y-1/2 translate-x-1/2 lg:block`}
          />
        )}

        {showBottomRightIcon && (
          <LuPlus
            className={` pointer-events-none absolute bottom-0 right-0 z-2 hidden h-5 w-5  translate-x-1/2 translate-y-1/2 lg:block`}
          />
        )}

        {children}
      </motion.div>
    </motion.section>
  );
}

export default Section;
