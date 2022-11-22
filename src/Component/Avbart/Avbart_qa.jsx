import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 550px;
  z-index: 999;
  /* 최상단 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;

const Avbart_qa = ({ setqamodalOpen }) => {
  const closeModal_qa = () => {
    setqamodalOpen(false);
    console.log(setqamodalOpen);
  };
  return (
    <Container>
      <div onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn_qa" onClick={closeModal_qa}>
          X
        </button>
        취소 버튼입니다.
      </div>
    </Container>
  );
};

export default Avbart_qa;
