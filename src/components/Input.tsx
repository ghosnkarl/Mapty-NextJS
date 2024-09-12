"use client";
import { ComponentPropsWithoutRef } from "react";
import "../styles/Input.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  id: string;
}

const Input = ({ label, id, ...rest }: InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input id={id} {...rest} className="input" required />
    </div>
  );
};

export default Input;
