import React, { HTMLAttributes } from "react";
import { RH, InputChange } from "../types";

type GenericInputProps = {
  value: string;
  label: string;
  id: string;
} & HTMLAttributes<HTMLInputElement>;

type InputProps = GenericInputProps & { readonly hook: RH<string> };

type WrongAnswerProps = GenericInputProps & {
  readonly handleChange: (e: InputChange) => void;
};

export const WrongAnswer: React.FC<WrongAnswerProps> = ({
  handleChange,
  label,
  id,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
        onChange={handleChange}
        className={`shadow bg-blue-100 rounded focus:outline-none px-3 py-1 ${className}`}
      />
    </div>
  );
};

export const Input: React.FC<InputProps> = ({ hook, ...props }) => {
  const update = (e: InputChange): void => {
    hook(e.target.value);
  };
  return <WrongAnswer handleChange={update} {...props} />;
};
