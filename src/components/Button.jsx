import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`px-7 py-4 border font-montserrat text-lg leading-none flex gap-2 justify-center items-center transition duration-500 hover:scale-105 ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : `bg-coral-red text-white border-coral-red`
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
