import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export default function PlayingCard({ className }: Props) {
  return (
    <div
      className={cn(
        'group inline-block h-[287px] w-[180px] cursor-pointer rounded-3xl bg-transparent  perspective-1000',
        className
      )}
    >
      <div className='relative h-full  px-[25px] py-[16px] duration-500 preserve-3d group-hover:rotate-y-180 '>
        <div className='absolute h-full w-full overflow-hidden rounded-3xl'>
          <Image
            src='/card_back.png'
            fill
            alt='image'
            className='h-full w-full'
          />
        </div>
        <div className='absolute h-full w-full space-y-5 overflow-hidden rounded-3xl bg-[#0F1823] bg-opacity-95 p-10 text-neutral-300 rotate-y-180 backface-hidden'>
          <div>
            <span className='text-xl font-bold'>AGENT | OMEN</span>
          </div>
          <div className='flex flex-col space-y-2'>
            <span className='font-semibold'>ROLE</span>
            <span className='text-xl font-bold'>CONTROLLER</span>
          </div>
          <div className='flex flex-col space-y-5'>
            <span className='font-bold'>BIOGRAPHY</span>
            <span>
              A phantom of a memory, Omen hunts in the shadows. He renders
              enemies blind, teleports across the field, then lets paranoia take
              hold as his foe scrambles to learn where he might strike next.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
