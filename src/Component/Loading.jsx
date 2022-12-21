import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .LoadingText {
    font: 1rem "Noto Sans KR";
    text-align: center;
  }
`;

const Loading = () => {
  return (
    <Container>
      <div className="LoadingText">잠시만 기다려 주세요.</div>
      <img src="/assets/Loading/spinner.glf" alt="로딩중" width="5%" />
    </Container>
  );
};

export default Loading;
