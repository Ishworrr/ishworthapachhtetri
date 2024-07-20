import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center transitions-color hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const renderButton = () => (
    <button className="{classes}">
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => {
    <a href={href} className="{classes}"></a>;
  };
};

export default Button;
