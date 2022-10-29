import React, { useState, Fragment } from "react";
import Header from "./Component/Header";
import MainMenu from "./Component/Main/MainMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Fotter from "./Component/Fotter";
const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Header />
      <Main>
        <MainMenu />
      </Main>
      <Fotter />
    </>
  );
}

export default App;
