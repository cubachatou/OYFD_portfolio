'use client'

import Effect from "@/app/components/blog/matrix-rain/effect";
import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvas = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvas.current) return;
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;

    const ctx = canvas.current?.getContext('2d');
    if (!ctx) return;
    
    const effect = new Effect(canvas.current.width as number, canvas.current.height as number);
    let lastTime = 0;
    const fps = 24;
    const nextFrame = 1000 / fps;
    let timer = 0;

    function animate(timeStamp: number) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;

      if (timer > nextFrame && ctx) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.textAlign = 'center';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = '#0aff0a';
        ctx.font = effect.fontSize + 'px Monospace';
        effect.symbols.forEach(symbol => symbol.draw(ctx));
        timer = 0;
      } else {
        timer += deltaTime;
      }

      requestAnimationFrame(animate);
    }

    animate(0);

    const handleResize = () => {
      if (!canvas.current) return;
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;
      effect.resize(canvas.current.width, canvas.current.height);
    };

    window.addEventListener('resize', handleResize);

    // Clean up function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });


  return (
    <main className="fixed inset-0 w-screen h-screen bg-black">
      <canvas ref={canvas} className="absolute top-0 left-0 bg-black"></canvas>
    </main>
  );
}