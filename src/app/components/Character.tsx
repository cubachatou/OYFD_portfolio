"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParagraphProps {
  value: string;
  offset: any;
  prefix?: string;
  className?: string;
}

export default function Paragraph({
  value,
  offset,
  prefix,
  className,
}: ParagraphProps) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: offset,
  });

  const words = value.split(" ");
  return (
    <p ref={element} className={`flex flex-wrap ${className}`}>
      {prefix && <b>{prefix}</b>}
      {words.map((word: string, i: number) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: any;
  range: number[];
  progress: MotionValue<number>;
  className?: string;
}

const Word = ({ children, range, progress, className }: WordProps) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={`mr-[0.35em] ${className}`}>
      {characters.map((char: string, i: number) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

interface CharacterProps {
  children: any;
  range: number[];
  progress: MotionValue<number>;
  className?: string;
}

const Character = ({
  children,
  range,
  progress,
  className,
}: CharacterProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={`relative ${className}`}>
      <span className="absolute opacity-10 select-none">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
