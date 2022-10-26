import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  border-bottom: 2px solid #b0b0b0;
  border-right: 2px solid #b0b0b0;
  border-left: 2px solid #b0b0b0;
  & > ul {
    display: flex;
    margin: 0 auto;
  }
  & > ul li:not(:last-of-type) {
    padding: 24px 30px 0 0;
  }
  & > ul li {
    padding-top: 24px;
    justify-content: center;
  }
  & > ul li .products_header {
    font-size: 20px;
    line-height: 29px;
    font-weight: 500;
  }
  & > ul li > div .products_detail {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  }
`;
const Slide = ({ count, slideList, slideRef, handleSlider }) => {
  console.log("slideList", slideList);

  return (
    <Container>
      <ul ref={slideRef} className="slideWrap">
        {slideList.map((slide) => {
          return (
            <li key={slide.id}>
              <img src={slide.src} />
              <div className="products_header">{slide.text}</div>
              <div className="products_detail">{slide.detail}</div>
            </li>
          );
        })}
      </ul>

      <div className="inner">
        <div className="pagination">
          {slideList.map((button) => {
            <button
              type="button"
              key={button.id}
              onClick={() => {
                handleSlider(button.id);
              }}
              className={button.id === count ? "active" : ""}
            >
              {button.text}
            </button>;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Slide;
