import { shade } from 'polished';
import styled from 'styled-components';

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textWhite};

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 1rem;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 1rem;
      color: ${props => props.theme.background};
    }
  }
`;

export const MainContent = styled.main`
  flex: 8;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    @keyframes fade {
      0% {
        opacity: 0;
        transform: translateX(50px);
      }
    }

    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;
    animation: 0.7s ease 0s 1 normal none running fade;

    > img {
      align-self: center;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: #fff;
        border: 1px solid ${props => props.theme.lightGrey};
      }

      button {
        margin-top: 1rem;
      }

      button,
      input {
        width: 100%;
      }
    }
  }
`;

export const Divider = styled.div`
  font-size: 14px;
  color: ${props => props.theme.lightGrey};

  margin: 32px 0;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.lightGrey};
    margin-right: 1rem;
  }

  &:after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.lightGrey};
    margin-left: 1rem;
  }
`;
