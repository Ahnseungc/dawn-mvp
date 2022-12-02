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
  @media screen and (max-width: 390px) {
    & .prevBtn img {
      width: 4.5px;
      height: 9px;
    }
    & .prevBtn {
      margin-left: 8.75px;
    }
    & .nextBtn img {
      width: 4.5px;
      height: 9px;
    }
    & .nextBtn {
      margin-right: 8.75px;
    }
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
  const [currentAvatarItem, setCurrentAvatarItem] = useState(null);
  // const slideList = [
  //   {
  //     id: 1,
  //     src: "/assets/clothes/ex1.png",
  //     text: "언더비",
  //     detail: "흰색 레터링...",
  //   },
  //   {
  //     id: 2,
  //     src: "/assets/clothes/ex2.png",
  //     text: "LIPHOP",
  //     detail: "힙한 검정옷",
  //   },
  //   {
  //     id: 3,
  //     src: "assets/clothes/ex3.png",
  //     text: "위드윤",
  //     detail: "땡땡이 패턴",
  //   },
  //   {
  //     id: 4,
  //     src: "assets/clothes/ex4.png",
  //     text: "스파오",
  //     detail: "래터링 반팔티",
  //   },
  //   {
  //     id: 5,
  //     src: "assets/clothes/ex5.png",
  //     text: "앤더슨벨",
  //     detail: "깔끔한 반팔티",
  //   },
  //   {
  //     id: 6,
  //     src: "assets/clothes/ex6.png",
  //     text: "드로우핏",
  //     detail: "무지 반팔티",
  //   },
  //   {
  //     id: 7,
  //     src: "/assets/clothes/ex1.png",
  //     text: "언더비",
  //     detail: "흰색 레터링...",
  //   },
  //   {
  //     id: 8,
  //     src: "/assets/clothes/ex1.png",
  //     text: "언더비",
  //     detail: "흰색 레터링...",
  //   },
  // ];

  const onChangeAvatar2D = (obj) => {
    setCurrentAvatarItem(obj);
  };

  return (
    <Container>
      <Avbart_main item={currentAvatarItem} />
      <Menu_nav />
      <div className="mainSlide">
        <button className="prevBtn">
          <img src="/assets/Icon/left_arrow_Icon.png" onClick={toNext}></img>
        </button>
        <ul>
          <Slide slide={slidePx} onClickItem={onChangeAvatar2D} />
        </ul>
        <button className="nextBtn" onClick={onChangeAvatar2D}>
          <img src="/assets/Icon/right_arrow_Icon.png" onClick={toPrev}></img>
        </button>
      </div>
      <CooperationCo />
    </Container>
  );
};

export default MainMenu;
