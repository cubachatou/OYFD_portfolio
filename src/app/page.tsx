"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import me1 from "/public/images/about/me-1.jpeg";
gsap.registerPlugin(ScrollTrigger);

import CurveSVG from "./components/CurveSVG";
import ProjectsTable from "./components/ProjectsTable";
import SmoothScrolling from "./components/SmoothScrolling";
import { FolioWork } from "./lib/data";

export default function AboutPage() {
  const main = useRef(null);
  const section = useRef(null);
  const position = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: section.current,
      start: "center center",
      end: "+=50%",
      scrub: true,
      pin: true,
    });

    gsap.to(main.current, {
      scrollTrigger: {
        trigger: section.current,
        start: "center center",
        end: "+=50%",
        scrub: true,
      },
      backgroundColor: "#171717",
    });

    gsap.to(position.current, {
      scrollTrigger: {
        trigger: section.current,
        start: "center center",
        end: "+=50%",
        toggleActions: "play none play reverse",
      },
      height: 0,
      scale: 0,
      opacity: 0,
      duration: 0.7,
      marginTop: 0,
      ease: "power1.inOut",
    });
  });

  return (
    <SmoothScrolling>
      <main ref={main} className="bg-neon-green">
        <div className="pt-[10vh] xl:pb-96 lg:pb-80 pb-64">
          <section
            ref={section}
            className="relative lg:h-screen h-[75vh] flex items-center justify-center"
          >
            <figure className="flex flex-col items-center">
              <figcaption className="z-[1]">
                <h1 className="flex flex-col text-center">
                  <span className="min-[1660px]:text-8xl xl:text-7xl lg:text-6xl sm:text-5xl text-4xl leading-none font-bold text-white font-dancing">
                    Oleksii Yakuba
                  </span>

                  <span
                    ref={position}
                    className="mt-2 lg:mb-8 mb-4 min-[1660px]:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl text-3xl leading-tight font-medium text-neutral-900"
                  >
                    Frontend Developer
                    <br />
                    Based in Munich
                  </span>
                </h1>
              </figcaption>

              <Image
                className="lg:w-[20vw] sm:w-[30vw] w-[50vw] object-cover object-[0_50%] aspect-[9/12]"
                src={me1}
                alt="Oleksii Yakuba"
                sizes="100vw"
              />
            </figure>
          </section>

          <ProjectsTable projects={FolioWork} />
        </div>

        <CurveSVG />
      </main>
    </SmoothScrolling>
  );
}
