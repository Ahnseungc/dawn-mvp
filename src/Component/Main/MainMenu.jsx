import React, { useEffect, useRef, useState } from "react";
import Menu_nav from "./Menu_nav";
import Slide from "./slide";
import styled from "styled-components";
import Avbart_main from "../Avbart/Avbart_main";

const MainMenu = () => {
  const slideRef = useRef();
  const [count, setCount] = useState(1);
  const [slideList, setSlideList] = useState([
    {
      id: 1,
      src: "/assets/clothes/ex1.png",
      text: "언더비",
      detail: "흰색 레터링...",
    },
    {
      id: 2,
      src: "/assets/clothes/ex2.png",
      text: "LIPHOP",
      detail: "힙한 검정옷",
    },
    {
      id: 3,
      src: "assets/clothes/ex3.png",
      text: "위드윤",
      detail: "땡땡이 패턴",
    },
    {
      id: 4,
      src: "assets/clothes/ex4.png",
      text: "스파오",
      detail: "래터링 반팔티",
    },
    {
      id: 5,
      src: "assets/clothes/ex5.png",
      text: "앤더슨벨",
      detail: "깔끔한 반팔티",
    },
    {
      id: 6,
      src: "assets/clothes/ex6.png",
      text: "드로우핏",
      detail: "무지 반팔티",
    },
  ]);

  useEffect(() => {
    // const interval = setTimeout(() => {
    //   setCount(() => {
    //     if (count < slideList.length) {
    //       setCount(count + 1);
    //       console.log(count);
    //     } else {
    //       setCount(1);
    //     }
    //   });
    //   handleSlider(count);
    //   return () => clearTimeout(interval);
    // }, 6000);
  }, []);

  const handleSlider = (count) => {
    if (count === 5) {
      slideRef.current.style.transform = "translateX(0)";
    } else {
      slideRef.current.style.transform = `translateX(-${
        window.innerWidth * count
      }px)`;
    }
  };

  return (
    <>
      <Avbart_main />
      <Menu_nav />
      <div className="mainSlide">
        <Slide
          slideRef={slideRef}
          count={count}
          slideList={slideList}
          handleSlider={handleSlider}
        />
      </div>
    </>
  );
};

export default MainMenu;
