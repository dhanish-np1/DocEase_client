import React from "react"
import { ButtonProps } from "../../types/User";

const Button: React.FC<ButtonProps> = ({ color, value }) => {
  const defaultColor = color || '#FF6500';
  return (
    <button style={{ backgroundColor: defaultColor }} className="px-4 py-2 rounded-lg text-white font-lexend w-full mt-3  hover:bg-blue-500 ">
      {value}
    </button>
  );
};

export default Button;