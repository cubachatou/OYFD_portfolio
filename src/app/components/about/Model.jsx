import { useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";

export default function Model() {

  const mesh = useRef();
  const { nodes } = useGLTF("/3d/abstract.glb");
  const { viewport } = useThree();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z += 0.01;
  })

  // const materialProps = useControls({
  //   thickness: { value: 3, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 3, min: 0, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0, min: 0, max: 1 },
  //   backside: { value: true }
  // })

  return (
    <group scale={viewport.width / 8}>
      <mesh ref={mesh} {...nodes.VoronoiDynoBake_Material_0}>
        <MeshTransmissionMaterial
          thickness={3}
          roughness={0}
          transmission={1}
          ior={3}
          chromaticAberration={0}
          backside={true}
        />
      </mesh>
    </group>
  );
}