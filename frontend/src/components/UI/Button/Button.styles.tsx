import styled, { css } from "styled-components";

import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  ButtonProps,
} from "./Button.types";
import { StyledVariants } from "../../../interfaces/styled";
import { getCustomOutline, getTransition } from "../../../styles/utils";

type SButtonProps = Required<ButtonProps>;

export const Button = styled.button<SButtonProps>`
  box-sizing: border-box;
  cursor: pointer;

  ${({ theme }) =>
    getTransition(theme.durations.ms300, [
      "color",
      "background-color",
      "border-color",
    ])}

  ${({ size }) => sizes[size]}

  ${({ variant = ButtonVariant.solid, color = ButtonColor.primary, theme }) => {
    const themeColor = theme.colors[color];

    switch (variant) {
      case ButtonVariant.solid:
        return css`
          background-color: ${themeColor};
          color: ${theme.colors.bg};
          border: none;
        `;

      case ButtonVariant.outline:
        return css`
          background-color: transparent;
          color: ${themeColor};
          border: 1px solid ${themeColor};
        `;

      case ButtonVariant.ghost:
        return css`
          background-color: transparent;
          color: ${theme.colors.font};
          border: none;
          box-shadow: ${theme.colors.font} 0px 1px 3px;
        `;
    }
  }}

  ${getCustomOutline()}
`;

const sizes: StyledVariants<ButtonSize> = {
  xs: css`
    border-radius: 5px;
    padding: 6px 18px;
    font-size: 12px;
  `,
  sm: css`
    border-radius: 7px;
    padding: 7px 21px;
    font-size: 14px;
  `,
  md: css`
    border-radius: 8px;
    padding: 8px 24px;
    font-size: 16px;
  `,
  lg: css`
    border-radius: 9px;
    padding: 9px 30px;
    font-size: 18px;
  `,
};
