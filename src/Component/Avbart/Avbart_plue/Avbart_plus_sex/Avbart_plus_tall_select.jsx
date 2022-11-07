import React from "react";
import styled from "styled-components";

const Select = styled.select`
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
  border: 1px solid #b0b0b0;
  border-radius: 3px;
`;

const tall_select = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Select onChange={handleChange}>
      {props.options.map((option) => {
        <option
          key={option.value}
          value={option.value}
          defaultValue={props.defaultValue === option.value}
        >
          {option.name}
        </option>;
      })}
    </Select>
  );
};
export default tall_select;
