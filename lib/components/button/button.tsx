import React from "react";
import { css, cx } from "../../../styled-system/css";
import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ 
  className, 
  children, 
  onClick, 
  disabled, 
  as = "button",
  href,
  target,
  rel 
}) => {
  const text = children || "Button component will render here";
  
  const sharedStyles = css({
    padding: "0.75rem 1.5rem",
    border: "1px solid",
    borderColor: "glitch.primary",
    backgroundColor: "transparent",
    color: "glitch.primary",
    fontFamily: "mono",
    fontWeight: "600",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all 0.2s ease",
    textDecoration: "none",
    display: "inline-block",
    _hover: {
      backgroundColor: "glitch.primary",
      color: "glitch.dark",
    },
  });

  const commonProps = {
    className: cx("cyberpunk-button", sharedStyles, className || ""),
    "data-text": text,
  };

  if (as === "a") {
    return (
      <a
        {...commonProps}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        <span className="button-text">{text}</span>
      </a>
    );
  }

  return (
    <button
      {...commonProps}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;