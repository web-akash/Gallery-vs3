import React from "react";

const InputChekbox = ({
  multiple,
  text,
  className,
  type,
  checkbox,
  onChange,
  onClick,
  checked,
}) => {
  return (
    <input
      multiple={multiple}
      className={className}
      type={type}
      onChange={onChange}
      onClick={onClick}
      checked={checked}
      checkbox={checkbox}
    >
      {text}
    </input>
  );
};

export default InputChekbox;
