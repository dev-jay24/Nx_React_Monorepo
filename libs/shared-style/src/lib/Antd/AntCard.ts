import { theme } from '../Theme';

import { createGlobalStyle } from 'styled-components';

export const AntCard = createGlobalStyle`

.horseTripCard .ant-card .ant-card-body
{
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    padding: 8px 12px 24px;
    

} 

.horseTripCard .ant-card-bordered{
    border: 1px solid ${theme?.color?.primaryBorder};
}
`;
