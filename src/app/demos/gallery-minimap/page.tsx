"use client";

import { useGSAP } from "@gsap/react";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const images = [
  "https://images.unsplash.com/photo-1713190197596-a1c2f4ae413c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713188702314-3adb3d686a50?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709463623350-99f5e60587c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1712505206553-315cf8fc1aeb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1711893148232-2a21bef621b3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1711969150860-bea78385b0a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1615283655987-94f431e9bf77?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713418860872-9d7fa7c1b25e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1708212826795-543f9d01edf6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function GalleryMinimap() {
  useGSAP(() => {
    const imagesContainer = document.querySelector(
      "[data-images-wrapper]"
    ) as HTMLElement;
    const images = gsap.utils.toArray("img", imagesContainer) as Element[];
    const preview = document.querySelector("[data-preview]") as HTMLElement;
    const minimap = document.querySelector("[data-minimap]") as HTMLElement;

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: images[0],
          endTrigger: images[images.length - 1],
          start: "center center",
          end: `center center`,
          scrub: true,
          // markers: true,
          pin: minimap,
        },
      })
      .to(preview, {
        yPercent: -100 + 100 / images.length,
        ease: "none",
      });
  });

  const handleClick = (index: number) => {
    const image = document.querySelector(
      `[data-images-wrapper] img:nth-child(${index + 1})`
    ) as HTMLElement;

    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: image.offsetTop,
        autoKill: false,
      },
      ease: "expo.inOut",
    });
  };

  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="relative w-full flex z-0">
          <div
            data-minimap
            className="absolute !z-5 top-[50vh] -translate-y-[calc(125px/2)] w-1/4 h-screen bg-black transition-colors duration-500"
          >
            <div
              data-preview
              className="left-1/2 w-full flex flex-col items-center"
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative w-[100px] h-[125px] p-2.5 overflow-hidden"
                >
                  <Image
                    className="cursor-pointer"
                    onClick={() => handleClick(index)}
                    src={src}
                    alt=""
                    width={100}
                    height={125}
                  />
                </div>
              ))}
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[125px] border border-white rounded mix-blend-difference"></div>
          </div>

          <div
            data-images-wrapper
            className="relative -z-[1] w-full flex flex-col items-center gap-[10vh] my-[5vh]"
          >
            {images.map((src, index) => (
              <Image
                key={index}
                className="relative h-[90vh] w-[calc(90vh/1.5)] object-cover"
                src={src}
                alt=""
                width={564}
                height={846}
              />
            ))}
          </div>
        </div>
      </main>
    </ReactLenis>
  );
}
