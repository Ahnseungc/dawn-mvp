import React, { useEffect, useRef, useState } from "react";
import Menu_nav from "./Menu_nav";
import styled from "styled-components";
import Avbart_main from "../Avbart/Avbart_main";
import Slide from "./Slide";
import CooperationCo from "./ CooperationCo";

const Container = styled.div`
  & .mainSlide {
    display: flex;
    width: 100%;
    max-width: 1200px;
    border-bottom: 2px solid #b0b0b0;
    border-right: 2px solid #b0b0b0;
    border-left: 2px solid #b0b0b0;
  }
  & ul {
    width: 80%;
    margin: 0 auto;
  }
  & button {
    background-color: white;
    border: none;
  }
  & .prevBtn {
    margin-left: 33.75px;
  }
  & .nextBtn {
    margin-right: 33.75px;
  }
`;

const MainMenu = () => {
  const [slidePx, setSlidePx] = useState(0);

  const toNext = () => {
    if (slidePx < 0) setSlidePx(slidePx + 300);
    console.log(slidePx);
  };
  const toPrev = () => {
    if (slidePx > -1980) setSlidePx(slidePx - 300);
    console.log(slidePx);
  };
  return (
    <Container>
      <Avbart_main />
      <Menu_nav />
      <div className="mainSlide">
        <button className="prevBtn">
          <img src="/assets/Icon/left_arrow_Icon.png" onClick={toNext}></img>
        </button>
        <ul>
          <Slide slide={slidePx} />
        </ul>
        <button className="nextBtn">
          <img src="/assets/Icon/right_arrow_Icon.png" onClick={toPrev}></img>
        </button>
      </div>
      <CooperationCo />
    </Container>
  );
};

export default MainMenu;
