import { useMotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function useMouseMove(initialState = false) {
  const [isMobile, setIsMobile] = useState(initialState);
  const x = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number }) => {
      // Update the state based on the current width
      x.set(event.clientX);
    };

    const handleTouchMove = (event: { touches: { clientX: number }[] }) => {
      x.set(event.touches[0].clientX);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [x]);

  useEffect(() => {
    const handleResize = () => {
      // Update the state based on the current width
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on component mount
    handleResize();

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once

  return isMobile;
}

// Usage:
// const isMobile = useMobileCheck();
