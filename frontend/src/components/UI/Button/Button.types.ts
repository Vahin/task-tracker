import { DefaultTheme } from "styled-components";

export enum ButtonSize {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

export enum ButtonVariant {
  solid = "solid",
  outline = "outline",
  ghost = "ghost",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  danger = "danger",
}

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  theme?: DefaultTheme;
  onClick: () => void;
}
