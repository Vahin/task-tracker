import { css } from "styled-components";

export const getTransition = (
  duration: number,
  property: string[] | string = ["background-color", "color"],
  animation = "ease"
) =>
  css`
    transition-property: ${Array.isArray(property)
      ? property.join(", ")
      : property};
    transition-duration: ${duration}ms;
    transition-timing-function: ${animation};
  `;

export const getCustomOutline = () => css`
  &:focus-visible {
    outline: none;
    ${({ theme }) => css`
      &:focus-visible {
        box-shadow: 0px 0px 2px 2px ${theme.colors.bg},
          0px 0px 5px 5px ${theme.colors.primary};
      }
    `}
  }
`;
