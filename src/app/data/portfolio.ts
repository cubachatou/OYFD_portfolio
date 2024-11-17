import { StaticImageData } from 'next/image';
import PrintspaceImage_1 from '/public/images/about/portfolio/PRINTSPACE/printspace_1.png';
import PrintspaceImage_2 from '/public/images/about/portfolio/PRINTSPACE/printspace_2.png';
import PrintspaceImage_5 from '/public/images/about/portfolio/PRINTSPACE/printspace_5.png';
import ZelenaImage_1 from '/public/images/about/portfolio/ZELENA/zelena_1.png';
import ZelenaImage_2 from '/public/images/about/portfolio/ZELENA/zelena_2.png';
import ZelenaImage_3 from '/public/images/about/portfolio/ZELENA/zelena_3.png';

export interface portfolioData {
  project: string;
  category: string;
  client: string;
  year: string;
  description: string;
  link: string;
  features: string[];
  images: StaticImageData[];
}

  // const projects = [
  //   { project: 'WMS Webshop', category: 'Development', client: 'xs Informatik GmbH', year: '2024' },
  //   { project: 'Mavericks', category: 'Development', client: 'Mavericks Agency', year: '2024' },
  //   { project: 'Kyiv Educational Hub', category: 'Maintenance', client: 'Kyiv Educational Hub', year: '2021-2024' },
  //   { project: 'OLX Kazakhstan electronics promo', category: 'Maintenance', client: 'OLX Kazakhstan', year: '2021-2024' },
  //   { project: 'OLX B2B', category: 'Maintenance', client: 'OLX B2B', year: '2021-2024' },
  //   { project: 'Zelena', category: 'Maintenance', client: 'ZELENA', year: '2021-2024' },
  //   { project: 'Theprintspace', category: 'Maintenance', client: 'Theprintspace', year: '2021-2024' },
  // ];

export const portfolioData: portfolioData[] = [
  {
    project: "Zelena",
    category: "Maintenance",
    client: "ZELENA",
    year: "2021-2024",
    description: "Mavericks Agency had to make the Internet resource taking into account all the features of the target audience. Moreover we paid attention to the simplicity and elegance of the design. Besides our team thought of every possible action of the user of the site.",
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
    images: [
      ZelenaImage_1,
      ZelenaImage_2,
      ZelenaImage_3
    ]
  },
  {
    project: "Theprintspace",
    category: "Maintenance",
    client: "Theprintspace",
    year: "2021-2024",
    description: "Mavericks was engaged in front\u2011end and back\u2011end development, using a ready\u2011made design. We also implemented the necessary functionality for more productive customer interaction with the site.",
    link: "https://www.theprintspace.co.uk",
    features: [
      "GSAP",
      "JavaScript",
      "WordPress",
      "MySQL",
    ],
    images: [
      PrintspaceImage_1,
      PrintspaceImage_2,
      PrintspaceImage_5
    ]
  },
]