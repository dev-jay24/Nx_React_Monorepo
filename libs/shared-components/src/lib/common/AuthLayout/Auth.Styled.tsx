// import { theme } from 'style/Theme';

import { theme } from '@msr-monorepo/shared-style';
import { styled } from 'styled-components';

export const AuthWrapper = styled.section`
  &.authLayout {
    padding: 16px;
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .authWrapper {
      max-width: 600px;
      margin: 0 auto;
      width: 100%;

      &.authBg {
        background-color: ${theme?.color?.white};
        border-radius: 10px;
        padding: 40px 30px;
        position: relative;
      }

      .title {
        margin: 0 0 50px;
        color: #ffffff;
      }
    }
    .authContent {
      max-width: 535px;
      width: 100%;
      margin: auto;
      padding: 9px 0;
    }
    .copyright {
      color: rgba(0, 0, 0, 0.25);
      font-size: 14px;
      font-weight: 400;
      margin-top: 40px;
    }

    .logoLg {
      width: 150px;
      height: 150px;
      margin: 20px;
      object-fit: contain;
    }

    .checkbox-text {
      line-height: 22px;
    }

    .forgot-link {
      font-size: 16px;
    }
  }
`;
