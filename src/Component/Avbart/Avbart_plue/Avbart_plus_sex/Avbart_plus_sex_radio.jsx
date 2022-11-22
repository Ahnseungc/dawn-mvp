import React from "react";

const Avbart_plus_sex = ({
  value,
  name,
  defaultChecked,
  disabled,
  children,
}) => {
  return (
    <>
      <label>{children}</label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
    </>
  );
};
export default Avbart_plus_sex;
