import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const framerMotionConfig = {
  type: 'spring',
  mass: 5,
  stiffness: 500,
  damping: 50,
  restDelta: 0.0001
}
