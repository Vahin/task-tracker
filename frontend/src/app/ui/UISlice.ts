import { createSlice } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";
import { ThemeEnum } from "../../interfaces/styled";

type initialStateType = {
  theme: DefaultTheme;
};

const initialState: initialStateType = {
  theme: lightTheme,
};

const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme =
        state.theme.type === ThemeEnum.light ? darkTheme : lightTheme;
    },
  },
});

export const { toggleTheme } = UISlice.actions;

export default UISlice.reducer;
