import { boxShadow } from '../Global/Common/Mixin';
import { theme } from '../Theme';

import { createGlobalStyle } from 'styled-components';

export const AntTabs = createGlobalStyle`
.ant-tabs-nav
{
    padding: 16px 24px;
    background: ${theme.color.white};
    ${boxShadow('10px 10px 20px 5px rgba(0, 0, 0, 0.05)')}
}

.ant-tabs-content{
    padding: 16px 24px;
    background: ${theme.color.white};
    ${boxShadow('10px 10px 20px 5px rgba(0, 0, 0, 0.05)')}
}
`;
