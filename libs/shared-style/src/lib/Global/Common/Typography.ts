import { createGlobalStyle } from 'styled-components';

import { responsive } from './Mixin';

export const Typography = createGlobalStyle`
/* Fonts Size */
h1 {
    font-size: 30px;
    font-weight: bold;
}

h2 {
    font-size: 24px;
}

h3 {
    font-size: 20px;
}

h4 {
    font-size: 16px;
}

h5 {
    font-size: 16px;
}

p {
    font-size: 16px;
}

${responsive('sm')`
    h1 {
        font-size: 35px;
    }

    h2 {
        font-size: 28px;
    }

    h3 {
        font-size: 24px;
    }

    h4 {
        font-size: 20px;
    }

    h5 {
        font-size: 16px;
    }

    p {
        font-size: 16px;
    }
`}

`;
