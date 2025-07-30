import React, { forwardRef, useId, useState } from "react";
import { css } from "../../../styled-system/css";
import type { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, ...props }, ref) => {
    const id = useId();
    const inputId = props.id || id;
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    const isLabelFloated = isFocused || hasValue;

    return (
      <div
        className={`${css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "mono",
          fontSize: "16px",
          padding: "3rem",
        })} ${className || ""}`}
      >
        <div
          className={css({
            position: "relative",
            width: "19rem",
          })}
        >
          <input
            {...props}
            ref={ref}
            id={inputId}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={css({
              width: "100%",
              height: "3.5rem",
              background: "rgba(13, 13, 13, 0.7)",
              border: "none",
              borderBottom: "2px solid #333",
              outline: "none",
              padding: "0 1rem",
              color: "glitch.primary",
              fontFamily: "inherit",
              fontSize: "1.1rem",
              caretColor: "glitch.primary",
              zIndex: 10,
              transition: "background 0.3s ease, border-color 0.3s ease",
              _focus: {
                borderColor: "transparent",
              },
            })}
          />

          <label
            htmlFor={inputId}
            data-text={label}
            className={css({
              position: "absolute",
              top: isLabelFloated ? "-1.5rem" : "1rem",
              left: isLabelFloated ? "0" : "1rem",
              color: isLabelFloated ? "glitch.primary" : "gray.300",
              opacity: isLabelFloated ? 1 : 0.6,
              fontSize: isLabelFloated ? "0.8rem" : "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              pointerEvents: "none",
              transition: "all 0.3s ease",
              zIndex: 11,
              _before: isFocused
                ? {
                    content: `"${label}"`,
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#212121",
                    color: "glitch.secondary",
                    animation:
                      "glitchLabel 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
                  }
                : {},
              _after: isFocused
                ? {
                    content: `"${label}"`,
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#212121",
                    color: "glitch.primary",
                    animation:
                      "glitchLabel 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both",
                  }
                : {},
            })}
          >
            {label}
          </label>

          <div
            className={css({
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              border: "1px solid rgba(0, 242, 234, 0.2)",
              opacity: isFocused ? 1 : 0.5,
              borderColor: isFocused
                ? "rgba(0, 242, 234, 0.5)"
                : "rgba(0, 242, 234, 0.2)",
              transition: "all 0.3s ease",
            })}
          />

          <div
            className={css({
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0, 242, 234, 0.1) 48%, rgba(0, 242, 234, 0.3) 50%, rgba(0, 242, 234, 0.1) 52%, transparent 100%)",
              opacity: 0,
              animation: isFocused ? "scanVertical 4s linear infinite" : "none",
            })}
          />

          <div
            className={css({
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse at center, rgba(0, 242, 234, 0.2) 0%, transparent 70%)",
              opacity: isFocused ? 1 : 0,
              transition: "opacity 0.4s ease",
            })}
          />

          <div
            className={css({
              position: "absolute",
              bottom: "2px",
              left: "0",
              width: "100%",
              height: "0.3rem",
              display: "flex",
              opacity: isFocused ? 1 : 0,
              transition: "opacity 0.3s ease 0.1s",
            })}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className={css({
                  flexGrow: 1,
                  backgroundColor: "glitch.primary",
                  transition: "transform 0.2s, opacity 0.2s",
                  transform: "scaleY(0)",
                  transformOrigin: "bottom",
                  animation: isFocused ? `dataPulse 2s infinite` : "none",
                  animationDelay: `${i * 0.1}s`,
                })}
              />
            ))}
          </div>

          <div
            className={css({
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            })}
          >
            <div
              className={css({
                position: "absolute",
                top: "-0.3rem",
                left: "-0.3rem",
                width: isFocused ? "1.25rem" : "1rem",
                height: isFocused ? "1.25rem" : "1rem",
                border: isFocused ? "3px solid" : "2px solid",
                borderColor: "glitch.primary",
                borderRight: "none",
                borderBottom: "none",
                transition: "all 0.3s ease",
                opacity: isFocused ? 1 : 0.5,
              })}
            />
            <div
              className={css({
                position: "absolute",
                top: "-0.3rem",
                right: "-0.3rem",
                width: isFocused ? "1.25rem" : "1rem",
                height: isFocused ? "1.25rem" : "1rem",
                border: isFocused ? "3px solid" : "2px solid",
                borderColor: "glitch.primary",
                borderLeft: "none",
                borderBottom: "none",
                transition: "all 0.3s ease",
                opacity: isFocused ? 1 : 0.5,
              })}
            />
            <div
              className={css({
                position: "absolute",
                bottom: "-0.3rem",
                left: "-0.3rem",
                width: isFocused ? "1.25rem" : "1rem",
                height: isFocused ? "1.25rem" : "1rem",
                border: isFocused ? "3px solid" : "2px solid",
                borderColor: "glitch.primary",
                borderRight: "none",
                borderTop: "none",
                transition: "all 0.3s ease",
                opacity: isFocused ? 1 : 0.5,
              })}
            />
            <div
              className={css({
                position: "absolute",
                bottom: "-0.3rem",
                right: "-0.3rem",
                width: isFocused ? "1.25rem" : "1rem",
                height: isFocused ? "1.25rem" : "1rem",
                border: isFocused ? "3px solid" : "2px solid",
                borderColor: "glitch.primary",
                borderLeft: "none",
                borderTop: "none",
                transition: "all 0.3s ease",
                opacity: isFocused ? 1 : 0.5,
              })}
            />
          </div>

          {error && (
            <div
              className={css({
                position: "absolute",
                top: "100%",
                left: "0",
                color: "red.400",
                fontSize: "0.8rem",
                marginTop: "0.25rem",
              })}
            >
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
