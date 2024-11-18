import { Metadata } from "next";
import WaveOnScroll from "./components/WaveOnScroll";

export const metadata: Metadata = {
  title: "Demo: 3D Wave on Scroll",
  description:
    "Discover a mesmerizing 3D wave animation that reacts dynamically to your scroll. This demo leverages Framer Motion's useScroll hook, updating a 3D scene in real-time as you navigate. Enjoy a smooth, immersive experience with the animation staying sticky within the viewport, creating a captivating visual journey.",
};

export default function WaveOnScrollPage() {
  return (
    <main>
      <WaveOnScroll />
    </main>
  );
}
