import { Metadata } from "next";
import StackedCards from "./components/StackedCards";

export const metadata: Metadata = {
  title: "Demo: Stacked Cards",
  description:
    "Explore a dynamic stacked card layout with smooth scroll-based animations powered by GSAP and ScrollTrigger. As you scroll, images blur, scale, and move vertically, creating an engaging visual experience. Using Next.js's Image component for optimal performance, each image appears sticky, enhancing the captivating transition effects throughout the scroll journey.",
};

export default function StackedCardsPage() {
  return (
    <main className="bg-amber-300">
      <div className="h-[15vh]"></div>

      <StackedCards />
    </main>
  );
}
