import { Canvas, Camera, useFrame, useLoader } from "@react-three/fiber";
import { React, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AvbartMesh = () => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const gltf = useLoader(GLTFLoader, "/assets/3D/basic3.gltf");

  return (
    <>
      <primitive object={gltf.scene} scale={12} />
    </>
  );
};

export default AvbartMesh;
