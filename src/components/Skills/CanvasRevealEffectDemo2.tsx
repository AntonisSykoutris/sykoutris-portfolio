'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function CanvasRevealEffectDemo2() {
  return (
    <>
      <div className='mx-auto flex w-full flex-col items-center justify-center gap-4 px-8 py-20 lg:flex-row'>
        <Card
          title='Frontend Developer'
          icon={
            <DotLottieReact
              src='/skills/frontend.lottie'
              loop
              autoplay
              speed={0.5}
            />
            // <SiReactbootstrap color='default' />
          }
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName='bg-emerald-900'
          />
        </Card>
        <Card
          title='Backend Developer'
          icon={
            <DotLottieReact
              src='/skills/backend.lottie'
              loop
              autoplay
              speed={0.5}
            />
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-black'
            colors={[
              [236, 72, 153],
              [232, 121, 249]
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className='absolute inset-0 bg-black/90 [mask-image:radial-gradient(50px_at_center,white,transparent)]' />
        </Card>
        <Card
          title='UI/UX Designer'
          icon={
            <DotLottieReact
              src='/skills/designer.lottie'
              loop
              autoplay
              speed={0.5}
            />
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-sky-600'
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='group/canvas-card relative mx-auto flex h-fit w-full max-w-sm items-center justify-center border-2 border-white/[0.2] p-4'
    >
      <Icon className='absolute -left-3 -top-3 h-6 w-6 text-white' />
      <Icon className='absolute -bottom-3 -left-3 h-6 w-6 text-white' />
      <Icon className='absolute -right-3 -top-3 h-6 w-6 text-white' />
      <Icon className='absolute -bottom-3 -right-3 h-6 w-6 text-white' />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='absolute inset-0 h-full w-full'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative z-20'>
        <div className='mx-auto flex w-full items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4'>
          {icon}
        </div>
        <h2 className='relative z-10 mt-4 text-xl font-bold text-white opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100'>
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};
