import { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";
import "the-new-css-reset/css/reset.css";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Oleksii Yakuba - Frontend Developer",
  description:
    "Experienced frontend developer from Ukraine, currently based in Germany, specializing in React, Next.js, Vue, and Angular. I have a passion for creating dynamic and interactive user experiences with animations using GSAP, Framer Motion, and more. Proficient in TypeScript, Tailwind CSS, and SCSS. In my free time, I enjoy recreating creative coding solutions and exploring innovative design patterns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dancingScript.variable} ${inter.variable}`}
    >
      <body className="font-inter">
        <Header />

        <Providers>{children}</Providers>

        <Footer />
      </body>
    </html>
  );
}
