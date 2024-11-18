import { StaticImageData } from "next/image";
import ZelenaImage_1 from "/public/images/about/portfolio/ZELENA/zelena_1.png";
import ZelenaImage_2 from "/public/images/about/portfolio/ZELENA/zelena_2.png";
import ZelenaImage_3 from "/public/images/about/portfolio/ZELENA/zelena_3.png";
import PrintspaceImage_1 from "/public/images/about/portfolio/PRINTSPACE/printspace_1.png";
import PrintspaceImage_2 from "/public/images/about/portfolio/PRINTSPACE/printspace_2.png";
import PrintspaceImage_5 from "/public/images/about/portfolio/PRINTSPACE/printspace_3.png";
import OLX_B2B_1 from "/public/images/about/portfolio/OLX-B2B/OLX_B2B_1.png";
import OLX_B2B_2 from "/public/images/about/portfolio/OLX-B2B/OLX_B2B_2.png";
import OLX_B2B_3 from "/public/images/about/portfolio/OLX-B2B/OLX_B2B_3.png";
import OLX_KZ_1 from "/public/images/about/portfolio/OLX-KZ/OLX_KZ_1.jpg";
import OLX_KZ_2 from "/public/images/about/portfolio/OLX-KZ/OLX_KZ_2.jpg";
import OLX_KZ_3 from "/public/images/about/portfolio/OLX-KZ/OLX_KZ_3.png";
import eduhub_1 from "/public/images/about/portfolio/eduhub/eduhub_1.png";
import eduhub_2 from "/public/images/about/portfolio/eduhub/eduhub_2.png";
import eduhub_3 from "/public/images/about/portfolio/eduhub/eduhub_3.png";
import LignvaPL_1 from "/public/images/about/portfolio/LingvaPL/LingvaPL_1.png";
import LignvaPL_2 from "/public/images/about/portfolio/LingvaPL/LingvaPL_2.png";
import LignvaPL_3 from "/public/images/about/portfolio/LingvaPL/LingvaPL_3.png";

export interface portfolioData {
  project: string;
  category: string;
  client: string;
  year: string;
  description: string;
  link?: string;
  features: string[];
  images: StaticImageData[];
}

export const portfolioData: portfolioData[] = [
  {
    project: "LingvaPL",
    category: "Development",
    client: "Lingva",
    year: "2023-2024",
    description:
      "As part of Mavericks Agency, I developed the Lingva Polska platform, offering over 10,000 exercises for learning Polish through gamified dialogues voiced by native speakers. The project, backed by Deloitte Poland Foundation, supports Ukrainian refugees with an intuitive, user-friendly experience.",
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
