import { PHOTO_BASE64 } from '@/lib/data';
import React, { useEffect, useRef } from 'react';

type Props = {};

interface Particle {
  x: number;
  y: number;
  size: number;
  originX: number;
  originY: number;
  color: string;
  vx: number;
  vy: number;
  update: () => void;
}

export default function ParticleComp({}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number | null>(null); // Ref to store animation frame ID
  const PIXEL_GAP = 5;

  useEffect(() => {
    if (!canvasRef?.current || !imgRef?.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const particles: Particle[] = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const image1 = imgRef.current;

    const addParticle = (particle: Particle) => {
      particle.update = () => {
        particle.x += particle.vx;
        particle.y += particle.vy;
      };
      particles.push(particle);
    };

    function drawParticle(x: number, y: number, size: number, color: string) {
      if (!ctx) return;

      ctx.fillStyle = color;
      ctx.fillRect(x, y, size, size);
    }

    function drawImage(img: HTMLImageElement) {
      ctx?.drawImage(
        img,
        canvas.width * 0.5 - img.width * 0.5,
        canvas.height * 0.5 - img.height * 0.5
      );
    }

    function initEffect(particles: any[]) {
      drawImage(image1);
      const pixels = ctx?.getImageData(0, 0, canvas.width, canvas.height).data;
      if (pixels) {
        for (let y = 0; y < canvas?.height; y += PIXEL_GAP) {
          for (let x = 0; x < canvas?.width; x += PIXEL_GAP) {
            const index = (y * canvas?.width + x) * 4;
            const red = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            const alpha = pixels[index + 3];
            const color = `rgb(${red}, ${green}, ${blue})`;

            if (alpha > 0) {
              addParticle({
                x: x,
                y: y,
                originX: x,
                originY: y,
                color: color,
                size: 5,
                vx: 0,
                vy: 0,
                update: () => {
                  // Placeholder for the update function
                }
              });
            }
          }
        }
      }
    }

    function drawEffect() {
      particles.forEach(particle =>
        drawParticle(particle.x, particle.y, particle.size, particle.color)
      );
    }

    function updateEffect(particles: any[]) {
      particles.forEach(particle => particle.update());
    }

    initEffect(particles);

    function animate() {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      drawEffect();

      updateEffect(particles);
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='absolute z-50  h-full w-full  bg-blue-500 object-contain'
    >
      <img ref={imgRef} src={PHOTO_BASE64} />
    </canvas>
  );
}
