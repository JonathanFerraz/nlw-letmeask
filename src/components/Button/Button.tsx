import React, { ButtonHTMLAttributes } from 'react';

import { ButtonRipple } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: any;
  color?: string;
  style?: any;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  children,
  disabled,
  loading = false as any,
  style,
  ...rest
}) => {
  return (
    <>
      <ButtonRipple
        variant={variant}
        color={color}
        disabled={disabled || loading}
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled ? 'true' : 'false'}
        loading={loading.toString()}
        style={style}
        type={'button'}
        {...rest}
      >
        {children}
      </ButtonRipple>
    </>
  );
};
