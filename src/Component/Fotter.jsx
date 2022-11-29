import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  background: #ebebeb;
  margin: 0 auto;
  margin-top: 108px;

  & h1 {
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    letter-spacing: 0.1em;
    font-family: "noto";
    color: #707070;
    padding: 37px 0 0 139.5px;
  }
  & .info {
    width: 50%;
    padding: 15px 0 41px 139.5px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #505050;
    font-family: noto;
  }
  & .fotter {
    width: 100%;
    display: flex;
  }
  & .right {
    width: 50%;
    margin-left: 5%;
  }
  & .right .SNS {
    display: flex;
    padding: 32px 0 0 100px;
  }
  & .right .SNS div {
    display: flex;
    align-items: center;
    font-family: noto;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #707070;
  }
  & .right .SNS div:not(:last-of-type) {
    padding-right: 63px;
  }
  & .right .SNS div p {
    padding-left: 13px;
  }
  & .right .peedback {
    padding: 50px 0 0 100px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #505050;
    font-family: noto;
  }
  @media screen and (max-width: 720px) {
    & h1 {
      font-size: 50px;
      padding-left: 0;
      text-align: center;
    }
    & .fotter {
      flex-direction: column;
    }
    & .info {
      padding: 50px 0 0 0;
      text-align: center;
      width: 100%;
    }
    & .right {
      width: 100%;
    }
    & .right .peedback {
      width: 100%;
      padding: 0;
      padding-top: 50px;
      padding-right: 10%;
      display: flex;
      justify-content: center;
    }
  }
`;

const Fotter = () => {
  return (
    <Container>
      <h1>Palette</h1>
      <div className="fotter">
        <div className="info">
          대표 : 이윤석 <br />
          주소 : 한림대학교 캠퍼스라이프센터 1층, 6호
          <br />
          제휴/광고문의 : palette@naver.com <br />
          <br />
          이 사이트는 온라인 패션 플랫폼 Palette의 MVP 테스트 사이트입니다.
          <br />
          <br />
          이후 Android, iOS 어플 및 웹사이트를 출시할 예정이며 이를 위한
          테스트를
          <br />
          진행 중에 있습니다.
          <br />
          <br />
          쇼핑몰 상품 추가에 대한 문의 및 추후 입점 문의를 받고있으니
          참고해주시기 바랍니다.
        </div>
        <div className="right">
          <div className="SNS">
            <div>
              <img src="/assets/Icon/facebook.png"></img>
              <p>페이스북</p>
            </div>

            <div>
              <img src="/assets/Icon/insta.png"></img>
              <p>인스타그램</p>
            </div>
            <div>
              <img src="/assets/Icon/youyube.png"></img>
              <p>유튜브</p>
            </div>
          </div>
          <div className="peedback">문의 및 피드백 : palette@naver.com</div>
        </div>
      </div>
    </Container>
  );
};

export default Fotter;
