import { ButtonBase } from '@material-ui/core';
import styled from 'styled-components';

export const ButtonRipple = styled(ButtonBase)`
  height: 40px !important;
  overflow: hidden !important;
  background: #fff !important;
  width: 280px;
  border: 1px solid ${props => props.theme.primaryColor}!important;
  border-radius: 8px !important;
  transition: 0.3s ease-in-out !important;
  font-family: 'Roboto', sans-serif;
  white-space: nowrap;
  display: flex;

  > div {
    background: ${props => props.theme.primaryColor};
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px !important;
    z-index: 9999;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 12px;

    font-size: 14px;
    font-weight: 500;
  }
`;
