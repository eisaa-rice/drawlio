import React from "react";

const Input = ({
  label,
  labelStyle,
  type,
  width,
  inputStyle,
  value,
  onChange,
}: {
  label: string;
  labelStyle?: string;
  type?: string;
  width?: number;
  inputStyle?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label
      className={`flex flex-col items-center justify-center gap-1
      text-base ${labelStyle}`}
    >
      <input
        className={`text-center
        [appearance:textfield] 
        [&::-webkit-outer-spin-button]:appearance-none 
        [&::-webkit-inner-spin-button]:appearance-none
        ${inputStyle}`}
        name={label.toLowerCase()}
        type={type}
        value={value}
        onChange={onChange}
        style={{ width: `${width}ch` }}
      />
      {label}
    </label>
  );
};

export default Input;
