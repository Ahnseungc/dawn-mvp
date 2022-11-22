import React from "react";
import styled from "styled-components";

const Select = styled.select`
  margin: 0;
  padding: 0;
  width: 300px;
  height: 40px;
  border: 1px solid #b0b0b0;
  border-radius: 3px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  & Select option {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #505050;
  }
`;
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

const Tall_select = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Container>
      <Select className="tall_select" onChange={handleChange}>
        {OPTIONS.map((option, index) => {
          return (
            <option
              key={index}
              value={option.value}
              defaultValue={OPTIONS.defaultValue === option.value}
            >
              {option.name}
            </option>
          );
        })}
      </Select>
    </Container>
  );
};
export default Tall_select;
