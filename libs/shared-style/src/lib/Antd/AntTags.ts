import { theme } from '../Theme';

import { createGlobalStyle } from 'styled-components';

export const AntTags = createGlobalStyle`

.ant-tag{
    text-align: center;
    font-size: 16px;
    border-radius: 20px;
    padding: 0 16px;
    min-width: 70px;
    line-height: 25px;
color: ${theme?.color?.secondary};
    &.clickableTag{ 
    cursor: pointer;
    }
}

.statusTag{
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme?.color?.secondary};

    &.blue{
        border-color: ${theme?.color?.primary};
        color: ${theme?.color?.primary};
    }
 }
`;
