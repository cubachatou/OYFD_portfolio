'use client';

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas style={{position: "absolute", zIndex: 10, width: "20vw", height: "20vh", top: "0", left: "50%", translate: "-50% 0%", backgroundColor: "#CADB4E"}}>
      <directionalLight position={[0, 3, 2]} intensity={3} />
      <Environment preset="night" />
      <Model />
    </Canvas>
  );
}