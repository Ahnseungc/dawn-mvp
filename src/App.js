import React, { useState, Fragment } from "react";
import Header from "./Component/Header";
import MainMenu from "./Component/Main/MainMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Fotter from "./Component/Fotter";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
import { fromHalfFloat } from "three";
const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const popup = (currentState, action) => {
  if (currentState === undefined) {
  }
  const newState = { ...currentState };
  return newState;
};

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
