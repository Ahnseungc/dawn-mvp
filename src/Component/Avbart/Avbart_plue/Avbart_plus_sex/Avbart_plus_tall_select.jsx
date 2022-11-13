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

const tall_select = (options) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  console.log(options);
  return (
    <Select onChange={handleChange}>
      {options.options.map((option) => {
        <option
          key={option.value}
          value={option.value}
          defaultValue={options.defaultValue === option.value}
        >
          {option.name}
        </option>;
      })}
    </Select>
  );
};
export default tall_select;
