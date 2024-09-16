import { responsive } from '@msr-monorepo/shared-style';
import styled from 'styled-components';

export const FormTitle = styled.h1`
  color: #121645;
  margin-bottom: 20px;
  letter-spacing: 0.1em;
  /* text-transform: uppercase; */
  text-align: center;
  font-style: normal;
  line-height: 24px;
`;

export const FormHeader = styled.h3`
  font-style: normal;
  line-height: 22px; /* 157.143% */
  color: #00000073;
  text-align: center;
  max-width: 560px;
  margin: 0 auto 28px 0;
  // ${responsive('sm')`
        margin: 0 auto 30px;
    `}
`;

export const FormDesc = styled.p`
  font-style: normal;
  line-height: 28px;
  ${responsive('sm')`
        font-size: 14px;
        line-height: 1.5;
    `}
`;

export const FormFooter = styled.p`
  color: var(--character-secondary-45, rgba(0, 0, 0, 0.45));
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

export const FomFooterDesc = styled.span`
  color: #121645;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

export const BackBtn = styled.div`
  color: #121644;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  gap: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
