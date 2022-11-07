import React from "react";

const Avbart_plus_sex = ({
  value,
  name,
  defaultChecked,
  disabled,
  children,
}) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {children}
    </label>
  );
};
export default Avbart_plus_sex;
