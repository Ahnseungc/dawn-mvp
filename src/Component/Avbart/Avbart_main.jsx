import React, { Suspense } from "react";
import Avbart_main_css from "../../css/Avbart_main.css";
import { Canvas } from "@react-three/fiber";
import AvbartMesh from "./Avbart_Mesh";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Avbart_plus from "./Avbart_plue/Avbart_plus";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Avbart_qa from "./Avbart_qa";

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
  & .avbart_main {
    width: 100%;
    height: 500px;
  }

  & .Avbart3D {
    width: 100%;
    height: 423px;
    display: flex;
    /* padding-top: 100px; */
  }
  & .Avbart3D Canvas {
    margin-top: 50px;
  }
  @media screen and (max-width: 390px) {
    & .plus {
      margin: 0;
    }
    & .plus img {
      margin: 15.21px 22.29px 0 0;
      width: 19.58px;
      height: 19.58px;
    }
    & .help {
      margin: 0;
    }
    & .help img {
      margin: 12.08px 12.08px 0 0;
      width: 25.58px;
      height: 25.58px;
    }
    & .avbart_main {
      width: 100%;
      height: 260px;
    }
    & .Avbart3D {
      width: 100%;
      height: 200px;
      display: flex;
    }
    & .Avbart3D Canvas {
      margin-top: 50px;
    }
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

  const [modalopen, setModalOpen] = useState(false);
  const [qamodalopen, setqamodalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
    console.log("popup", modalopen);
  };
  const qahandleClick = () => {
    setqamodalOpen(true);
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
            {modalopen && <Avbart_plus setModalOpen={setModalOpen} />}
          </div>
          <div className="help">
            <img
              src="/assets/Icon/help_icon.png"
              alt="/"
              onClick={qahandleClick}
            />
            {qamodalopen && <Avbart_qa setqamodalOpen={setqamodalOpen} />}
          </div>
        </div>
        <div className="Avbart3D">
          <Canvas>
            <ambientLight />
            <directionalLight />
            <PerspectiveCamera makeDefault={true} position={[0, 0, 50]} />
            <OrbitControls makeDefault={true} enableZoom={false} />
            <Suspense fallback={null}>
              <AvbartMesh position={[0, -30, -10]} />
            </Suspense>
            <OrbitControls target={[0, -1, 0]} enableDamping={true} />
          </Canvas>
        </div>
      </div>
    </Container>
  );

  // return <div className="avbart_main">avbart</div>;
};

export default Avbart_main;
