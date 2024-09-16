import { theme } from '@msr-monorepo/shared-style';
import { Col } from 'antd';

import styled from 'styled-components';

export const Wrapper = styled.div``;

export const UploadWrapper = styled.div`
  .ant-upload-wrapper {
    .ant-upload {
      &.ant-upload-select {
      }
    }
  }
  &.block {
    .ant-upload-select {
      display: block;
    }
  }
`;

export const FileUploadColumn = styled(Col)`
  .ant-upload {
    width: 100%;
  }
  .ant-upload-wrapper .ant-upload-list .ant-upload-list-item {
    .ant-upload-list-item-name {
      line-height: 1.24;
    }
    .ant-upload-list-item-actions .ant-upload-list-item-action.ant-btn-sm {
      height: 30px;
      &:hover {
        .anticon {
          color: ${theme?.color?.white};
        }
      }
    }
  }
`;
