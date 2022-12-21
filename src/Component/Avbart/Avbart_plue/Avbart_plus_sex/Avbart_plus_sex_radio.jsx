import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  & .radiogroup {
    margin-bottom: 25px;
    margin-left: 25px;
  }
  & .radiogroup label {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
  & .radiogroup .man {
    margin-right: 69px;
  }
`;

// value, defaultChecked, disabled, children

const Avbart_plus_sex = ({ value }) => {
  const [sex, setSex] = useState([]);

  const handleClickRadioButton2 = (e) => {
    setSex(e.target.value);
    console.log(sex);
  };

  // console.log(value);
  return (
    <Container>
      <div className="radiogroup">
        <input
          type="radio"
          value="1"
          checked={sex === "1"}
          onChange={handleClickRadioButton2}
        />
        <label className="man">남자</label>
        <input
          type="radio"
          value="2"
          checked={sex === "2"}
          onChange={handleClickRadioButton2}
        />
        <label>여자</label>
      </div>
    </Container>
  );
};
export default Avbart_plus_sex;
