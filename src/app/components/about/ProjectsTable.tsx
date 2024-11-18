"use client";
import { portfolioData } from "@/app/data/portfolio";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ProjectsTable({
  projects,
}: {
  projects: portfolioData[];
}) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const container = useRef(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const projectRefs = useRef<HTMLParagraphElement[][]>([]);
  const yearRefs = useRef<HTMLParagraphElement[][]>([]);
  const overlayRefs = useRef<HTMLDivElement[][]>([]);
  const expandableRefs = useRef<HTMLDivElement[]>([]);

  const { contextSafe } = useGSAP({ scope: container });

  const handleMouseEnter = contextSafe(
    (event: React.MouseEvent, index: number) => {
      const row = rowsRef.current[index] as HTMLDivElement;
      const overlay = overlayRefs.current[index] as HTMLDivElement[];
      const project = projectRefs.current[index] as HTMLParagraphElement[];
      const year = yearRefs.current[index] as HTMLParagraphElement[];
      if (overlay) {
        const rect = row.getBoundingClientRect();
        const offsetY = event.clientY - rect.top;
        const fromTop = offsetY < rect.height / 2;
        gsap
          .timeline({ defaults: { duration: 0.7, ease: "expo" } })
          .set(overlay, { y: fromTop ? "-101%" : "101%" }, 0)
          .to(overlay, { y: "0%" }, 0)
          .to(row, { color: "black" }, 0)
          .to(project, { paddingLeft: "1rem" }, 0)
          .to(year, { paddingRight: "1rem" }, 0);
      }
    }
  );
  const handleMouseLeave = contextSafe(
    (event: React.MouseEvent, index: number) => {
      const row = rowsRef.current[index];
      const overlay = overlayRefs.current[index];
      const project = projectRefs.current[index];
      const year = yearRefs.current[index];
      if (overlay) {
        const rect = row.getBoundingClientRect();
        const offsetY = event.clientY - rect.top;
        const toTop = offsetY < rect.height / 2;
        gsap
          .timeline({ defaults: { duration: 0.7, ease: "expo" } })
          .to(overlay, { y: toTop ? "-101%" : "101%" }, 0)
          .to(row, { color: "" }, 0)
          .to(project, { paddingLeft: 0 }, 0)
          .to(year, { paddingRight: 0 }, 0);
      }
    }
  );
  const handleRowClick = contextSafe((index: number) => {
    if (expandedRow !== null && expandedRow !== index) {
      expandableRefs.current[expandedRow].style.gridTemplateRows = "0fr";
    }
    const rowWrapper = expandableRefs.current[index];
    if (rowWrapper) {
      rowWrapper.style.gridTemplateRows =
        rowWrapper.style.gridTemplateRows === "0fr" ? "1fr" : "0fr";
      setExpandedRow(
        rowWrapper.style.gridTemplateRows === "1fr" ? index : null
      );
    }
  });

  return (
    <section ref={container} className="px-4">
      <div className="grid lg:grid-cols-[0.45fr,auto,auto,7rem] grid-cols-[1fr,0.5fr]">
        <div className="grid lg:col-span-4 col-span-2 grid-cols-subgrid [&_p]:flex">
          <div className="grid lg:col-span-4 col-span-2 grid-cols-subgrid py-2 text-neutral-300 xl:text-xs/7 text-xs/6 uppercase border-b border-white">
            <p className="">Project</p>
            <p className="max-lg:!hidden">Category</p>
            <p className="max-lg:!hidden">Client</p>
            <p className="lg:justify-end">Year</p>
          </div>

          {projects.map((row, index) => (
            <div
              key={`project-row-${index}`}
              className="grid lg:col-span-4 col-span-2 grid-cols-subgrid [&:not(:last-child)]:border-b border-white"
            >
              <div
                ref={(el) => {
                  rowsRef.current[index] = el as HTMLDivElement;
                }}
                className="overflow-hidden relative grid lg:col-span-4 col-span-2 grid-cols-subgrid py-2 border-white xl:text-lg text-base text-white leading-normal cursor-pointer"
                onClick={() => handleRowClick(index)}
                onMouseEnter={(event) => handleMouseEnter(event, index)}
                onMouseLeave={(event) => handleMouseLeave(event, index)}
              >
                <p
                  ref={(el) => {
                    projectRefs.current[index] = [el!];
                  }}
                  className="z-1"
                >
                  {row.project}
                </p>
                <p className="z-1 max-lg:!hidden">{row.category}</p>
                <p className="z-1 max-lg:!hidden">{row.client}</p>
                <p
                  ref={(el) => {
                    yearRefs.current[index] = [el!];
                  }}
                  className="z-1 lg:justify-end"
                >
                  {row.year}
                </p>
                <div
                  ref={(el) => {
                    overlayRefs.current[index] = [el!];
                  }}
                  className="absolute w-full h-full bg-white -translate-y-[101%] top-0 left-0 right-0 pointer-events-none"
                ></div>
              </div>

              <div
                ref={(el) => {
                  expandableRefs.current[index] = el as HTMLDivElement;
                }}
                style={{ gridTemplateRows: "0fr" }}
                className="lg:col-span-4 col-span-2 grid transition-[grid-template-rows] duration-700"
              >
                <div className="overflow-hidden text-white">
                  <div className="flex flex-col items-start xl:gap-24 md:gap-16 gap-8 min-h-fit pt-8 md:pb-16 pb-12">
                    <div className="max-w-5xl flex flex-col items-start md:gap-6 gap-4">
                      <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-medium leading-snug text-balance">
                        {row.description}
                      </p>

                      {row.link && (
                        <a
                          href={row.link}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-flex px-4 py-2 rounded-full bg-white shadow-lg text-black"
                        >
                          See website
                        </a>
                      )}

                      <ul className="flex md:flex-col max-md:flex-wrap md:gap-2 gap-6 xl:text-lg [&_li]:relative [&_li]:flex [&_li]:items-baseline [&_li]:gap-2 [&_li]:before:relative [&_li]:before:size-2 [&_li]:before:bg-white [&_li]:before:rounded-full">
                        {row.features.map((feature, index) => (
                          <li key={`feature-${index}`}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full grid xl:grid-cols-3 gap-2 max-xl:justify-center">
                      {row.images.map((image) => (
                        <div key={`folio-img-${index}`} className="shadow-lg">
                          <Image
                            src={image}
                            alt=""
                            sizes="100vw"
                            className="w-full h-auto object-cover object-top aspect-video max-xl:max-w-screen-lg max-md:max-w-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
