import { FlattenSimpleInterpolation } from "styled-components";

export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export interface ITheme {
  colors: {
    [key in Colors]: string;
  };

  durations: {
    ms300: number;
  };
}

export type StyledVariants<E extends string | number> = {
  [key in E]?: FlattenSimpleInterpolation;
};

export enum Colors {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  danger = "danger",

  bg = "bg",
  font = "font",
}
