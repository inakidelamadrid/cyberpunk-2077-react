import React from "react";
import { css } from "../../../styled-system/css";
import type { StatsProps } from "./types";

const Stats: React.FC<StatsProps> = ({ className }) => {
  return (
    <div
      className={`${css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "mono",
        fontSize: "16px",
        padding: "3rem",
        color: "glitch.primary",
      })} ${className || ""}`}
    >
      Stats component will render here
    </div>
  );
};

export default Stats;