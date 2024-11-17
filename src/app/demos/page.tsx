'use client'

import { getDemos } from "@/app/lib/data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CurveSVG from "../components/CurveSVG";

type Demo = {
  date: string;
  tags: string[];
  title: string;
  description: string;
  path: string;
  img: StaticImageData;
};

const tags = ['Recent', '3D', 'Mouse', 'Scroll'];

export default function DemosPage() {
  const [demos, setDemos] = useState<Demo[]>([]);
  const [activeTag, setActiveTag] = useState<string>('Recent');

  useEffect(() => {
    setDemos(getDemos());
  }, []);

  function handleCLick(e: React.MouseEvent<HTMLButtonElement>) {
    const tag = e.currentTarget.innerText;
    setActiveTag(tag);

    if (e.currentTarget.innerText === 'Recent') return setDemos(getDemos());
    setDemos(getDemos(tag));
  }

  return (
    <main className="bg-neutral-100">
      <div className="container py-24 flex gap-16 items-start">
        <aside className="shrink-0 basis-[240px] hidden"></aside>

        <section className="grow flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="max-w-[1008px] text-[50px]/tight font-medium [&_span]:font-bold [&_span]:text-[72px]/none [&_span]:font-dancing"><span>Step into</span> my demo world! I'm <span>Oleksii</span>, and here I capture my latest <span>escapades</span>.</h1>

            <ul className="flex flex-wrap gap-2 text-[17]/none uppercase">
              {tags.map((tag) => (
                <li key={tag} className={`${tag === activeTag ? 'bg-purple-dark text-white border-transparent hover:bg-purple-dark' : 'text-neutral-500 border-neutral-500'} border rounded-2xl hover:bg-neon-green hover:text-white hover:border-transparent transition-colors`}>
                  <button className="py-1.5 px-3" type="button" onClick={handleCLick}>{tag}</button>
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid grid-cols-3 gap-x-8 gap-y-16">
            {demos.map((demo) => (
              <li key={demo.title}>
                <figure className="flex flex-col gap-4">
                  <Link href={demo.path} className="group">
                    <Image src={demo.img} alt={demo.title} width={460} height={250} className="relative w-full h-auto aspect-[16/10] object-cover rounded-2xl" />
                  </Link>

                  <span className="flex items-center justify-between">
                    <time className="text-sm/tight font-medium text-neutral-500">{demo.date}</time>

                    <ul className="flex gap-2">
                      {demo.tags.map((tag) => (
                        <li key={tag} className="py-1 px-2 rounded-2xl bg-neutral-200 text-sm/tight">{tag}</li>
                      ))}
                    </ul>
                  </span>

                  <figcaption className="flex flex-col gap-2">
                    <h3 className="text-xl/tight font-bold">
                      <Link href={demo.path} className="hover:text-purple-dark transition-colors">{demo.title}</Link>
                    </h3>
                    <p className="text-sm/tight text-neutral-500">{demo.description}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </div>
      
      <CurveSVG />
    </main>
  );
}