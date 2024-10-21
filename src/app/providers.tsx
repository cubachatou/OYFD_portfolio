'use client';

import { animate } from 'framer-motion/dom';
import { TransitionRouter } from 'next-transition-router';
import { useRef } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null!);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        animate(
          wrapperRef.current,
          { opacity: [1, 0.99] },
          { duration: 0.75, onComplete: next }
        );
      }}
      enter={(next) => {
        animate(
          wrapperRef.current,
          { opacity: [0.99, 1] },
          { duration: 0.75, onComplete: next }
        );
      }}
    >
      <div ref={wrapperRef}>{children}</div>
    </TransitionRouter>
  );
}