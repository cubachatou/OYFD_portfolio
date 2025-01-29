import { unstable_noStore as noStore } from "next/cache";
import { StaticImageData } from "next/image";
import image_3dWaveOnScroll from "/public/images/demos/3d-wave-on-scroll.webp";
import image_cardsStacked from "/public/images/demos/cards-stacked.jpg";
import image_galleryMinimap from "/public/images/demos/gallery-minimap.jpg";
import image_glowySpotlight from "/public/images/demos/glowy-spotlight.jpg";
import image_matrixRain from "/public/images/demos/matrix-rain.jpg";
import eduhub_1 from "/public/images/folio/works/eduhub/eduhub_1.png";
import eduhub_2 from "/public/images/folio/works/eduhub/eduhub_2.png";
import eduhub_3 from "/public/images/folio/works/eduhub/eduhub_3.png";
import LignvaPL_1 from "/public/images/folio/works/LingvaPL/LingvaPL_1.png";
import LignvaPL_2 from "/public/images/folio/works/LingvaPL/LingvaPL_2.png";
import LignvaPL_3 from "/public/images/folio/works/LingvaPL/LingvaPL_3.png";
import OLX_B2B_1 from "/public/images/folio/works/OLX-B2B/OLX_B2B_1.png";
import OLX_B2B_2 from "/public/images/folio/works/OLX-B2B/OLX_B2B_2.png";
import OLX_B2B_3 from "/public/images/folio/works/OLX-B2B/OLX_B2B_3.png";
import OLX_KZ_1 from "/public/images/folio/works/OLX-KZ/OLX_KZ_1.jpg";
import OLX_KZ_2 from "/public/images/folio/works/OLX-KZ/OLX_KZ_2.jpg";
import OLX_KZ_3 from "/public/images/folio/works/OLX-KZ/OLX_KZ_3.png";
import PrintspaceImage_1 from "/public/images/folio/works/PRINTSPACE/printspace_1.png";
import PrintspaceImage_2 from "/public/images/folio/works/PRINTSPACE/printspace_2.png";
import PrintspaceImage_5 from "/public/images/folio/works/PRINTSPACE/printspace_3.png";
import ZelenaImage_1 from "/public/images/folio/works/ZELENA/zelena_1.png";
import ZelenaImage_2 from "/public/images/folio/works/ZELENA/zelena_2.png";
import ZelenaImage_3 from "/public/images/folio/works/ZELENA/zelena_3.png";

export interface Demo {
  date: string;
  tags: string[];
  title: string;
  description: string;
  path: string;
  img: StaticImageData;
}

export const demos = [
  {
    date: "September 30, 2024",
    tags: ["3D", "Scroll"],
    title: "3D Wave on Scroll",
    description:
      "This component creates an interactive 3D wave animation that responds to scrolling. Using Framer Motion's `useScroll` hook, the scroll position is tracked and passed to a dynamically imported 3D scene. The effect is visually engaging, with the wave animation updating based on the user's scroll progress, and the scene staying sticky within the viewport for an immersive experience.",
    path: "/demos/3d-wave-on-scroll",
    img: image_3dWaveOnScroll,
  },
  {
    date: "June 23, 2024",
    tags: ["2D", "Canvas"],
    title: "Matrix Rain",
    description:
      "This component creates a Matrix rain effect using an HTML canvas and the Effect class. It renders falling symbols, similar to the iconic visual from the Matrix movie, where the symbols move down the screen in a flowing pattern. The effect runs at a set frame rate (24 FPS) and adapts to the browser window size. The symbols continuously update as the canvas is cleared and redrawn. Resize events are handled to ensure the canvas adjusts dynamically with the viewport, creating an immersive, full-screen animation.",
    path: "/demos/matrix-rain",
    img: image_matrixRain,
  },
  {
    date: "March 8, 2024",
    tags: ["GSAP", "Scroll"],
    title: "Stacked Cards",
    description:
      "This component creates a dynamic stacked card layout with scroll-based animations using GSAP and ScrollTrigger. As the user scrolls, images blur, scale down, and move vertically, creating a smooth and interactive scroll experience. The images are loaded using Next.js's `Image` component, ensuring optimal performance. Each image appears sticky in the viewport as it transitions, creating a visually captivating scrolling effect where elements change progressively based on the scroll position.",
    path: "/demos/cards-stacked",
    img: image_cardsStacked,
  },
  {
    date: "February 14, 2024",
    tags: ["Mouse"],
    title: "Glowy Spotlight Effect",
    description:
      "This component creates a glowy spotlight effect that follows the user's cursor across a grid of cards. It dynamically tracks the pointer position using a `pointermove` event listener and injects the x and y coordinates into CSS custom properties (`--x` and `--y`). These variables can be used in the CSS to create a glowing effect around the cursor. The layout consists of a 3x3 grid of cards, centrally aligned, on a dark background, with each card reacting to the cursor's position, giving a glowing spotlight visual.",
    path: "/demos/glowy-spotlight",
    img: image_glowySpotlight,
  },
  {
    date: "January 5, 2024",
    tags: ["GSAP", "Scroll"],
    title: "Gallery Minimap",
    description:
      "This component creates a gallery with a minimap using Next.js, GSAP, and Lenis for smooth scrolling. It displays vertically arranged images with a minimap for navigation. The minimap stays pinned while scrolling, and updates its preview position based on the current image in view. Clicking on a minimap image scrolls the gallery to that image. GSAP’s `ScrollToPlugin` handles smooth scrolling, while `ScrollTrigger` tracks the scrolling progress, creating an interactive experience for large image galleries.",
    path: "/demos/gallery-minimap",
    img: image_galleryMinimap,
  },
];

