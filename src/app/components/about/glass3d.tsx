'use client';

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
});

export default function Glass3d() {
  return (
    <Scene />
  );
}