import type { PropsWithChildren } from "react";
import * as S from "./Button.styles";
import {
  ButtonColor,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "./Button.types";
import { useAppSelector } from "../../../app/hooks";
import { getThemeSelector } from "../../../app/ui/UISelectors";

const ButtonComponent = ({
  children,
  size = ButtonSize.md,
  variant = ButtonVariant.solid,
  color = ButtonColor.primary,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const theme = useAppSelector(getThemeSelector);

  return (
    <S.Button
      size={size}
      variant={variant}
      color={color}
      theme={theme}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};

ButtonComponent.size = ButtonSize;
ButtonComponent.variant = ButtonVariant;
ButtonComponent.color = ButtonColor;

export const Button = ButtonComponent;
