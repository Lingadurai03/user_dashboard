import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "Enter text...",
  type = "text",
  className = "",
  ...rest
}) => {
  return (
   <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-0 ${className}`}
      {...rest}
    />
  );
};

export default Input;
