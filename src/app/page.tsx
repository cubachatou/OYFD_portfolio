
import Image from "next/image";
import ProjectsTable from "./components/about/projects-table/page";
import me1 from "/public/images/about/me-1.jpeg";

export default function AboutPage() {
  const projects = [
    { project: 'WMS Webshop', category: 'Development', client: 'xs Informatik GmbH', year: '2024' },
    { project: 'Mavericks', category: 'Development', client: 'Mavericks Agency', year: '2024' },
    { project: 'Kyiv Educational Hub', category: 'Maintenance', client: 'Kyiv Educational Hub', year: '2021-2024' },
    { project: 'OLX Kazakhstan electronics promo', category: 'Maintenance', client: 'OLX Kazakhstan', year: '2021-2024' },
    { project: 'OLX B2B', category: 'Maintenance', client: 'OLX B2B', year: '2021-2024' },
    { project: 'Zelena', category: 'Maintenance', client: 'ZELENA', year: '2021-2024' },
    { project: 'Theprintspace', category: 'Maintenance', client: 'Theprintspace', year: '2021-2024' },
  ];

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

        <ProjectsTable projects={projects} />
      </div>
    </main>
  );
}