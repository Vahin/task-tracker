import { FlattenSimpleInterpolation } from "styled-components";

export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;

    bg: string;
    font: string;
  };

  durations: {
    ms300: number;
  };
}

export type StyledVariants<E extends string | number> = {
  [key in E]?: FlattenSimpleInterpolation;
};
