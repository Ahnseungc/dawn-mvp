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
  & .qa_header {
    display: flex;
  }
  & .qa_header img {
    margin: 30px 0 0 20px;
  }
  & .qa_header h1 {
    margin: 30px 0 0 6px;
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
  }
  /* #modalCloseBtn_qa */
  & .qa_header #modalCloseBtn_qa img {
    margin: 38.46px 0 0 110.46px;
  }
  & .qa_detail {
    margin: 28px 20px 0 20px;
    display: flex;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
  }

  /* & .qa_detail .number {
    height: 100%;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }
  & .qa_detail .number p:nth-child(1) {
    margin-bottom: 20px;
  }
  & .qa_detail .number p:nth-child(2) {
    margin-bottom: 34px;
  }
  & .qa_detail .number p:nth-child(3) {
    margin-bottom: 46px;
  }
  & .qa_detail .number p:nth-child(4) {
    margin-bottom: 20px;
  }
  & .qa_detail .number p:nth-child(5) {
    margin-bottom: 20px;
  }
  & .qa_detail .number p:nth-child(6) {
    margin-bottom: 49px;
  } */

  & .qa_detail .detail p:nth-child(1) {
    margin-bottom: 20px;
  }
  & .qa_detail .detail p:nth-child(2) {
    margin-bottom: 34px;
  }
  & .qa_detail .detail p:nth-child(3) {
    margin-bottom: 46px;
  }
  & .qa_detail .detail p:nth-child(4) {
    margin-bottom: 20px;
  }
  & .qa_detail .detail p:nth-child(5) {
    margin-bottom: 20px;
  }
  & .qa_detail .detail p:nth-child(6) {
    margin-bottom: 49px;
  }
`;

const Avbart_qa = ({ setqamodalOpen }) => {
  const closeModal_qa = () => {
    setqamodalOpen(false);
    console.log(setqamodalOpen);
  };
  return (
    <Container>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="qa_header">
          <img src="/assets/Icon/palette.png" alt="/"></img>
          <h1>사용설명서</h1>
          <button id="modalCloseBtn_qa" onClick={closeModal_qa}>
            <img src="/assets/Icon/close_icon.png" alt="/" />
          </button>
        </div>

        <div className="qa_detail">
          {/* <div className="number">
            <p>1.</p>
            <p>2.</p>
            <p>3.</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
          </div> */}
          <div className="detail">
            <p>+ 버튼을 눌러 본인의 아바타를 생성합니다.</p>

            <p>
              아래에 제공되는 옷들을 클릭해서 입어보며
              <br />
              코디를 확인합니다.
            </p>
            <p>
              맘에 드는 옷이 있다면 해당 쇼핑몰에 들어가
              <br />
              구매할 수 있습니다.
            </p>
            <p>
              이후 더 나은 서비스를 위해 우측 상단의
              <br />
              ‘설문조사 하러가기'를 눌러 피드백을 주신다면
              <br />
              감사드리겠습니다 !
            </p>
            <p>
              palette의 서비스가 마음에 드셨다면
              <br /> Instagram 팔로우를 누르고 소식을 받아보세요.
              <br />
              다양한 이벤트가 진행될 예정입니다 !
            </p>
            <p>
              문의는 palette 인스타그램의 DM 또는
              <br />
              palette@naver.com으로 보내주세요 !
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Avbart_qa;
