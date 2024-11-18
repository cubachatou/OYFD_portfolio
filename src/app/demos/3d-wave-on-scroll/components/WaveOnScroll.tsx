"use client";

import { useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
const Scene = dynamic(() => import("@/app/demos/3d-wave-on-scroll/lib/Scene"), {
  ssr: false,
});

export default function WaveOnScroll() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div ref={container} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen">
          <Scene scrollProgress={scrollYProgress} />
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}
