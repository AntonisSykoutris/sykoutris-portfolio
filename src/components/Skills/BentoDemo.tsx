'use client'

import { GlobeIcon, FileTextIcon, } from "@radix-ui/react-icons";
import { Share2Icon,GraduationCap } from "lucide-react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeamsDemo";
import Marquee from "@/components/magicui/marquee";
import Globe from "../magicui/globe";
import { motion } from "framer-motion";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: GraduationCap,
    name: "Who am I?",
    description: "Something to know me better.",
    href: "#",
    className: "col-span-3 lg:col-span-2",
    background: (
    <div className=" absolute w-full px-4 pt-4 mx-auto h-full font-normal">
         <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-base px-4 mt-0 md:text-xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto "
      >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ipsum quisquam ullam veritatis animi quo est aliquid sit, quos molestias, architecto excepturi necessitatibus molestiae facere quis quibusdam perspiciatis, accusamus
        <Highlight className="text-black dark:text-white">
          Important.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Activities",
    description: "Activities beyond work bring joy.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-full w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: GlobeIcon,
    name: "Globe",
    description: "I'm very flexible with time zone communications",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    background: (
      <>
        <h1 className="leading-relaxed  text-center pt-5 font-bold text-4xl">NO BORDERS</h1>
       <Globe className="lg:top-28 absolute max-sm:top-3/4 left-1/2 transform -translate-x-1/2 max-sm:-translate-y-1/2  h-fit" />
      </>
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
