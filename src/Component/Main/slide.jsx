import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  & li:not(:last-of-type) {
    /* overflow: hidden; */
    margin-right: 30px;
  }
  @media screen and (max-width: 720px) {
    & li img {
      width: 100px;
      height: 100px;
    }
    & li:not(:last-of-type) {
      margin-right: 7px;
    }
    & li .products_header {
      font-size: 13px;
    }
    & li .products_detail {
      font-size: 11px;
    }
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

const Slide = ({ slide, onClickItem }) => {
  // const [datas, setDatas] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchdata = async () => {
  //   try {
  //     setError(null);
  //     setDatas(null);
  //     setLoading(true);
  //     const response = await axios.get("http://35.79.227.78:8080/product/all");
  //     console.log("response", response);
  //     setDatas(response);
  //   } catch (e) {
  //     setError(e);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  //통신 마지막 제발...

  // const [datas, setDatas] = useState([]);

  // const searchApi = () => {
  //   const url = "http://35.79.227.78:8080/product/all";
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setDatas(res);
  //       console.log("success");
  //     })
  //     .catch((err) => {
  //       console.log("fail", err);
  //     });
  // };
  // useEffect(() => {
  //   searchApi();
  // }, []);

  // if (datas.length > 0) {
  //   return console.log("success_data");
  // }

  const SlideList = slideList.map((obj, index) => {
    return (
      <li
        key={index}
        className="Item"
        id={obj.id}
        style={{
          transform: `translateX(${slide}px)`,
          transition: "0.5s ease",
        }}
        onClick={() => {
          onClickItem(obj);
        }}
      >
        <img src={obj.src}></img>
        <div className="products_header">{obj.text}</div>
        <div className="products_detail">{obj.detail}</div>
      </li>
    );
  });

  return <Container>{SlideList}</Container>;
};

export default Slide;
