import { Metadata } from "next";
import Paragraph from "../components/Character";
import CurveSVG from "../components/CurveSVG";
import SmoothScrolling from "../components/SmoothScrolling";

export const metadata: Metadata = {
  title: "About | Oleksii Yakuba",
  description:
    "Oleksii Yakuba, a software engineer with a focus on front-end development.",
};

export default function ResumePage() {
  return (
    <SmoothScrolling>
      <main className="bg-neon-green">
        <div className="container flex justify-center">
          <div className="mt-[3em] mb-[40dvh] flex flex-col gap-[2em] xl:text-7xl/normal lg:text-6xl/tight sm:text-5xl/tight text-2xl/tight">
            <a
              download
              href="./Oleksii Yakuba - CV.pdf"
              className="inline-flex mx-auto mb-[1em] px-[0.5em] py-[0.25em] rounded-full bg-black shadow-lg text-white lg:text-5xl/none sm:text-4xl/none text-2xl/none hover:text-black hover:bg-white transition-colors duration-300"
            >
              Download CV
            </a>

            <Paragraph
              offset={["start 0.7", "end 0.7"]}
              value="My passion for web development stems from childhood, when I spent hours at the computer and building with Lego, sparking a love for creating and solving problems. This drive led me to a career in frontend development, where I thrive on visually constructing websites with code blocks and crafting creative, high-performance solutions."
            />

            <Paragraph
              offset={["start 0.7", "end 0.7"]}
              value="I began my journey with YouTube tutorials and gained practical experience through a free internship in my hometown. Over time, I transitioned to a paid position and later moved to Kyiv to advance my career. Currently, I’ve relocated to Bavaria, Germany, due to the conflict in Ukraine, but my commitment to innovation and growth remains steadfast"
            />

            <Paragraph
              offset={["start 0.7", "end 0.7"]}
              value="Since 2020, I’ve worked with a wide range of tools and technologies to deliver visually stunning, user-friendly websites."
            />

            <div className="flex flex-col sm:gap-8 gap-4">
              <Paragraph
                offset={["start 0.7", "end 0.7"]}
                value="My expertise includes:"
                className="underline"
              />

              <ul className="flex flex-col sm:gap-8 gap-4 lg:text-5xl/tight sm:text-4xl/tight text-1xl/tight">
                <li>
                  <Paragraph
                    offset={["start 0.7", "end 0.7"]}
                    value="Angular, Next.js (React), Vue.js, Astro"
                    prefix="Frameworks:&nbsp;"
                  />
                </li>
                <li>
                  <Paragraph
                    offset={["start 0.7", "end 0.7"]}
                    value="Tailwind CSS, SCSS, BEM methodology"
                    prefix="Styling:&nbsp;"
                  />
                </li>
                <li>
                  <Paragraph
                    offset={["start 0.7", "end 0.7"]}
                    value="Animation & 3D: GSAP, Framer Motion, Three.js (beginner), WebGL"
                    prefix="Animation & 3D:&nbsp;"
                  />
                </li>
                <li>
                  <Paragraph
                    offset={["start 0.7", "end 0.7"]}
                    value="JavaScript (ES6+), TypeScript"
                    prefix="Languages:&nbsp;"
                  />
                </li>
                <li>
                  <Paragraph
                    offset={["start 0.7", "end 0.7"]}
                    value="Vite, Webpack, Laravel Mix"
                    prefix="Build Tools:&nbsp;"
                  />
                </li>
                <li>
                  <Paragraph
                    offset={["start 0.7", "end 0.7"]}
                    value="NgRx, Redux, Pinia"
                    prefix="State Management:&nbsp;"
                  />
                </li>
                <li>
                  <Paragraph
                    offset={["start 0.7", "end 0.7"]}
                    value="Vercel, Wordpress, etc."
                    prefix="Hosting & Deployment:&nbsp;"
                  />
                </li>
                <li>
                  <Paragraph
                    offset={["start 0.7", "end 0.7"]}
                    value="Angular Router, Next.js SSR/SSG"
                    prefix="Routing & Rendering:&nbsp;"
                  />
                </li>
                <li>
                  <Paragraph
                    offset={["start 0.7", "end 0.7"]}
                    value="Figma, Sketch, Adobe XD"
                    prefix="Design Collaboration:&nbsp;"
                  />
                </li>
                <li>
                  <Paragraph
                    offset={["start 0.7", "end 0.7"]}
                    value="Skilled in building accessible web applications following WCAG guidelines"
                    prefix="Accessibility (a11y):&nbsp;"
                  />
                </li>
              </ul>
            </div>

            <Paragraph
              offset={["start 0.7", "end 0.7"]}
              value="I take particular pleasure in crafting websites with animations and unique, creative designs that challenge conventional norms. Beyond my technical expertise, I’m a quick learner, eager to master emerging technologies and find solutions to new challenges. Programming isn’t just my profession—it’s my passion, and I often spend my free time exploring modern web trends and experimenting with code."
            />

            <Paragraph
              offset={["start 0.7", "end 0.7"]}
              value="As a proud Ukrainian developer, I’m dedicated to delivering exceptional work, crafting innovative web experiences, and building something extraordinary together. Let’s create!"
            />
          </div>
        </div>

        <CurveSVG />
      </main>
    </SmoothScrolling>
  );
}
