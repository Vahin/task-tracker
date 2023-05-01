import { DefaultTheme } from "styled-components";
import { RootState } from "../store";

type GetTheme = (state: RootState) => DefaultTheme;
export const getThemeSelector: GetTheme = (state) => state.ui.theme;
