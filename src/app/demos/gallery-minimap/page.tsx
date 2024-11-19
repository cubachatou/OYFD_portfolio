import SmoothScrolling from "@/app/components/SmoothScrolling";
import { Metadata } from "next";
import GalleryMinimap from "./components/GalleryMinimap";

export const metadata: Metadata = {
  title: "Demo: Gallery Minimap",
  description:
    "Discover an interactive gallery experience featuring a minimap for seamless navigation. Built with Next.js, GSAP, and Lenis for smooth scrolling, this component showcases vertically arranged images. The minimap stays pinned during scrolling and updates its preview based on the current image in view. Clickable minimap thumbnails allow direct navigation, while GSAP’s ScrollToPlugin and ScrollTrigger create a fluid, engaging scroll experience for large image galleries.",
};

export default function GalleryMinimapPage() {
  return (
    <SmoothScrolling>
      <main className="bg-black">
        <GalleryMinimap />
      </main>
    </SmoothScrolling>
  );
}
