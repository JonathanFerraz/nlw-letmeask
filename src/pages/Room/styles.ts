import styled from 'styled-components';

export const PageRoom = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;

    > div {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
      }
    }
  }
`;

export const Main = styled.div`
  max-width: 800px;
  margin: 0 auto;

  form {
    margin-bottom: 2rem;

    textarea {
      width: 100%;
      border-radius: 8px;
      padding: 1rem;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;

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
          color: ${props => props.theme.textColor};
          font-weight: 500;
          font-size: 14px;
        }
      }

      > span {
        font-size: 14px;
        color: #737380;
        font-weight: 500;

        button {
          background: transparent;
          font-size: 14px;
          font-weight: 500;
          color: ${props => props.theme.primaryColor};
          text-decoration: underline;
        }
      }
    }
  }
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: ${props => props.theme.textColor};
  }

  span {
    margin-left: 1rem;
    background: #e559f9;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    color: ${props => props.theme.textWhite};
    font-weight: 500;
    font-size: 14px;
  }
`;
