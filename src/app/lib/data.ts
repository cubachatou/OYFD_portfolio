import { unstable_noStore as noStore } from 'next/cache';
import image_3dWaveOnScroll from "/public/images/demos/3d-wave-on-scroll.webp";
import image_cardsStacked from "/public/images/demos/cards-stacked.jpg";
import image_galleryMinimap from "/public/images/demos/gallery-minimap.jpg";
import image_glowySpotlight from "/public/images/demos/glowy-spotlight.jpg";
import image_matrixRain from "/public/images/demos/matrix-rain.jpg";

export const demos = [
  {
    date: 'April 21,2024',
    tags: ['3D', 'Scroll'],
    title: '3D Wave on Scroll',
    description: "This component creates an interactive 3D wave animation that responds to scrolling. Using Framer Motion's `useScroll` hook, the scroll position is tracked and passed to a dynamically imported 3D scene. The effect is visually engaging, with the wave animation updating based on the user's scroll progress, and the scene staying sticky within the viewport for an immersive experience.",
    path: '/demos/3d-wave-on-scroll',
    img: image_3dWaveOnScroll
  },
  {
    date: 'April 21,2024',
    tags: ['2D', 'Canvas'],
    title: 'Matrix Rain',
    description: "This component creates a Matrix rain effect using an HTML canvas and the Effect class. It renders falling symbols, similar to the iconic visual from the Matrix movie, where the symbols move down the screen in a flowing pattern. The effect runs at a set frame rate (24 FPS) and adapts to the browser window size. The symbols continuously update as the canvas is cleared and redrawn. Resize events are handled to ensure the canvas adjusts dynamically with the viewport, creating an immersive, full-screen animation.",
    path: '/demos/matrix-rain',
    img: image_matrixRain
  },
  {
    date: 'April 21,2024',
    tags: ['GSAP', 'Scroll'],
    title: 'Stacked Cards',
    description: "This component creates a dynamic stacked card layout with scroll-based animations using GSAP and ScrollTrigger. As the user scrolls, images blur, scale down, and move vertically, creating a smooth and interactive scroll experience. The images are loaded using Next.js's `Image` component, ensuring optimal performance. Each image appears sticky in the viewport as it transitions, creating a visually captivating scrolling effect where elements change progressively based on the scroll position.",
    path: '/demos/cards-stacked',
    img: image_cardsStacked
  },
  {
    date: 'April 21,2024',
    tags: ['Mouse'],
    title: 'Glowy Spotlight Effect',
    description: "This component creates a glowy spotlight effect that follows the user's cursor across a grid of cards. It dynamically tracks the pointer position using a `pointermove` event listener and injects the x and y coordinates into CSS custom properties (`--x` and `--y`). These variables can be used in the CSS to create a glowing effect around the cursor. The layout consists of a 3x3 grid of cards, centrally aligned, on a dark background, with each card reacting to the cursor's position, giving a glowing spotlight visual.",
    path: '/demos/glowy-spotlight',
    img: image_glowySpotlight
  },
  {
    date: 'April 21,2024',
    tags: ['GSAP', 'Scroll'],
    title: 'Gallery Minimap',
    description: "This component creates a gallery with a minimap using Next.js, GSAP, and Lenis for smooth scrolling. It displays vertically arranged images with a minimap for navigation. The minimap stays pinned while scrolling, and updates its preview position based on the current image in view. Clicking on a minimap image scrolls the gallery to that image. GSAP’s `ScrollToPlugin` handles smooth scrolling, while `ScrollTrigger` tracks the scrolling progress, creating an interactive experience for large image galleries.",
    path: '/demos/gallery-minimap',
    img: image_galleryMinimap
  },
];

export function getDemos(request?: string) {
  noStore();
  
  if (!request) return demos;

  const data = demos.filter(demo => demo.tags.includes(request));
  console.log(data);
  
  return data;
}