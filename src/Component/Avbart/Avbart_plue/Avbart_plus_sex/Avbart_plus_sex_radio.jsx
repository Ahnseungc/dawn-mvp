import React from "react";

const Avbart_plus_sex = ({ value, defaultChecked, disabled, children }) => {
  return (
    <>
      <label>{children}</label>
      <input
        type="radio"
        value={value}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
    </>
  );
};
export default Avbart_plus_sex;
