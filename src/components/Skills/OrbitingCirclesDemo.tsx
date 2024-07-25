import OrbitingCircles from '@/components/magicui/orbiting-circles';
import {
  frontendLogos,
  frontendIconMapping,
  FRONTEND_INTERVAL_DELAY,
  ORBIT_DURATION,
  BACKEND_INTERVAL_DELAY,
  backendLogos,
  BackendIconMapping,
  toolsLogos,
  ToolsIconMapping,
  TOOLS_INTERVAL_DELAY
} from '@/lib/data';

export function OrbitingCirclesDemo() {
  return (
    <div className='relative flex h-[65svh] w-full flex-col items-center justify-center overflow-hidden rounded-lg sm:h-[80svh]'>
      <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-base font-semibold leading-none text-transparent dark:from-white dark:to-black md:text-8xl'>
        STACK
      </span>

      {/* Inner Circle */}
      {backendLogos.map((logo, index) => {
        const IconComponent = BackendIconMapping[logo];
        return (
          <OrbitingCircles
            key={index}
            className='border-none bg-transparent'
            radius={0.15} // Adjusted to scaling factor
            duration={ORBIT_DURATION}
            delay={BACKEND_INTERVAL_DELAY * index}
          >
            <IconComponent
              color={
                logo == 'SiMysql' || logo == 'SiDotnet' ? '#62caf3' : 'default'
              }
            />
          </OrbitingCircles>
        );
      })}

      {/* Middle Circle (reverse) */}
      {frontendLogos.map((logo, index) => {
        const IconComponent = frontendIconMapping[logo];
        return (
          <OrbitingCircles
            key={index}
            className='z-20 border-none bg-transparent'
            duration={ORBIT_DURATION}
            delay={FRONTEND_INTERVAL_DELAY * index}
            radius={0.25} // Adjusted to scaling factor
            reverse
          >
            <IconComponent
              color={
                logo == 'SiAngular'
                  ? '#c3002f'
                  : logo == 'SiNextjs'
                    ? '#b3b3b3'
                    : 'default'
              }
            />
          </OrbitingCircles>
        );
      })}

      {/* Outer Circle (reverse) */}

      {toolsLogos.map((logo, index) => {
        const IconComponent = ToolsIconMapping[logo];
        return (
          <OrbitingCircles
            key={index}
            className='z-20 border-none bg-transparent'
            duration={ORBIT_DURATION}
            delay={TOOLS_INTERVAL_DELAY * index}
            radius={0.35} // Adjusted to scaling factor
            reverse
          >
            <IconComponent
              color={logo == 'SiThreejs' ? '#b3b3b3' : 'default'}
              className='h-4 w-4'
            />
          </OrbitingCircles>
        );
      })}
    </div>
  );
}
