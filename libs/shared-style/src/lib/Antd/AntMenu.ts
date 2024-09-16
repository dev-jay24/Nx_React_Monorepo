import { theme } from '../Theme';

import { createGlobalStyle } from 'styled-components';

export const AntMenu = createGlobalStyle`

// .ant-menu-light.ant-menu-inline .ant-menu-item.ant-menu-item-selected{
//    border-right: 3px solid ${theme?.color?.tertiary}
// }
// .ant-menu-light.ant-menu-inline .ant-menu-item.ant-menu-item-active:active{
//    border-right: 3px solid ${theme?.color?.tertiary}
// }   

.ant-layout .ant-layout-sider-trigger{
    text-align: left;
    padding: 0 24px;
    background:${theme?.color?.background}
}
.ant-menu-light.ant-menu-root.ant-menu-inline{
    border-inline-end: 3px solid ${theme?.color?.background};
}

.ant-menu-title-content{
    font-size:16px
}

`;
