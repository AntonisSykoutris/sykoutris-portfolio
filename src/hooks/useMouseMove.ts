import { mouseSpring } from '@/lib/utils';
import { MotionValue, useSpring } from 'framer-motion';
import { useEffect, MutableRefObject } from 'react';

type MousePosition = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export default function useMousePosition(
  containerRef: MutableRefObject<null>,
  elementRef: MutableRefObject<null>
): MousePosition {
  const mousePosition: MousePosition = {
    x: useSpring(0, mouseSpring),
    y: useSpring(0, mouseSpring)
  };

  const { x, y } = mousePosition;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current || !elementRef.current) return;

      const { clientX, clientY } = e;

      // Assert the type of containerRef.current to HTMLElement
      const container = containerRef.current as HTMLElement;

      // Assert the type of elementRef.current to HTMLElement
      const element = elementRef.current as HTMLElement;

      if (!container || !element) return;

      const { left, top } = container.getBoundingClientRect();
      const { width, height } = element.getBoundingClientRect();

      x.set(clientX - left - width / 2);
      y.set(clientY - top - height / 2);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [containerRef, elementRef, x, y]);

  return mousePosition;
}
