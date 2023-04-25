import type { PropsWithChildren } from "react";
import * as S from "./Button.styles";
import {
  ButtonColor,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "./Button.types";

const ButtonComponent = ({
  children,
  size = ButtonSize.md,
  variant = ButtonVariant.solid,
  color = ButtonColor.primary,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <S.Button size={size} variant={variant} color={color} onClick={onClick}>
      {children}
    </S.Button>
  );
};

ButtonComponent.size = ButtonSize;
ButtonComponent.variant = ButtonVariant;
ButtonComponent.color = ButtonColor;

export const Button = ButtonComponent;
