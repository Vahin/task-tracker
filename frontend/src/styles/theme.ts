import { DefaultTheme } from "styled-components";
import { ITheme, ThemeEnum } from "../interfaces/styled";

export const baseTheme: ITheme = {
  colors: {
    primary: "#1761AB",
    secondary: "#7DCCBD",
    success: "#4caf50",
    danger: "#f44336 ",

    bg: "#FAFFFF",
    font: "#323232",
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
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    bg: baseTheme.colors.font,
    font: baseTheme.colors.bg,
  },
};
