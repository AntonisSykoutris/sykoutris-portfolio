import OrbitingCircles from '@/components/magicui/orbiting-circles';
import { frontEndLogos, frontendIconMapping } from '@/lib/data';
import { TbBrandFramerMotion } from 'react-icons/tb';

export function OrbitingCirclesDemo() {
  return (
    <div className='relative flex h-[40svh] w-full flex-col items-center justify-center overflow-hidden rounded-lg sm:h-[70svh]'>
      {/* <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-base font-semibold leading-none text-transparent dark:from-white dark:to-black md:text-8xl'>
        Circles
      </span> */}

      {/* Inner Circles */}
      {frontEndLogos.map((logo, index) => {
        const IconComponent = frontendIconMapping[logo];
        return (
          <OrbitingCircles
            key={index}
            className='z-20 border-none bg-transparent'
            duration={20}
            delay={12 * index}
            radius={0.1} // Adjusted to scaling factor
          >
            <IconComponent color='default' />
          </OrbitingCircles>
        );
      })}

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className='border-none bg-transparent'
        radius={0.25} // Adjusted to scaling factor
        duration={20}
        reverse
      >
        <TbBrandFramerMotion />
      </OrbitingCircles>

      <OrbitingCircles
        className='border-none bg-transparent'
        radius={0.25} // Adjusted to scaling factor
        duration={20}
        delay={20}
        reverse
      >
        <TbBrandFramerMotion />
      </OrbitingCircles>

      <OrbitingCircles
        className='border-none bg-transparent'
        radius={0.3} // Adjusted to scaling factor
        duration={20}
        delay={20}
        reverse
      >
        <TbBrandFramerMotion />
      </OrbitingCircles>
    </div>
  );
}
