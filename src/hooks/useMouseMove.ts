import { mouseSpring } from '@/lib/utils';
import { MotionValue, useSpring } from 'framer-motion';
import { useEffect, MutableRefObject } from 'react';

type MousePosition = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export default function useMousePosition(
  containerRef: MutableRefObject<null>,
  elementRef?: MutableRefObject<null> // Make elementRef optional
): MousePosition {
  const mousePosition: MousePosition = {
    x: useSpring(0, mouseSpring),
    y: useSpring(0, mouseSpring)
  };

  const { x, y } = mousePosition;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;

      const container = containerRef.current as HTMLElement;
      let element: HTMLElement | null = null;

      if (elementRef && elementRef.current) {
        element = elementRef.current as HTMLElement;
      }

      const { left, top } = container.getBoundingClientRect();
      const width = element ? element.getBoundingClientRect().width : 0;
      const height = element ? element.getBoundingClientRect().height : 0;

      x.set(clientX - left - width / 2);
      y.set(clientY - top - height / 2);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [containerRef, elementRef, x, y]);

  return mousePosition;
}
