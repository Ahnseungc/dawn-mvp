import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  & li:not(:last-of-type) {
    /* overflow: hidden; */
    margin-right: 30px;
  }
`;
const slideList = [
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
  {
    id: 7,
    src: "/assets/clothes/ex1.png",
    text: "언더비",
    detail: "흰색 레터링...",
  },
  {
    id: 8,
    src: "/assets/clothes/ex1.png",
    text: "언더비",
    detail: "흰색 레터링...",
  },
];
const Slide = ({ slide }) => {
  const SlideList = slideList.map((el, index) => {
    console.log(el.id);
    return (
      <li
        key={index}
        className="Item"
        id={el.id}
        style={{
          transform: `translateX(${slide}px)`,
          transition: "0.5s ease",
        }}
      >
        <img src={el.src}></img>
        <div className="products_header">{el.text}</div>
        <div className="products_detail">{el.detail}</div>
      </li>
    );
  });

  return <Container>{SlideList}</Container>;
};

export default Slide;
