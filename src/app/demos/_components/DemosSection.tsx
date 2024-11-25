"use client";

import { Demo, getDemos } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const tags = ["Recent", "3D", "Mouse", "Scroll"];
export default function DemosSection() {
  const [demos, setDemos] = useState<Demo[]>([]);
  const [activeTag, setActiveTag] = useState<string>("Recent");

  useEffect(() => {
    setDemos(getDemos());
  }, []);

  function handleCLick(e: React.MouseEvent<HTMLButtonElement>) {
    const tag = e.currentTarget.innerText;
    setActiveTag(tag);

    if (e.currentTarget.innerText === "Recent") return setDemos(getDemos());
    setDemos(getDemos(tag));
  }

  return (
    <section className="grow flex flex-col lg:gap-16 gap-8">
      <div className="flex flex-col gap-8">
        <h1 className="max-w-[1008px] xl:text-[50px] lg:text-4xl md:text-3xl text-2xl !leading-normal font-medium [&_span]:font-bold [&_span]:xl:text-[72px]/[50px] [&_span]:lg:text-6xl/[2.25rem] [&_span]:md:text-5xl/[1.875rem] [&_span]:text-4xl/[1.5rem] [&_span]:font-dancing">
          <span>Step into</span> my demo world!
          <br />
          <p className="text-balance">
            I'm <span>Oleksii</span>, and here I recreate various creative
            <span> escapades</span>.
          </p>
        </h1>

        <ul className="flex flex-wrap gap-2 text-[17]/none uppercase">
          {tags.map((tag) => (
            <li
              key={tag}
              className={`${
                tag === activeTag
                  ? "bg-purple-dark text-white border-transparent hover:bg-purple-dark"
                  : "text-neutral-500 border-neutral-500"
              } border rounded-2xl hover:bg-neon-green hover:text-white hover:border-transparent transition-colors`}
            >
              <button
                className="py-1.5 px-3"
                type="button"
                onClick={handleCLick}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ul className="grid xl:grid-cols-3 md:grid-cols-2 lg:gap-x-8 gap-x-4 lg:gap-y-16 md:gap-y-8 gap-y-16">
        {demos.map((demo) => (
          <li key={demo.title}>
            <figure className="flex flex-col gap-4">
              <Link href={demo.path} target="_blank" className="group">
                <Image
                  src={demo.img}
                  alt={demo.title}
                  sizes="100vw"
                  className="relative w-full h-auto aspect-[16/10] object-cover rounded-2xl"
                />
              </Link>

              <span className="flex items-center justify-between">
                <time className="text-sm/tight font-medium text-neutral-500">
                  {demo.date}
                </time>

                <ul className="flex gap-2">
                  {demo.tags.map((tag) => (
                    <li
                      key={tag}
                      className="py-1 px-2 rounded-2xl bg-neutral-200 text-sm/tight"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </span>

              <figcaption className="flex flex-col gap-2">
                <h3 className="text-xl/tight font-bold">
                  <Link
                    href={demo.path}
                    target="_blank"
                    className="hover:text-purple-dark transition-colors"
                  >
                    {demo.title}
                  </Link>
                </h3>
                <p className="text-sm/tight text-neutral-500">
                  {demo.description}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
