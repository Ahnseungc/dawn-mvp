import React from "react";
import RadioGroup from "./Avbart_plus_sex/Avbart_plus_sex_radiogroup";
import Radio from "./Avbart_plus_sex/Avbart_plus_sex_radio";
import Modal from "react-modal";
import tall_select from "./Avbart_plus_sex/Avbart_plus_tall_select";
import styled from "styled-components";


const OPTIONS = [
  {
    value: 150,
    name: "150 ~ 154cm",
  },
  {
    value: 155,
    name: "155 ~ 159cm",
  },
  {
    value: 160,
    name: "160 ~ 164cm",
  },
  {
    value: 165,
    name: "165 ~ 169cm",
  },
  {
    value: 170,
    name: "170 ~ 174cm",
  },
  {
    value: 175,
    name: "175 ~ 179cm",
  },
  {
    value: 180,
    name: "180 ~ 184cm",
  },
  {
    value: 185,
    name: "185 ~ 189cm",
  },
];
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
          <tall_select option={OPTIONS} />
        </div>
        <div className="weight">
          <h3>체중</h3>
        </div>
      </Modal>
    </>
  );
};

export default Avbart_plus;
