import { theme } from '../Theme';

import { createGlobalStyle } from 'styled-components';

export const AntBadge = createGlobalStyle`
   /* style for notification badge */
   .ant-badge .ant-badge-dot {
              top: 3px;
              left: 12px;
            }


.ant-ribbon.ant-ribbon-placement-end .ant-ribbon-corner {
color:${theme?.color?.primaryLight}
}

.ant-ribbon .ant-ribbon-text {
// font-size: 16px;
}
`;
