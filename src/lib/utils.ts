import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const framerMotionConfig = {
  type: 'spring',
  mass: 5,
  stiffness: 500,
  damping: 50,
  restDelta: 0.0001
};

export const mouseSpring = {
  stiffness: 150,
  damping: 15,
  mass: 0.1
};

// let's make a function that receive the specific element_id as string and scroll into that element_id
export const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: 'smooth'
  });
};