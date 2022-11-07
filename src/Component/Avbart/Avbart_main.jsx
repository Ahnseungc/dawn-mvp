import React, { Suspense } from "react";
import Avbart_main_css from "../../css/Avbart_main.css";
import { Canvas } from "@react-three/fiber";
import AvbartMesh from "./Avbart_Mesh";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Avbart_plus from "./Avbart_plue/Avbart_plus";
import { OrbitControls } from "@react-three/drei";

const Container = styled.div`
  & .plus {
    margin: 38.33px 31.67px 0 0;
  }
  & .help {
    margin: 33.33px 23.33px 0 0;
  }
  & .avbart_main_header {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

const Avbart_main = ({ item }) => {
  console.log("활성화된 아이템", item);
  useEffect(() => {
    if (item !== null) {
      // threejs로 메쉬를 토글 형태로 바꾸는 작업을 해줘야함
      //
    }
    // 그게 아니라 이미 입고 있을 때
  }, [item]);
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <Container>
      <div className="avbart_main">
        <div className="avbart_main_header">
          <div className="plus">
            <img
              src="/assets/Icon/plus_icon.png"
              alt="/"
              onClick={handleClick}
            />

            <Avbart_plus isOpen={isOpen} />
          </div>
          <div className="help">
            <img src="/assets/Icon/help_icon.png" alt="/" />
          </div>
        </div>

        <Canvas>
          <ambientLight />
          <directionalLight />
          <Suspense fallback={null}>
            <AvbartMesh position={[0, 0, -10]} />
          </Suspense>
          <OrbitControls target={[0, -1, 0]} enableDamping={true} />
        </Canvas>
      </div>
    </Container>
  );

  // return <div className="avbart_main">avbart</div>;
};

export default Avbart_main;
