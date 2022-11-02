import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Noto";
  max-width: 1200px;
  width: 100%;
  margin-top: 50px;
  & h1 {
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    color: #000000;
  }
  & ul {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 50px;
  }
  & ul li {
    justify-content: center;
    display: flex;

    margin-right: 144px;
  }
  & ul li .detail {
    display: flex;
    flex-direction: column;
    margin-left: 18px;
  }
  & .hasTag {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #7a7a7a;
  }
  & .Enname {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
  }
`;

const companyList = [
  {
    img: "/assets/Company/Kangol.png",
    name: "캉골",
    EnName: "KANGOL",
    hasTag: "#브랜드 #영캐주얼",
  },
  {
    img: "/assets/Company/Kangol.png",
    name: "캉골",
    EnName: "KANGOL",
    hasTag: "#브랜드 #영캐주얼",
  },
  {
    img: "/assets/Company/Kangol.png",
    name: "캉골",
    EnName: "KANGOL",
    hasTag: "#브랜드 #영캐주얼",
  },
  {
    img: "/assets/Company/Kangol.png",
    name: "캉골",
    EnName: "KANGOL",
    hasTag: "#브랜드 #영캐주얼",
  },
  {
    img: "/assets/Company/Kangol.png",
    name: "캉골",
    EnName: "KANGOL",
    hasTag: "#브랜드 #영캐주얼",
  },
  {
    img: "/assets/Company/Kangol.png",
    name: "캉골",
    EnName: "KANGOL",
    hasTag: "#브랜드 #영캐주얼",
  },
];

const CooperationCo = () => {
  const CompanyList = companyList.map((item, index) => (
    <li key={index}>
      <img src={item.img}></img>
      <div className="detail">
        <div className="name">{item.name}</div>
        <div className="Enname">{item.EnName}</div>
        <div className="hasTag">{item.hasTag}</div>
      </div>
    </li>
  ));

  return (
    <Container>
      <h1>협력 쇼핑몰</h1>
      <ul>{CompanyList}</ul>
    </Container>
  );
};

export default CooperationCo;
