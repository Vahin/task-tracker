import { DefaultTheme } from "styled-components";
import { ITheme, ThemeEnum } from "../interfaces/styled";

export const baseTheme: ITheme = {
  colors: {
    primary: "#A75DC7",
    secondary: "#CF9A88",
    success: "#4caf50",
    danger: "#f44336 ",

    bg: "#F6F2F3",
    font: "#343354",
  },

  durations: {
    ms300: 300,
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
    bg: "#F6F2F3",
    font: "#343354",
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    bg: "#343354",
    font: "#F6F2F3",
  },
};
