import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`

@font-face {
    font-family: 'Gentium Basic';
    src: url('/fonts/GentiumBasic-Bold.woff2') format('woff2'),
        url('/fonts/GentiumBasic-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Gentium Basic';
    src: url('/fonts/GentiumBasic-Italic.woff2') format('woff2'),
        url('/fonts/GentiumBasic-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Gentium Basic';
    src: url('/fonts/GentiumBasic-BoldItalic.woff2') format('woff2'),
        url('/fonts/GentiumBasic-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Gentium Basic';
    src: url('/fonts/GentiumBasic.woff2') format('woff2'),
        url('/fonts/GentiumBasic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

`;
