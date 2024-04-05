'use client';

import React, { useEffect, useRef } from 'react';
import { LuInstagram } from 'react-icons/lu';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

export default function Footer() {
  const container = useRef(null);
  const paths = useRef<(SVGTextPathElement | null)[]>([]); // Make ref nullable
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });

  useEffect(() => {
    scrollYProgress.on('change', e => {
      paths.current.forEach((path, i) => {
        if (path) path.setAttribute('startOffset', -40 + i * 40 + e * 40 + '%');
      });
    });
  }, []);

  return (
    <div ref={container}>
      <svg className='mb-40 w-full' viewBox='0 0 250 90'>
        <path
          fill='none'
          id='curve'
          d='m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68'
        />
        <text className='text-[6px] uppercase' style={{ fill: 'red' }}>
          {[...Array(3)].map((_, i) => {
            return (
              <textPath
                key={i}
                ref={ref => (paths.current[i] = ref)}
                startOffset={i * 40 + '%'}
                href='#curve'
              >
                Curabitur mattis efficitur velit
              </textPath>
            );
          })}
        </text>
      </svg>
      <Logos scrollYProgress={scrollYProgress} />
    </div>
  );
}

const Logos = ({
  scrollYProgress
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const y = useTransform(scrollYProgress, [0, 1], [-700, 0]);
  return (
    <div className='h-[250px] overflow-hidden bg-black'>
      <motion.div
        style={{ y }}
        className='flex h-full items-center justify-center gap-10 bg-black p-10'
      >
        {[...Array(5)].map((_, i) => {
          return (
            // <img
            //   key={`img_${i}`}
            //
            //   src={`/medias/${i + 1}.jpg`}
            // />
            <LuInstagram key={`img_${i}`} className=' h-20 w-20  text-white ' />
          );
        })}
      </motion.div>
    </div>
  );
};
