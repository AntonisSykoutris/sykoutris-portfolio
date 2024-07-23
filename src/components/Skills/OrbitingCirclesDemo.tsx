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
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg'>
      <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black'>
        Circles
      </span>

      {/* Inner Circles */}
      {innerCircleLogos.map((logo, index) => {
        const IconComponent = iconMapping[logo];
        return (
          <OrbitingCircles
            key={index}
            className='z-30 size-[30px] border-none bg-transparent'
            duration={20}
            delay={12 * index}
            radius={80}
          >
            <IconComponent color='default' className='relative z-30' />
          </OrbitingCircles>
        );
      })}

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className='size-[50px] border-none bg-transparent'
        radius={190}
        duration={20}
        reverse
      >
        <TbBrandFramerMotion />
      </OrbitingCircles>

      <OrbitingCircles
        className='size-[50px] border-none bg-transparent'
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <TbBrandFramerMotion />
      </OrbitingCircles>

      <OrbitingCircles
        className='size-[50px] border-none bg-transparent'
        radius={250}
        duration={20}
        delay={20}
        reverse
      >
        <TbBrandFramerMotion />
      </OrbitingCircles>
    </div>
  );
}
