import React from "react";
import { css, cx } from "../../../styled-system/css";
import type { StatsProps } from "./types";

const Stats: React.FC<StatsProps> = ({ className, label, value }) => {
  return (
    <div
      className={cx(
        "stat-item",
        css({
          textAlign: "center",
          cursor: "pointer",
          fontFamily: "mono",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }),
        className || ""
      )}
    >
      <span
        className={css({
          fontSize: "0.65rem",
          fontWeight: "700",
          color: "glitch.text",
          opacity: "0.6",
          letterSpacing: "0.1em",
        })}
      >
        {label}
      </span>
      <span
        className={cx(
          "stat-value",
          css({
            display: "block",
            fontSize: "1.4rem",
            fontWeight: "700",
            color: "glitch.primary",
            marginTop: "0.25rem",
            position: "relative",
          })
        )}
        data-text={value}
      >
        {value}
      </span>
    </div>
  );
};

export default Stats;
