import { Metadata } from "next";
import MatrixRain from "./components/MatrixRain";

export const metadata: Metadata = {
  title: "Demo: Matrix Rain",
  description:
    "Experience the iconic Matrix rain effect recreated with HTML canvas. This interactive demo features cascading green symbols, smoothly animated at 24 FPS, adapting seamlessly to any screen size for an immersive, full-screen visual reminiscent of the Matrix movie.",
};

export default function MatrixRainPage() {
  return (
    <main className="fixed inset-0 w-screen h-screen bg-black">
      <MatrixRain />
    </main>
  );
}
