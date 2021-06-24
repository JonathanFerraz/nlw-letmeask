import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  &:not(:first-child) {
    margin-top: 0.5rem;
  }

  p {
    color: ${props => props.theme.textColor};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: #737380;
        font-size: 14px;
      }
    }
  }
`;

export const ButtonsWrapper = styled.div``;
