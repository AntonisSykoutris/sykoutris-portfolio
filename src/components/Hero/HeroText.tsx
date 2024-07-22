'use client'

import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
  const name = "Antonis Sykoutris";

  return (
    <div
      className="noselect flex mt-10 text-primary-foreground container h-fit absolute z-10  flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center  items-center flex-col opacity-100 text-xl sm:text-3xl md:text-4xl 2xl:text-6xl cursor-default"
          style={{ fontFamily: "Vermin Vibes, sans-serif" }}
        >
          <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Hi, I&#39;m{" "}
          </m.span>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }} className="text-primary"
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-400 bounce"
                  style={{ fontSize: "1.2em" }}
                >
                  {char}
                </span>
              );
            })} 👋
          </m.div>
        </m.h1>
        <m.span
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="cursor-pointer text-4xl sm:text-5xl underline underline-offset-4 decoration-primary-400"
          id="repulse-span"
          style={{ fontFamily: "Morganite Extra Bold, sans-serif" }}
        > 
        </m.span>
        
      </LazyMotion>
    </div>

  );
};

export default HeroText;
