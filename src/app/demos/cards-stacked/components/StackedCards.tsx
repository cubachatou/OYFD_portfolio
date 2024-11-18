"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1713190197596-a1c2f4ae413c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713188702314-3adb3d686a50?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709463623350-99f5e60587c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1712505206553-315cf8fc1aeb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1711893148232-2a21bef621b3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1711969150860-bea78385b0a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1615283655987-94f431e9bf77?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function StackedCards() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    const liElements = container.current.querySelectorAll("li");

    liElements.forEach((element: HTMLElement, index: number) => {
      if (!container.current) return;
      const isLast = index === liElements.length - 1;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
            start: "center center",
            end: container.current.offsetHeight * 2,
            scrub: true,
          },
        })
        .to(
          element,
          {
            ease: "none",
            startAt: { filter: "blur(0px)" },
            filter: isLast ? "blur(0px)" : "blur(3px)",
            scrollTrigger: {
              trigger: element,
              start: "center center",
              end: "+=100%",
              scrub: true,
            },
          },
          0,
        )
        .to(
          element,
          {
            ease: "none",
            scale: 0.4,
            yPercent: -50,
          },
          0,
        );
    });
  });

  return (
    <main className="bg-amber-300">
      <div className="h-[15vh]"></div>

      <div ref={container} className="container">
        <ul className="flex flex-col items-center">
          {images.map((image, index) => (
            <li
              key={index}
              className="sticky top-[15vh] h-[70vh] flex items-center justify-center mb-[15vh] will-change-[transform,_scale,_filter]"
            >
              <Image
                src={image}
                alt=""
                width={400}
                height={600}
                className="w-full h-full rounded-lg"
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
