import { React, useState } from "react";
import RadioGroup from "./Avbart_plus_sex/Avbart_plus_sex_radiogroup";
import Radio from "./Avbart_plus_sex/Avbart_plus_sex_radio";
import Weight_select from "./Avbart_plus_sex/Avbart_weight";
import Tall_select from "./Avbart_plus_sex/Avbart_plus_tall_select";
import styled from "styled-components";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  /* position: fixed; */
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #8b89893c;

  & h1 {
    height: 29px;
    width: 97px;
    left: 0;
    top: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    text-align: left;
    margin: 35px 0 50px 25px;
  }
  & .modal_all {
    width: 350px;
    height: 550px;
    z-index: 999;
    /* 최상단 */
    /* position: absolute; */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
  }
  & #modalCloseBtn {
    position: absolute;
    right: 0;
    top: 0;
    margin: 43.46px 33.46px 0 0;
  }
  & h3 {
    margin-left: 25px;
    margin-bottom: 15px;
  }
  & .sex .radiogroup {
    margin-bottom: 25px;
    margin-left: 25px;
  }
  & .sex .radiogroup label {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
  & .sex .radiogroup .man {
    margin-right: 69px;
  }

  & .tall {
    margin-bottom: 25px;
  }
  & .weight {
    margin-bottom: 60px;
  }
  & button {
    background: #8e71d5;
    border-radius: 3px;
    width: 300px;
    height: 40px;
    color: white;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
  }
  & .create_btn {
    display: flex;
    justify-content: center;
    /* background-color: #8b89893c; */
  }
`;

const Avbart_plus = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Container>
      <div className="modal_all">
        <div className="Avbart_plus_header">
          <h1>아바타 생성</h1>
          <div className="modalBody" onClick={(e) => e.stopPropagation()}>
            <div id="modalCloseBtn">
              <img
                src="/assets/Icon/close_icon.png"
                alt="/"
                onClick={closeModal}
              />
            </div>
          </div>
        </div>
        <div className="sex">
          <h3>성별</h3>
          <div className="radiogroup">
            <Radio name="" value="" defaultChecked></Radio>
            <label className="man">남자</label>
            <Radio name="" value=""></Radio>
            <label>여자</label>
          </div>
        </div>
        <div className="tall">
          <h3>키</h3>
          <Tall_select />
        </div>
        <div className="weight">
          <h3>체중</h3>
          <Weight_select />
        </div>
        <div className="create_btn">
          <button id="create_btn" onClick={closeModal}>
            아바타 생성하기
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Avbart_plus;