export function getDemos(request?: string) {
  noStore();

  if (!request) return demos;

  const data = demos.filter((demo) => demo.tags.includes(request));
  console.log(data);

  return data;
}

export interface FolioWork {
  project: string;
  category: string;
  client: string;
  year: string;
  description: string;
  link?: string;
  features: string[];
  images: StaticImageData[];
}

export const FolioWork: FolioWork[] = [
  {
    project: "LingvaPL",
    category: "Development",
    client: "Lingva",
    year: "2023-2024",
    description:
      "As part of Mavericks Agency, I developed the Lingva Polska platform, offering over 10,000 exercises for learning Polish through gamified dialogues voiced by native speakers. The project, backed by Deloitte Poland Foundation, supports Ukrainian refugees with an intuitive, user-friendly experience.",
    link: "https://lingvapl.org",
    features: ["GSAP", "Vue.js", "Laravel", "LottieFiles"],
    images: [LignvaPL_1, LignvaPL_2, LignvaPL_3],
  },
  {
    project: "Kyiv Educational Hub",
    category: "Development | Maintenance",
    client: "Kyiv Educational Hub",
    year: "2022-2024",
    description:
      "As part of Mavericks Agency, I helped develop Kyiv Educational Hub, a platform offering online courses to build professional ratings. With a gamified interface and simple design, the platform now supports over 3.7 million users in Kyiv, helping HR professionals find qualified employees.",
    link: "https://eduhub.in.ua/",
    features: ["Vue.js", "PHP"],
    images: [eduhub_1, eduhub_2, eduhub_3],
  },
  {
    project: "OLX KZ electronics promo",
    category: "Development | Maintenance",
    client: "OLX Kazakhstan",
    year: "2022-2024",
    description:
      "As part of Mavericks Agency, I developed a promotional service for OLX.kz’s August 2021 campaign, where users earned chances to win prizes by placing ads. Integrated with the OLX API, the system ran smoothly throughout the promotion, meeting the client’s needs.",
    features: ["JavaScript", "GSAP", "WordPress"],
    images: [OLX_KZ_1, OLX_KZ_2, OLX_KZ_3],
  },
  {
    project: "OLX B2B",
    category: "Development | Maintenance",
    client: "OLX B2B",
    year: "2022-2024",
    description:
      "As part of Mavericks Agency, I contributed to the development of a multi-page landing site for OLX B2B, consolidating all user segments. The project included a service cost calculator, multilingual support, and dynamic animations, ensuring a secure and user-friendly platform for OLX’s business clients.",
    link: "https://ua.olx-business.com/",
    features: ["JavaScript", "Vue.js", "WordPress"],
    images: [OLX_B2B_1, OLX_B2B_2, OLX_B2B_3],
  },
  {
    project: "Zelena",
    category: "Development | Maintenance",
    client: "ZELENA",
    year: "2021-2024",
    description:
      "As part of Mavericks Agency, I helped develop Zelena’s ecommerce platform with a premium, minimalist design, integrating it with their sales system. The project reinforced Zelena’s position as a leader in luxury gifts and exclusive bouquets in Ukraine.",
    link: "https://zelena.ua",
    features: [
      "GSAP",
      "JavaScript",
      "Vue.js",
      "Three.js",
      "WebGL",
      "SVG Animation",
      "Laravel",
    ],
    images: [ZelenaImage_1, ZelenaImage_2, ZelenaImage_3],
  },
  {
    project: "Theprintspace",
    category: "Development | Maintenance",
    client: "Theprintspace",
    year: "2021-2024",
    description:
      "As part of Mavericks Agency, I contributed to ThePrintSpace website using WordPress, integrating Google Sheets API for price list management and Intercom API for CRM lead tracking. The site, launched in 2019, became a primary lead-generation tool for the client.",
    link: "https://www.theprintspace.co.uk",
    features: ["GSAP", "JavaScript", "WordPress", "MySQL"],
    images: [PrintspaceImage_1, PrintspaceImage_2, PrintspaceImage_5],
  },
];
