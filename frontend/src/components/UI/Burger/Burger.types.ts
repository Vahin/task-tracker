export enum BurgerSize {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

interface WithClick {
  onClick: () => void;
}

interface BaseBurgerProps {
  size?: BurgerSize;
}

interface BaseButtonProps {
  isActive: boolean;
}

export type BurgerProps = WithClick & BaseBurgerProps;

export type ButtonProps = Required<BurgerProps> & BaseButtonProps;

export type SpanProps = BaseButtonProps;
