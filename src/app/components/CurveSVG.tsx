"use client";

import { motion } from "framer-motion";
import { useTransitionState } from "next-transition-router";
import { useEffect, useState } from "react";

type Dimensions = {
  width: number | null;
  height: number | null;
};

const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

export default function CurveSVG() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="w-screen h-[calc(100vh+600px)] top-0 left-0 fixed z-50 pointer-events-none bg-black transition-opacity duration-0 delay-[0.1s]"
      ></div>

      {dimensions.width != null && dimensions.height != null && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}
    </>
  );
}

const SVG = ({ width, height }: { width: number; height: number }) => {
  const { stage } = useTransitionState();
  console.log(stage);

  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;
  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  const curve = (initialPath: any, targetPath: any) => {
    return {
      initial: {
        d: initialPath,
      },
      animate: {
        d: stage === "leaving" ? initialPath : targetPath,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
      },
    };
  };
  const translate = {
    initial: {
      top: "-300px",
    },
    animate: {
      top: stage == "leaving" ? "-300px" : "-100vh",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
      transitionEnd: {
        top: stage == "leaving" ? "-300px" : "100vh",
      },
    },
  };

  return (
    <motion.svg
      {...anim(translate)}
      className="w-screen h-[calc(100vh+600px)] -top-[300px] left-0 fixed z-50 fill-black"
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
