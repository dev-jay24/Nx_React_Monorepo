import { theme } from '../Theme';

import { createGlobalStyle } from 'styled-components';

export const AntInput = createGlobalStyle`

.ant-form-item .ant-form-item-control-input-content{
display: flex;  
}

.ant-input-affix-wrapper >input.ant-input
{
    font-size: 20px;
} 
.ant-form-item .ant-form-item-control-input
{
min-height: 32px;
}

.ant-input-affix-wrapper-lg{
height: 56px;
}

.ant-input-outlined.ant-input-status-error:not(.ant-input-disabled) .ant-input-prefix{
    color: ${theme?.color?.primary}
    }

.ant-form-item .ant-checkbox-wrapper {
    align-items: center;
    font-size: 16px;
}

.ant-input-affix-wrapper .ant-input-prefix {
    margin-inline-end: 12px;
}

.ant-select-single.ant-select-lg.ant-select-show-arrow .ant-select-selection-item{
font-size: 20px;
}

.ant-form-item-explain-error{
    font-size: 16px;
}

.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input::placeholder{
    font-size: 20px;
}

.amountInput.ant-input-affix-wrapper .ant-input-prefix {
    margin-inline-end: 4px;
}

.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    min-height: 56px;
}

`;
