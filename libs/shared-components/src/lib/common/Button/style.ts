import { responsive, theme } from '@msr-monorepo/shared-style';
import { Button } from 'antd';

import styled from 'styled-components';

export const Wrapper = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  padding: 12px 16px;
  height: 48px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 4px;
  &.w-160 {
    width: 160px;
  }
  &.fontMd {
    font-size: 16px;
  }
  &.fontLg {
    font-size: 24px;
  }
  /*--------------- VARIANTS ---------------*/
  /* Default Button */
  &.ant-btn-default {
    .ant-btn-icon:not(:last-child) {
      margin-inline-end: 10px;
      svg {
        width: 24px;
        height: 24px;
      }
    }
    &:not(:disabled):not(.ant-btn-disabled):hover {
    }
  }

  /* Primary Button */
  &.ant-btn-primary {
    width: 188px;
    &:not(:disabled):not(.ant-btn-disabled):hover {
    }
    &:disabled {
    }
  }

  &.ant-btn-text {
    padding: 0;
    margin: 0;
    height: 100%;
    border: none;
    &:not(:disabled):not(.ant-btn-disabled):hover {
      background-color: transparent;
    }
  }

  /*--------------- SIZES ---------------*/
  &.ant-btn-lg {
    padding: 14px 16px;
    height: 56px;
    line-height: 24px;
    .ant-btn-icon:not(:last-child) {
      margin-inline-end: 12px;
      svg {
        width: 28px;
        height: 28px;
      }
    }
  }

  &.ant-btn-sm {
    /* padding: 10px 16px; */
    height: 39px;
    width: auto;
    line-height: 18px;
    .ant-btn-icon:not(:last-child) {
      margin-inline-end: 8px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  ${responsive('xs')`
    height: 46px;
    &.ant-btn-lg {
      padding: 12px 16px;
      height: 46px;
      font-size: 14px;
      line-height: 20px;
      .ant-btn-icon:not(:last-child) {
        margin-inline-end: 12px;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  `}
`;
