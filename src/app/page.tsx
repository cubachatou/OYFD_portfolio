
import { portfolioData } from "@/app/data/portfolio";
import Image from "next/image";
import ProjectsTable from "./components/about/projects-table/page";
import CurveSVG from "./components/CurveSVG";
import me1 from "/public/images/about/me-1.jpeg";

export default function AboutPage() {
  return (
    <main className="bg-neon-green">
      <div className="pt-32 pb-96">
        <section className="mb-40 relative h-screen flex items-center justify-center">
          <figure className="flex flex-col items-center gap-8">
            <figcaption className="z-[1] ">
              <h1 className="flex flex-col gap-2 text-center">
                <span className="text-[86px]/none font-bold text-white font-dancing">Oleksii Yakuba</span>
                <span className="text-[72px]/tight font-medium text-neutral-900">Frontend Developer<br />Based in Munich</span>
              </h1>
            </figcaption>

            <Image className="object-cover" src={me1} alt="Oleksii Yakuba" width={420} height={600} />
          </figure>
        </section>

        <ProjectsTable projects={portfolioData} />
      </div>
      
      <CurveSVG />
    </main>
  );
}