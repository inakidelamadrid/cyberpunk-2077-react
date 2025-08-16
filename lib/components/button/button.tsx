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
  rel,
  glitch = false,
}) => {
  const text = children || "Button component will render here";

  const shouldGlitch = glitch && !disabled;

  const commonPseudoAttributes = {
    content: "attr(data-text)",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const glitchPseudoElements = shouldGlitch
    ? {
        "&::before": {
          ...commonPseudoAttributes,
          opacity: "1",
          color: "glitch.secondary",
          animation:
            "glitch-button 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
          pointerEvents: "none",
        },
        "&::after": {
          ...commonPseudoAttributes,
          opacity: "0.7",
          color: "glitch.primary",
          pointerEvents: "none",
        },
      }
    : {};

  const sharedStyles = css({
    display: "block",
    width: "100%",
    marginTop: "1.1rem",
    padding: "0.7em 1em",
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "glitch.primary",
    color: "glitch.primary",
    fontFamily: "inherit",
    fontSize: "0.9rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    position: "relative",
    transition: "all 0.3s",
    overflow: "hidden",
    textAlign: "center",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "glitch.primary",
      color: "glitch.dark",
      boxShadow: "0 0 1.5rem {colors.glitch.primary}",
      outline: "none",
      ...glitchPseudoElements,
    },
    "&:focus": {
      backgroundColor: "glitch.primary",
      color: "glitch.dark",
      boxShadow: "0 0 1.5rem {colors.glitch.primary}",
      outline: "none",
      ...glitchPseudoElements,
    },
    "&:active": {
      transform: "scale(0.97)",
    },
  });

  const textStyles = css({
    position: "relative",
    zIndex: 1,
    transition: "opacity 0.2s ease",
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
        <span className={cx("button-text", textStyles)}>{text}</span>
      </a>
    );
  }

  return (
    <button {...commonProps} onClick={onClick} disabled={disabled}>
      <span className={cx("button-text", textStyles)}>{text}</span>
    </button>
  );
};

export default Button;
