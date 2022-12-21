import React, { useState, Fragment, useEffect } from "react";
import Header from "./Component/Header";
import MainMenu from "./Component/Main/MainMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Fotter from "./Component/Fotter";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
import { fromHalfFloat } from "three";
import Loading from "./Component/Loading";
import axios from "axios";
const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  // const [loading, setLoading] = useState(true);
  return (
    <>
      {/* <Loading /> */}
      <Header />
      <Main>
        <MainMenu />
      </Main>
      <Fotter />
    </>
  );
}

export default App;
