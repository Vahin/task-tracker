import styled, { css } from "styled-components";
import { getCustomOutline, getTransition } from "../../../styles/utils";
import { BurgerSize, ButtonProps, SpanProps } from "./Burger.types";
import { StyledVariants } from "../../../interfaces/styled";

const getBeef = css`
  content: "";
  display: block;
  background-color: ${({ theme }) => theme.colors.font};
  border-radius: 9999px;
  width: 100%;
  height: 10%;
  position: absolute;

  left: 0;
`;

export const Button = styled.button<ButtonProps>`
  display: block;
  background-color: transparent;
  border: none;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  ${({ size }) => sizes[size]}

  &::before,
  &::after {
    ${getBeef}
  }

  &::before {
    top: 0;
    ${({ theme }) =>
      getTransition(theme.durations.ms300, [
        "transform",
        "top",
        "left",
        "background-color",
      ])}
  }

  &::after {
    top: 100%;
    transform: translate(0, -100%);
    ${({ theme }) =>
      getTransition(theme.durations.ms300, [
        "transform",
        "top",
        "left",
        "background-color",
      ])}
  }

  ${({ isActive }) => {
    if (isActive) {
      return css`
        &::before {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg) scaleX(0.8);
        }

        &::after {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg) scaleX(0.8);
        }
      `;
    }
  }}

  ${getCustomOutline()}
`;

export const Span = styled.span<SpanProps>`
  ${getBeef}

  top: 50%;
  transform: translate(0, -50%);

  ${({ theme }) =>
    getTransition(theme.durations.ms300, [
      "transform",
      "top",
      "left",
      "background-color",
    ])}

  ${({ isActive }) => {
    if (isActive) {
      return css`
        transform: translate(0%, -50%) scaleX(0);
      `;
    }
  }}
`;

const sizes: StyledVariants<BurgerSize> = {
  xs: css`
    width: var(--burger-size);
    height: calc(var(--burger-size) * 0.8);
  `,
  sm: css`
    width: calc(var(--burger-size) * 1.25);
    height: calc(var(--burger-size) * 1.25 * 0.8);
  `,
  md: css`
    width: calc(var(--burger-size) * 1.5);
    height: calc(var(--burger-size) * 1.5 * 0.8);
  `,
  lg: css`
    width: calc(var(--burger-size) * 1.75);
    height: calc(var(--burger-size) * 1.75 * 0.8);
  `,
};
