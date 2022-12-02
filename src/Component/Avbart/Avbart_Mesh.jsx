import { Canvas, Camera, useFrame, useLoader } from "@react-three/fiber";
import { React, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AvbartMesh = () => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const gltf = useLoader(GLTFLoader, "/assets/3D/basic3.gltf");

  //회전
  let unitx = 250;
  let unity = 250;
  let angle = 0;

  // setInterval(function () {
  //   context.drawImage(0, 0, 500, 500);
  //   context.save();
  //   context.rotate((angle * Math.PI) / 180);
  //   angle++;
  // }, 10);

  // canvas.addEventListener("mouseover", (e) => {
  //   unitx = e.offsetX;
  //   unity = e.offsetY;
  //   console.log("unitx", unitx);
  //   console.log("unity", unity);
  // });

  // useFrame((state) =>{
  //   const t = state.clock.getElapsedTime()
  //   ref.current.rotation.x=Math.cos(t/4) /8;
  // })

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={8}
        onPointerOver={(e) => {
          console.log(unitx);
        }}
        onPointerOut={(e) => setHover(false)}
        onClick={(e) => {
          console.log(unitx);
        }}
      />
    </>
  );
};

export default AvbartMesh;
