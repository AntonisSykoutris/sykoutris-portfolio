'use client'

import useMobileCheck from "@/hooks/useMobileCheck";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, Key } from "react";

const SectionTitle = (props: { title: any; subtitle: any; }) => {
  const { title, subtitle } = props;
 const ismobile = useMobileCheck();
  return (
    <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x:  -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-primary p-6 noselect"
      >
        <span
          className="opacity-50"
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-4xl text-nowrap sm:text-7xl  xl:text-9xl"
          style={{ fontFamily: "Morganite Black"}}
        >
          {title.split("").map((char: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => {
            if(char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;