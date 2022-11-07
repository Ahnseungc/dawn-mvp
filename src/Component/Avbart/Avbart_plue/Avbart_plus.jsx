import React from "react";
import RadioGroup from "./Avbart_plus_sex/Avbart_plus_sex_radiogroup";
import Radio from "./Avbart_plus_sex/Avbart_plus_sex_radio";
import Modal from "react-modal";
import styled from "styled-components";

const custom = {
  content: {
    width: "350px",
    height: "550px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Avbart_plus = ({ isOpen }) => {
  Modal.setAppElement("#root");

  const closeModal = () => {
    isOpen.closeModal();
  };

  return (
    <>
      <Modal isOpen={isOpen} style={custom}>
        <div className="Avbart_plus_header">
          <h1>아바타 생성</h1>
          <div className="modalBody" onClick={(e) => e.stopPropagation()}>
            <button id="modalCloseBtn" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
        <div className="sex">
          <h3>성별</h3>
          <form>
            <RadioGroup>
              <Radio name="" value="" defaultChecked>
                남자
              </Radio>
              <Radio name="" value="">
                여자
              </Radio>
            </RadioGroup>
          </form>
        </div>
        <div className="tall">
          <h3>키</h3>
          <select name="tall">
            <option value={150}>150 ~ 154cm</option>
            <option value={150}>155 ~ 159cm</option>
            <option value={150}>160 ~ 164cm</option>
            <option value={150}>165 ~ 169cm</option>
            <option value={150}>170 ~ 174cm</option>
            <option value={150}>175 ~ 179cm</option>
            <option value={150}>180 ~ 184cm</option>
            <option value={150}>185 ~ 189cm</option>
          </select>
        </div>
        <div className="weight">
          <h3>체중</h3>
        </div>
      </Modal>
    </>
  );
};

export default Avbart_plus;
