'use client';
import { portfolioData } from "@/app/data/portfolio";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ProjectsTable({ projects }: { projects: portfolioData[] }) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const container = useRef(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const projectRefs = useRef<HTMLParagraphElement[][]>([]);
  const yearRefs = useRef<HTMLParagraphElement[][]>([]);
  const overlayRefs = useRef<HTMLDivElement[][]>([]);
  const expandableRefs = useRef<HTMLDivElement[]>([]);

  const { contextSafe } = useGSAP({ scope: container });

  const handleMouseEnter = contextSafe((event: React.MouseEvent, index: number) => {
    const row = rowsRef.current[index] as HTMLDivElement;
    const overlay = overlayRefs.current[index] as HTMLDivElement[];
    const project = projectRefs.current[index] as HTMLParagraphElement[];
    const year = yearRefs.current[index] as HTMLParagraphElement[];
    if (overlay) {
      const rect = row.getBoundingClientRect();
      const offsetY = event.clientY - rect.top;
      const fromTop = offsetY < rect.height / 2;
      gsap.timeline({defaults: { duration: 0.7, ease: 'expo' }})
        .set(overlay, { y: fromTop ? '-101%' : '101%' }, 0)
        .to(overlay, { y: '0%' }, 0)
        .to(row, { color: 'white' }, 0)
        .to(project, { paddingLeft: '1rem' }, 0)
        .to(year, { paddingRight: '1rem' }, 0);
    }
  });
  const handleMouseLeave = contextSafe((event: React.MouseEvent, index: number) => {
    const row = rowsRef.current[index];
    const overlay = overlayRefs.current[index];
    const project = projectRefs.current[index];
    const year = yearRefs.current[index];
    if (overlay) {
      const rect = row.getBoundingClientRect();
      const offsetY = event.clientY - rect.top;
      const toTop = offsetY < rect.height / 2;
      gsap.timeline({defaults: { duration: 0.7, ease: 'expo' }})
        .to(overlay, { y: toTop ? '-101%' : '101%' }, 0)
        .to(row, { color: '' }, 0)
        .to(project, { paddingLeft: 0 }, 0)
        .to(year, { paddingRight: 0 }, 0);
    }
  });
  const handleRowClick = contextSafe((index: number) => {
    if (expandedRow !== null && expandedRow !== index) {
      expandableRefs.current[expandedRow].style.gridTemplateRows = '0fr';
    }
    const rowWrapper = expandableRefs.current[index];
    if (rowWrapper) {
      rowWrapper.style.gridTemplateRows = rowWrapper.style.gridTemplateRows === '0fr' ? '1fr' : '0fr';
      setExpandedRow(rowWrapper.style.gridTemplateRows === '1fr' ? index : null);
    }
  });

  return (
    <section ref={container} className="px-4">
      <div className="grid grid-cols-[0.45fr,auto,auto,7rem]">
        <div className="grid col-span-4 grid-cols-subgrid [&_p]:flex">
          <div className="grid col-span-4 grid-cols-subgrid py-2 text-white xl:text-sm/[27px] text-xs/6 uppercase border-b border-neutral-900">
            <p className="">Project</p>
            <p className="">Category</p>
            <p className="">Client</p>
            <p className="justify-end">Year</p>
          </div>
          
          {projects.map((row, index) => (
             <div key={`project-row-${index}`} className="grid col-span-4 grid-cols-subgrid [&:not(:last-child)]:border-b">
              <div
                ref={el => { rowsRef.current[index] = el as HTMLDivElement }}
                className="overflow-hidden relative grid col-span-4 grid-cols-subgrid py-2 border-neutral-900 xl:text-lg text-base leading-normal font-semibold cursor-pointer"
                onClick={() => handleRowClick(index)}
                onMouseEnter={(event) => handleMouseEnter(event, index)}
                onMouseLeave={(event) => handleMouseLeave(event, index)}
              >
                <p ref={el => { projectRefs.current[index] = [el!] }} className="z-1">{row.project}</p>
                <p className="z-1">{row.category}</p>
                <p className="z-1">{row.client}</p>
                <p ref={el => { yearRefs.current[index] = [el!] }} className="z-1 justify-end">{row.year}</p>
                <div ref={el => { overlayRefs.current[index] = [el!] }} className="absolute w-full h-full bg-neutral-900 -translate-y-[101%] top-0 left-0 right-0 pointer-events-none"></div>
              </div>

              <div ref={el => { expandableRefs.current[index] = el as HTMLDivElement }} style={{gridTemplateRows: '0fr'}} className="col-span-4 grid transition-[grid-template-rows] duration-700" >
                <div className="overflow-hidden">
                  <div className="flex flex-col items-start gap-24 min-h-fit pt-8 pb-16">
                  <div className="max-w-5xl flex flex-col items-start gap-6">
                    <p className="text-4xl font-medium leading-snug text-balance">{ row.description }</p>

                    {row.link && <a href={ row.link } target="_blank" rel="noopener noreferrer nofollow" className="inline-flex px-4 py-2 rounded-full bg-white shadow-lg">See website</a>}

                    <ul className="flex flex-col gap-2 text-lg [&_li]:relative [&_li]:flex [&_li]:items-baseline [&_li]:gap-2 [&_li]:before:relative [&_li]:before:size-2 [&_li]:before:bg-black [&_li]:before:rounded-full">
                      {row.features.map((feature, index) => (
                        <li key={`feature-${index}`}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full grid grid-cols-3 gap-2">
                    {row.images.map((image) => (
                      <div key={`folio-img-${index}`} className="shadow-lg">
                        <Image src={image} alt="" sizes="100vw" className="w-full h-auto object-cover object-top aspect-video" />
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
};