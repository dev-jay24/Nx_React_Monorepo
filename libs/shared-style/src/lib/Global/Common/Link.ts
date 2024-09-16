import { theme } from '../../Theme';

import { createGlobalStyle } from 'styled-components';

export const Link = createGlobalStyle`

.tableLink{
color:${theme?.color?.primary}
}

.noDecoration{
text-decoration: none
}

`;
