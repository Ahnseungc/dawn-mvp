import { Canvas, Camera, useFrame, useLoader } from "@react-three/fiber";
import { React, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

const AvbartMesh = () => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const gltf = useLoader(GLTFLoader, "/assets/3D/basic3.gltf");

  //회전
  // useFrame((state, delta, frame) => {
  //   const mesh = gltf.scene.children[0];
  //   // mesh.rotation.x = state.clock.getElapsedTime();
  // });

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={10}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        onClick={(e) => {}}
      />
    </>
  );
};

export default AvbartMesh;
