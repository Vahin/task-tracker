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

  bg = "bg",
  font = "font",
}

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  onClick: () => void;
}
