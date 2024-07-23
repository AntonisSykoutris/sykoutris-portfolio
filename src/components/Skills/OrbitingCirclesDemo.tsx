import OrbitingCircles from '@/components/magicui/orbiting-circles';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { SiJavascript, SiHtml5, SiCss3 } from '@icons-pack/react-simple-icons';

type IconKey = 'SiJavascript' | 'SiHtml5' | 'SiCss3';

// Mapping of icon names to components
const iconMapping = {
  SiJavascript: SiJavascript,
  SiHtml5: SiHtml5,
  SiCss3: SiCss3
};

export function OrbitingCirclesDemo() {
  const innerCircleLogos: IconKey[] = ['SiJavascript', 'SiHtml5', 'SiCss3'];

  return (
    <div className='relative flex h-[40svh] w-full flex-col items-center justify-center overflow-hidden rounded-lg sm:h-[70svh]'>
      {/* <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-base font-semibold leading-none text-transparent dark:from-white dark:to-black md:text-8xl'>
        Circles
      </span> */}

      {/* Inner Circles */}
      {innerCircleLogos.map((logo, index) => {
        const IconComponent = iconMapping[logo];
        return (
          <OrbitingCircles
            key={index}
            className='z-30 border-none bg-transparent'
            duration={20}
            delay={12 * index}
            radius={0.1} // Adjusted to scaling factor
          >
            <IconComponent color='default' className='relative z-30' />
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
