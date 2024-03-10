import { MOTION_SLIDE_DEFAULT_DELAY } from './data';

export function slideInFromLeft(delay = MOTION_SLIDE_DEFAULT_DELAY) {
  return {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromTop(delay = MOTION_SLIDE_DEFAULT_DELAY) {
  return {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay = MOTION_SLIDE_DEFAULT_DELAY) {
  return {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromBottom(delay = MOTION_SLIDE_DEFAULT_DELAY) {
  return {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}
