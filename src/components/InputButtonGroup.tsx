"use client";
import { forwardRef, useState } from "react";
import "../styles/button-group.css";
import Image from "next/image";

interface InputButtonGroupProps {
  label: string;
  options: { value: string; output: string }[];
  hasIcon: boolean;
  defaultValue: number;
}

const InputButtonGroup = forwardRef<HTMLButtonElement, InputButtonGroupProps>(
  ({ label, options, hasIcon, defaultValue }, ref) => {
    const [clickedId, setClickedId] = useState<number>(defaultValue);
    function handleClick(id: number) {
      setClickedId(id);
    }

    return (
      <div className="input-container">
        <label className="input-label">{label}</label>
        <div className="btn-group--container">
          {options.map((option, i) => (
            <button
              ref={ref}
              key={i}
              value={options[clickedId].value}
              // Prevents multiple clicks on already selected button
              onClick={(e) => {
                // Prevents form from submitting
                e.preventDefault();
                i !== clickedId && handleClick(i);
              }}
              className={`btn-group ${
                hasIcon ? undefined : "btn-group--text"
              } ${i === clickedId ? "active" : undefined}`}
            >
              {hasIcon ? (
                <Image src={option.output} alt={`${option.value} Icon`} />
              ) : (
                option.output
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

InputButtonGroup.displayName = "ButtonGroup";

export default InputButtonGroup;
