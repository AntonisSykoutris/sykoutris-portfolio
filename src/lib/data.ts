export const MOTION_SLIDE_DEFAULT_DELAY = 0.5;

export const hamburgerVariants = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['35%', '50%', '50%']
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '35%']
    }
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg']
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg']
    }
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['35%', '50%', '50%'],
      left: '50%'
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      bottom: ['50%', '50%', '35%'],
      left: 'calc(50% + 10px)'
    }
  }
};

export const navMenuSlide = {
  initial: { x: 'calc(100% + 100px)' },
  enter: { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
};

export const navSlide = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i }
  }),
  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i }
  })
};

export const navMenuScale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } }
};

export const navItems = [
  {
    title: 'Home',
    href: 'home_section'
  },
  {
    title: 'About',
    href: 'about_section'
  },
  {
    title: 'Skills',
    href: 'skills_section'
  },
  {
    title: 'Projects',
    href: 'projects_section'
  },
  {
    title: 'Experience',
    href: 'experiance_section'
  },
  {
    title: 'Contact',
    href: 'contact_section'
  }
];

export const heroData = {
  codeBlock1: [
    `1% export% default% function% HeroSection() {%
  2%   return (%
  3%     <section% className%=%"absolute ..."%>%
  4%         <%Logo% className%=%"text-[#fff]"%/>%
  5%    </section>%
  6%  )%;%
  7% }%`
  ],
  codeBlock2: [
    `1% export% type% Antonis% =% {%
  2%   name%:% "Antonis"%;%
  3%   surname%:% "Sykoutris"%;%
  4%   age%:% "25"%;%
  5%   profession%:% "Full Stack Developer"%;%
  6%   hobbies%:% "Basketball, Gaming"%;%
  7%   loves%:% "cats"%;%
  8% }%;%`
  ],
  codeBlock3: [
    `1% export% default% function% HomePage() {%
  2%   return (%
  3%     <main% className%=% "flexCenter px-4" %>%
  4%       <%...% />% {/* All my components */}%
  5%     </main>%
  6%   )%;%
  7% }%`
  ]
};
