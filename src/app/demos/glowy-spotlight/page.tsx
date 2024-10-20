"use client"

import { useEffect } from "react";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface PointerEvent {
  x: number;
  y: number;
}

export default function GlowySpotlight() {

  useEffect(() => {
    const injectCursorPosition = ({ x, y }: PointerEvent) => {
      const root = document.documentElement;
      root.style.setProperty('--x', Math.round(x) + 'px');
      root.style.setProperty('--y', Math.round(y) + 'px');
    }

    document.body.addEventListener('pointermove', injectCursorPosition)

    return () => {
      document.body.removeEventListener('pointermove', injectCursorPosition)
    }
  }, [])
  
  return (
    <main className="w-screen h-screen flex items-center justify-center bg-[hsl(0_0%_6%)]">
      <div className="container">
        <ul className="grid grid-cols-3 gap-4 max-w-[50vw] mx-auto">
          {cards.map((card) => (
            <li key={card} className="glowy-spotlight-card">{card}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}