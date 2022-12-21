import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { React, useState, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Camera } from "three";
import { useEffect } from "react";

const AvbartMesh = () => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // const mountRef = useRef(null);

  // useEffect(()=>{
  //   const style =props;
  //   const aspect = style.width / style.height;
  // })

  //회전
  // let degree = 90;
  // let isMouseOver = false;

  // camera.position.set(0, 0, 6);
  // const refCurrent = mountRef.current;

  // refCurrent.addEventListener('mouseover', () =>{
  //     isMouseOver = true;
  // });
  // refCurrent.addEventListener('mouseleave', () =>{
  //   isMouseOver = false;
  // });
  // const distance = camera.position.distanceTo(cube.position);
  // const camera = new THREE.PerspectiveCamera(70, aspect, 1, 1000);

  // const animate = () =>{
  //   requestAnimationFrame(animate);
  // }

  // const rotate =() =>{
  //   if( degree<135){
  //     degree+=2;
  //     const radian = degree * (Math.PI / 180);
  //     camera.position.x = Math.cos(radian) * distance;
  //     camera.position.z = Math.sin(radian) * distance;
  //   }
  // }

  const gltf = useLoader(GLTFLoader, "/assets/3D/basic3.gltf");

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
