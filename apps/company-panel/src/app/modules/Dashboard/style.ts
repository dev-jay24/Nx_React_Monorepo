import { boxShadow, theme } from '@msr-monorepo/shared-style';
import styled from 'styled-components';

export const Wrapper = styled.div`
  .dashboardInfo {
    padding: 30px;
    height: 100%;
    background-color: ${theme?.color?.white};
    border-radius: 5px;
    ${boxShadow('10px 10px 20px 5px rgba(0, 0, 0, 0.05)')}
    .number {
      display: inline-block;
      margin-bottom: 3px;
      font-weight: 700;
      font-size: 30px;
      color: ${theme?.color?.black};
    }

    .infoTitle {
      font-weight: 400;
      font-size: 16px;
      color: ${theme?.color?.dark};
    }
  }
`;
