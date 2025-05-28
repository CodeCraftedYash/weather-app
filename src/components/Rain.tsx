import React, { useEffect, useRef } from 'react';

interface RainCanvasProps {
  isActive: boolean;
  ContainerWidth:number;
  ContainerHeight:number;
}

const RainCanvas: React.FC<RainCanvasProps> = ({ isActive ,ContainerHeight,ContainerWidth}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const width = canvas.width = ContainerWidth;
    const height = canvas.height = ContainerHeight;

    const raindrops = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 10 + Math.random() * 20,
      speed: 2 + Math.random() * 4
    }));

    const splash = (x: number, y: number) => {
      ctx.beginPath();
      ctx.arc(x, y, 2 + Math.random() * 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,1)';
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let drop of raindrops) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        if (drop.y > height) {
          drop.y = 0;
          drop.x = Math.random() * width;
          splash(drop.x, height - 2);
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationRef.current!);
  }, [isActive,ContainerHeight,ContainerWidth]);

  return (
    <canvas
      ref={canvasRef}
      width={ContainerWidth}
      height={ContainerHeight}
      style={{
        position: 'absolute',
        top: -5, left: "50%",
        pointerEvents: 'none',
        zIndex: 50,
        transform:"translateX(-50%)"
      }}
    />
  );
};

export default RainCanvas;
