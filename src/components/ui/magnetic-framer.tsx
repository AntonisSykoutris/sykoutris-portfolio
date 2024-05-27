import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

export default function MagneticFramer({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null); // Specify the type of the ref
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;
    const rect = ref.current?.getBoundingClientRect(); // Optional chaining
    if (rect) {
      const { height, width, left, top } = rect;
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
