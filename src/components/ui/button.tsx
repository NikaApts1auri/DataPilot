import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md"
      {...props}
    >
      {children}
    </button>
  );
};
