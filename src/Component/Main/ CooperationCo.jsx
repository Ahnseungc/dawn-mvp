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
    width: 100%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  & ul li {
    display: flex;
    justify-content: center;
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
  @media screen and (max-width: 720px) {
    & {
      flex-direction: column;
    }
    & ul {
      margin-top: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 100px;
    }
    & ul img {
      margin-bottom: 30px;
    }
    & ul li:not(:nth-of-type(4n)) {
      margin-right: 0;
    }
    & .hasTag {
      font-size: 15px;
    }
    & .Enname {
      font-size: 20px;
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
      <ul>{CompanyList}</ul>
    </Container>
  );
};

export default CooperationCo;
