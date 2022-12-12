import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import header_css from "../css/Header.css";

const Container = styled.div`
  /* width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-top: 80px; */
  & > h1 {
    font-family: "NotingYou";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 67px;
  }
  & > button {
    margin-left: auto;
    border: 0;
    background-color: unset;
    background-color: #8e71d5;
    padding: 8px 0;
    width: 230px;
    border-radius: 5px;
  }
  & > button > a {
    justify-content: center;
    border-radius: 5px;
    font-size: 20px;
    color: #ffffff;
    display: flex;
    align-items: center;
  }
  & > button > a > svg {
    font-size: 18px;
    margin-left: 8px;
  }
  @media screen and (max-width: 390px) {
    width: 100%;
    & h1 {
      font-size: 25px;
      margin-left: 5%;
    }
    & > button {
      width: 130px;
      height: 30px;
      margin-right: 5%;
    }
    & > button > a {
      font-size: 12px;
      line-height: 17px;
    }
    & > button > a > svg {
      font-size: 12px;
    }
  }
`;
//헤더입니다
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Container>
          <h1>palette</h1>
          <button>
            <Link to="/">
              설문조사 하러가기
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </button>
        </Container>
      </header>
    );
  }
}
