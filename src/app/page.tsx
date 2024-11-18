"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import me1 from "/public/images/about/me-1.jpeg";
gsap.registerPlugin(ScrollTrigger);

import { portfolioData } from "@/app/data/portfolio";
import ProjectsTable from "./components/about/ProjectsTable";
import CurveSVG from "./components/CurveSVG";
import SmoothScrolling from "./components/SmoothScrolling";

export default function AboutPage() {
  const main = useRef(null);
  const section = useRef(null);
  const position = useRef(null);

  useGSAP(() => {
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
        scrub: true,
        pin: true,
      },
      // opacity: 0.1,
      scale: 0.3,
      marginTop: "0rem",
      height: "4vw",
      color: "#CADB4E",
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
                  <span className="xl:text-[86px] lg:text-[72px] sm:text-[58px] text-5xl leading-none font-bold text-white font-dancing">
                    Oleksii Yakuba
                  </span>

                  <span
                    ref={position}
                    className="mt-2 mb-8 xl:text-[72px] lg:text-[58px] sm:text-[44px] text-4xl leading-tight font-medium text-neutral-900"
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

          <ProjectsTable projects={portfolioData} />
        </div>

        <CurveSVG />
      </main>
    </SmoothScrolling>
  );
}
