import { theme } from '../Theme';

import { createGlobalStyle } from 'styled-components';

export const AntPagination = createGlobalStyle`

.ant-pagination.ant-table-pagination li+li{
    margin-inline-end: 8px;
}

.ant-pagination.ant-pagination-mini:not(.ant-pagination-disabled) .ant-pagination-item:not(.ant-pagination-item-active){
border: 1.5px solid ${theme?.color?.gray}
}

.ant-pagination.ant-pagination-mini .ant-pagination-prev .ant-pagination-item-link{
    border-radius: 4px;
    border: 1.5px solid ${theme?.color?.gray};

}

.ant-pagination.ant-pagination-mini .ant-pagination-next .ant-pagination-item-link{
    border-radius: 4px;
    border: 1.5px solid ${theme?.color?.gray};

}


`;
