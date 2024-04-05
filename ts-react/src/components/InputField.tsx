import "./InputField.css";
import React from "react";

type InputFieldType = React.InputHTMLAttributes<HTMLInputElement>["type"];

type InputFieldProps = {
  id: string;
  labelText: string;
  value: string;
  type: InputFieldType;
  onChange: (emailValue: string) => void;
};

export const InputField = ({
  id,
  labelText,
  value,
  type,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="input-field-container">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </div>
  );
};
