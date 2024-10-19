'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function ProjectsTable({ projects }: { projects: { project: string, category: string, client: string, year: string }[] }) {
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
      <div className="grid grid-cols-[0.35fr,0.35fr,0.35fr,0.10fr]">
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
                className="relative overflow-hidden grid col-span-4 grid-cols-subgrid py-2 border-neutral-900 xl:text-lg text-base leading-normal font-semibold cursor-pointer"
                onClick={() => handleRowClick(index)}
                onMouseEnter={(event) => handleMouseEnter(event, index)}
                onMouseLeave={(event) => handleMouseLeave(event, index)}
              >
                <p ref={el => { projectRefs.current[index] = [el!] }} className="z-1">{row.project}</p>
                <p className="z-1">{row.category}</p>
                <p className="z-1">{row.client}</p>
                <p ref={el => { yearRefs.current[index] = [el!] }} className="z-1 justify-end">{row.year}</p>
                <div ref={el => { overlayRefs.current[index] = [el!] }} className="absolute w-full h-full bg-neutral-900 -translate-y-full top-0 left-0 right-0 pointer-events-none"></div>
              </div>

              <div ref={el => { expandableRefs.current[index] = el as HTMLDivElement }} style={{gridTemplateRows: '0fr'}} className="grid transition-[grid-template-rows] duration-300" >
                <div className="overflow-hidden">test</div>
              </div>
           </div>
          ))}
        </div>
      </div>
    </section>
  );
};