import { useState } from "react";
import * as S from "./Burger.styles";
import { BurgerProps, BurgerSize } from "./Burger.types";

const BurgerComponent = ({ onClick, size = BurgerSize.md }: BurgerProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <S.Button isActive={isActive} onClick={handleClick} size={size}>
      <S.Span isActive={isActive} />
    </S.Button>
  );
};

BurgerComponent.size = BurgerSize;

export const Burger = BurgerComponent;
