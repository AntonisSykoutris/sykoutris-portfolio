'use client'
import { useState } from 'react';
import { cn } from '../../utils/cn';
import { BackgroundGradientAnimation } from './GradientBg';
import animationData from '@/lib/design.json';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import MagicButton from './MagicButton';
import { IoCopyOutline } from 'react-icons/io5';


export const BentoGrid = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
    className={cn(
      "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
      className
    )}
  >
    {children}
  </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
    className={cn(
      "row-span-1 relative overflow-hidden rounded-xl border bg-background/[0.5] border-primary/[0.4] group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4",
      className
    )}
    style={{
      backgroundColor:
        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    }}
      id={`${id}`}
    >
     <div className={`${id === 6 && "flex justify-center"} h-full`}>

{id === 5 ? (
    <div className="w-full h-full absolute -bottom-10 md:bottom-4">
    <DotLottieReact
  src="/ui.lottie"
  loop
  autoplay
/> </div>
): <></>}

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5"
          )}
        >
          {id == 1 ? <>
          <div
            className={`font-sans text-base sm:text-lg lg:text-lg 2xl:text-xl max-w-full font-bold z-10 text-white`}
          >
            {title}
          </div> <div className="font-sans font-extralight tracking-wider text-left py-10 md:max-w-[90%] md:text-xs lg:text-lg text-sm text-foreground z-10">
            {description}
          </div>
          </> 
          : <>
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-base sm:text-lg lg:text-lg 2xl:text-xl max-w-full font-bold z-10 text-white`}
          >
            {title}
          </div>
          </> }
          

          {/* for the github 3d globe and the origami */}
          {id === 2 ?  <div className="w-full h-full flex left-0 -bottom-16 md:-bottom-14 absolute">
    <DotLottieReact
  src="/globe.lottie"
  loop
  autoplay
/> </div> : <></>}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="w-full h-full flex left-0 -bottom-8 absolute">
            <DotLottieReact
          src="/nature.lottie"
          loop
          speed={0.5}
          autoplay
        /> </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <Lottie options={defaultOptions} height={200} width={400} /> */}
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};