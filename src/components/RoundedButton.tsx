import React, { FunctionComponent } from "react";
import { ColorProperty } from "csstype";

export interface RoundedButtonProps {
  color: ColorProperty;
  onClick: () => void;
}

export const RoundedButton: FunctionComponent<RoundedButtonProps> = props => (
  <button
    style={{
      backgroundColor: props.color,
      border: "none",
      color: "white",
      padding: 20,
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px 2px",
      borderRadius: 5
    }}
    onClick={() => props.onClick()}
  >
    {props.children}
  </button>
);
