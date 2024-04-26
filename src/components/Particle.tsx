import { PHOTO_BASE64 } from '@/lib/data';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';

type ImgPosition = 'left' | 'middle' | 'right';

type ClassNames = {
  canvasClassName?: string;
  imgClassName?: string;
};

type Props = {
  img_64: string;
  pixelGap?: number;
  pixelSize?: number;
  pixelFriction?: number;
  pixelEase?: number;
  mouseCircleRadius?: number;
  classNames?: ClassNames;
  imgPositionX?: ImgPosition;
  imgPositionY?: ImgPosition;
};

interface Particle {
  x: number;
  y: number;
  size: number;
  originX: number;
  originY: number;
  color: string;
  vx: number;
  vy: number;
  dx: number;
  dy: number;
  distance: number;
  force: number;
  angle: number;
  friction: number;
  ease: number;
  mouse: {
    radius: number;
    x: number;
    y: number;
  };
  mousePosition: () => void;
  update: () => void;
}

export default function ParticleComp({
  img_64,
  pixelGap = 4,
  classNames,
  imgPositionX = 'middle',
  imgPositionY = 'middle',
  pixelSize = 4,
  pixelFriction = 0.98,
  pixelEase = 0.8,
  mouseCircleRadius = 1000
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number | null>(null); // Ref to store animation frame ID

  const calculatePositionValue = (position: ImgPosition): number => {
    switch (position) {
      case 'left':
        return 0;
      case 'middle':
        return 0.5;
      case 'right':
        return 1;
      default:
        return 0.5; // Default to 0 if position is not provided or invalid
    }
  };

  const posX = calculatePositionValue(imgPositionX);
  const posY = calculatePositionValue(imgPositionY);

  useEffect(() => {
    if (!canvasRef?.current || !imgRef?.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { willReadFrequently: true });
    const particles: Particle[] = [];
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;

    const image1 = imgRef.current;

    const addParticle = (particle: Particle) => {
      particle.update = () => {
        particle.dx = particle.mouse.x - particle.x;
        particle.dy = particle.mouse.y - particle.y;
        particle.distance =
          particle.dx * particle.dx + particle.dy * particle.dy;
        particle.force = -particle.mouse.radius / particle.distance;

        if (particle.distance < particle.mouse.radius) {
          particle.angle = Math.atan2(particle.dy, particle.dx);
          particle.vx += particle.force * Math.cos(particle.angle);
          particle.vy += particle.force * Math.sin(particle.angle);
        }

        particle.x +=
          (particle.vx *= particle.friction) +
          (particle.originX - particle.x) * particle.ease;

        particle.y +=
          (particle.vy *= particle.friction) +
          (particle.originY - particle.y) * particle.ease;
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
        canvas.width * posX - img.width * posX,
        canvas.height * posY - img.height * posY
      );
    }

    function initEffect() {
      drawImage(image1);
      const pixels = ctx?.getImageData(0, 0, canvas.width, canvas.height).data;
      if (pixels) {
        for (let y = 0; y < canvas?.height; y += pixelGap) {
          for (let x = 0; x < canvas?.width; x += pixelGap) {
            const index = (y * canvas?.width + x) * 4;
            const red = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            const alpha = pixels[index + 3];
            const color = `rgb(${red}, ${green}, ${blue})`;

            if (alpha > 0) {
              addParticle({
                x: Math.random() * canvas?.width,
                y: y,
                originX: Math.floor(x),
                originY: Math.floor(y),
                color: color,
                size: pixelSize,
                vx: 0,
                vy: 0,
                dx: 0,
                dy: 0,
                distance: 0,
                force: 0,
                angle: 0,
                friction: pixelFriction,
                ease: pixelEase,
                mouse: {
                  radius: mouseCircleRadius,
                  x: 0,
                  y: 0
                },
                mousePosition: () => {},
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

    initEffect();

    function animate() {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      drawEffect();

      updateEffect(particles);

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      particles.forEach(particle => {
        particle.mouse.x = mouseX;
        particle.mouse.y = mouseY;
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current!);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        'absolute z-50  h-full w-full  bg-blue-500 object-contain',
        classNames?.canvasClassName
      )}
    >
      <img
        ref={imgRef}
        src={PHOTO_BASE64}
        className={cn('', classNames?.imgClassName)}
      />
    </canvas>
  );
}
