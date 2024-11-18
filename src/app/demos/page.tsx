import { Metadata } from "next";
import CurveSVG from "../components/CurveSVG";
import SmoothScrolling from "../components/SmoothScrolling";
import DemosSection from "./_components/DemosSection";

export const metadata: Metadata = {
  title: "Oleksii Yakuba's Demo World",
  description:
    "Explore a collection of creative demos and experiments showcasing my passion for frontend development. From intricate animations to interactive UI elements, these projects highlight various coding techniques using GSAP, Framer Motion, WebGL, and more. Dive in to see innovative implementations and unique recreations of web animations and visual effects.",
};

export default function DemosPage() {
  return (
    <SmoothScrolling>
      <main className="bg-neutral-100">
        <div className="container md:py-24 py-16 flex gap-16 items-start">
          <aside className="shrink-0 basis-[240px] hidden"></aside>

          <DemosSection />
        </div>

        <CurveSVG />
      </main>
    </SmoothScrolling>
  );
}
