import { Canvas, Camera, useFrame, useLoader } from "@react-three/fiber";
import { React, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AvbartMesh = () => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const gltf = useLoader(GLTFLoader, "/assets/3D/boot.gltf");

  useFrame((state, delta, frame) => {
    const mesh = gltf.scene.children[0];
    mesh.rotation.x = state.clock.getElapsedTime();
  });

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={10}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        onClick={(e) => {
          window.open("https://sketchfab.com/anthonyjamesgirdler");
        }}
      />
    </>
  );
};

export default AvbartMesh;
