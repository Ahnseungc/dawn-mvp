import React, { Suspense } from "react";
import Avbart_main_css from "../../css/Avbart_main.css";
import { Canvas } from "@react-three/fiber";
import AvbartMesh from "./Avbart_Mesh";

const Avbart_main = () => {
  return (
    <div className="avbart_main">
      <div>버튼</div>
      <Canvas>
        <ambientLight />
        <directionalLight />
        <Suspense fallback={null}>
          <AvbartMesh position={[0, 0, -10]} />
        </Suspense>
      </Canvas>
    </div>
  );

  // return <div className="avbart_main">avbart</div>;
};

export default Avbart_main;
