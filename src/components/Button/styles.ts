import { ButtonHTMLAttributes } from 'react';

import { ButtonBase, CircularProgress } from '@material-ui/core';
import { shade, transparentize } from 'polished';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'google' | 'solid' | 'solid-icon' | 'outline' | undefined;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const CircleProgressCustom = styled(CircularProgress)`
  &.MuiCircularProgress-colorPrimary {
    color: ${props => props.theme.primaryColor}!important;
  }
`;

export const ButtonRipple = styled(ButtonBase)<ButtonProps>`
  color: #555 !important;
  border-radius: 8px !important;
  transition: 0.3s ease-in-out !important;
  margin-left: 0rem !important;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem !important;
  font-weight: 400 !important;
  line-height: 1.25 !important;
  white-space: nowrap;

  ${props =>
    props.variant === 'google' &&
    css`
      margin-top: 64px!important;
      height: 50px!important;
      min-width: 128px !important;
      background: #ea4335!important;
      color: #fff !important;

      img {
        margin-right: 0.5rem;
      }

      &:hover {
        background: ${shade(0.4, '#ea4335')}!important};
      }
    `};

  ${props =>
    props.variant === 'solid' &&
    css`
      min-width: 128px !important;
      height: 50px !important;
      background: ${(props: ButtonProps) =>
        props.color ? `${props.color}` : '#835AFD'}!important;
      color: #fff !important;

      &.Mui-disabled {
        cursor: not-allowed !important;
        pointer-events: none !important;
        background: #cecece !important;
        color: #737380 !important;
      }

      &:hover {
        background: ${(props: ButtonProps) =>
          props.color
            ? shade(0.2, `${props.color}`)
            : shade(0.2, '#835AFD')}!important;
      }
    `};

  ${props =>
    props.variant === 'solid-icon' &&
    css`
      min-width: 128px !important;
      height: 50px !important;
      background: ${(props: ButtonProps) =>
        props.color ? `${props.color}` : '#835AFD'}!important;
      color: #fff !important;

      > img {
        margin-right: 0.5rem;
        width: 20px;
      }

      &.Mui-disabled {
        cursor: not-allowed !important;
        pointer-events: none !important;
        background: #cecece !important;
        color: #737380 !important;
      }

      &:hover {
        background: ${(props: ButtonProps) =>
          props.color
            ? shade(0.2, `${props.color}`)
            : shade(0.2, '#835AFD')}!important;
      }
    `};

  ${props =>
    props.variant === 'outline' &&
    css`
      border-radius: 0.2rem !important;
      min-width: 128px !important;
      max-width: 224px !important;
      padding: 0.9rem 2.5rem !important;
      background: 'transparent';
      color: ${(props: ButtonProps) =>
        props.color ? `${props.color}` : '#166649'}!important;
      border: 1px solid
        ${(props: ButtonProps) =>
          props.color ? `${props.color}` : '#166649'}!important;
      padding: 0.85rem 2rem !important;

      &.Mui-disabled {
        cursor: not-allowed !important;
        pointer-events: none !important;
        border: 1px solid #c4c4c4 !important;
        color: #c4c4c4 !important;
      }

      &:hover {
        background: ${(props: ButtonProps) =>
          props.color
            ? transparentize(0.9, `${props.color}`)
            : transparentize(0.9, '#166649')}!important;
      }
    `};
`;
