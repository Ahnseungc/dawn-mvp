import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { React, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AvbartMesh = () => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const gltf = useLoader(GLTFLoader, "/assets/3D/basic3.gltf");
  useFrame((state, delta, frame) => {
    const mesh = gltf.scene;
    mesh.rotation.y += 0.01;
  });

  return (
    <>
      <primitive
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        object={gltf.scene}
        scale={12}
      />
    </>
  );
};

export default AvbartMesh;
