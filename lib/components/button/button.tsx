import React from "react";
import { css, cx } from "../../../styled-system/css";
import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ className, children, onClick, disabled }) => {
  return (
    <button
      className={cx(
        "cyberpunk-button",
        css({
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
          _hover: {
            backgroundColor: "glitch.primary",
            color: "glitch.dark",
          },
        }),
        className || ""
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children || "Button component will render here"}
    </button>
  );
};

export default Button;