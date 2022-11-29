import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import MainMenu from "../../css/MainMenu.css";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 36px;
  color: #000000;
  font-family: "Noto";
  text-decoration: none;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover:after {
    width: 100%;
    /* transform: scaleX(1); */
  }
  &:after {
    display: block;
    content: "";
    width: 0;
    height: 3px;
    background-color: #8e71d5;
    transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 720px) {
    & {
      font-size: 25px;
      line-height: 20px;
      width: 100%;
    }
  }
`;
const Menu_nav = () => {
  return (
    <nav className="navigation-bar">
      <ul className="menu-bar">
        <li className="menu-list">
          <StyledLink component={Link} to="/">
            전체
          </StyledLink>
        </li>
        <li className="menu-list">
          <StyledLink component={Link} to="/">
            상의
          </StyledLink>
        </li>
        <li className="menu-list">
          <StyledLink component={Link} to="/">
            셔츠
          </StyledLink>
        </li>
        <li className="menu-list">
          <StyledLink component={Link} to="/">
            아우터
          </StyledLink>
        </li>
        <li className="menu-list">
          <StyledLink component={Link} to="/">
            바지
          </StyledLink>
        </li>
        <li className="menu-list">
          <StyledLink component={Link} to="/">
            원피스
          </StyledLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu_nav;
