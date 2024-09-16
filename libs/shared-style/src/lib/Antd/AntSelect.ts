import { theme } from '../Theme';

import { createGlobalStyle } from 'styled-components';

export const AntSelect = createGlobalStyle`
    .ant-select {
        .ant-select-selector{
            
            padding-left: 14px;
        }
        &.ant-select-multiple {
            .ant-select-selection-search{
                margin-inline-start:-5px
            }
        }
    }
    .ant-select-multiple .ant-select-selection-overflow .ant-select-selection-item-content {
      color: ${theme?.color?.primary}
    }
    .ant-select-dropdown{
        border-radius: 7px;
        background-color: ${theme?.color?.selectBackground};
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.20);
        padding: 0;
        &.selectUppercase{
            .ant-select-item{
            text-transform: uppercase
            }
        }
        .ant-select-item {
            font-family: ${theme?.font?.family?.GentiumBasic};
            font-size: 14px;
            line-height: 140%; 
            border-radius: 0;
            padding: 14px 16px;
            text-align: center;
            font-weight: 400;
            text-align: left;
            &:hover{
            background-color: #ededed;      
            }
            &.ant-select-item-option-selected,&.ant-select-item-option-selected.ant-select-item-option-active{
            background-color: #ededed;
            }
            &.ant-select-item-option-active{
            background-color: transparent;
            }
        }
}
    

.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    min-height: 56px;
}

.ant-select-single.ant-select-lg {
    font-size: 16px;
    height: 56px;
}
`;
