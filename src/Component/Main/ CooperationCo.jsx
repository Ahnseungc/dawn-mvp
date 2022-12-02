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
  & .ul {
    justify-content: start;
    width: 100%;
  }
  & .ul ul {
    justify-content: start;
    width: 100%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: start;
  }
  & .ul ul li {
    display: flex;
    justify-content: center;
  }

  & .ul ul li .detail {
    display: flex;
    flex-direction: column;
    margin-left: 18px;
  }

  & .ul .hasTag {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #7a7a7a;
  }
  & .ul .Enname {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
  }
  @media screen and (max-width: 390px) {
    & h1 {
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      margin: 33px 0 0 15px;
    }
    & .ul ul {
      grid-template-columns: 1fr 1fr;
      margin-top: 10px;
    }
    & .ul ul li {
      margin-left: 15px;
    }

    & .ul ul li .detail {
      display: flex;
      flex-direction: column;
      margin-left: 9px;
    }

    & .ul .hasTag {
      font-weight: 400;
      font-size: 11px;
      line-height: 17px;
      color: #7a7a7a;
    }
    & .ul .Enname {
      font-weight: 700;
      font-size: 13px;
      line-height: 23px;
    }
    & .ul .name {
      font-size: 13px;
    }
    & .ul img {
      width: 50px;
      height: 50px;
    }
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
      <div className="ul">
        <ul>{CompanyList}</ul>
      </div>
    </Container>
  );
};

export default CooperationCo;
