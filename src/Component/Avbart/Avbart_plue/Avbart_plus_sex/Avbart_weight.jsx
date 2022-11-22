import React from "react";
import styled from "styled-components";

const OPTIONS = [
  {
    name: "40~44 kg",
    value: 40,
  },
  {
    name: "45~49 kg",
    value: 45,
  },
  {
    name: "50~54 kg",
    value: 50,
  },
  {
    name: "55~59 kg",
    value: 55,
  },
  {
    name: "60~64 kg",
    value: 60,
  },
  {
    name: "65~69 kg",
    value: 65,
  },
  {
    name: "70~74 kg",
    value: 70,
  },
  {
    name: "75~79 kg",
    value: 75,
  },
  {
    name: "80~84 kg",
    value: 80,
  },
  {
    name: "85~89 kg",
    value: 85,
  },
  {
    name: "90~kg",
    value: 90,
  },
];

const Select = styled.select`
  margin: 0;
  padding: 0;
  /* display: flex; */
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

const Avbart_weight = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Container>
      <Select onChange={handleChange} className="weight_select">
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

export default Avbart_weight;
