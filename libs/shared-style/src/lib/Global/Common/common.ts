import { createGlobalStyle } from 'styled-components';

import { theme } from '../../Theme';
import { boxShadow } from './Mixin';

export const Common = createGlobalStyle`

.container-fluid {
    width: 100%;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
}

.container {
    width: 100%;
    max-width: 1230px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;

    &.lg {
        width: 1290px;
    }

    &.md {
        width: 908px;
    }
}

.shadow-paper {
	height: 100%;
	background: ${theme.color.white};
	padding: 16px 24px;
	border-radius: 0px;
    ${boxShadow('10px 10px 20px 5px rgba(0, 0, 0, 0.05)')}

	&.auto-height {
		height: auto;
	}

    .pageTitle{
       
        font-weight: 600;
        line-height: 28px;
    }

	.shadow-paper-scroll {
		height: 100%;
		overflow: hidden;
		overflow-y: auto;
		margin: 0 -20px;
		padding: 0 20px;
	}

	+.shadow-paper {
		margin-top: 20px;
	}

    &.no-bg{
        background-color: transparent;
    }

    &.pad-sm{
        padding: 10px 20px;
    }

    &.pad-md{
        padding: 15px 20px;
    }

	&.no-padd {
		padding: 0;
	}

	.heading-row {
		padding: 20px 0;
	}
}

/* Text Alignment */
.text-center {
    text-align: center;
}

.text-left {
    text-align: left;
}

.text-right {
    text-align: right;
}

/* Text Colors */
.text-success {
    color: ${theme.color.success};
}

.text-danger {
    color: ${theme.color.danger};
}

.text-warning {
    color: ${theme.color.warning};
}

.text-info {
    color: ${theme.color.info};
}

/* Width & Height */
.w-100 {
    width: 100%;
}

.max-w-100 {
    max-width: 100%;
}

.h-100 {
    height: 100%;
}

.h-100vh {
    min-height: 100vh;
}

.contentContainer{
padding: 12px 22px;
display: flex;
gap: 16px;
flex-flow: column;
}

a {
    text-decoration: underline;
color: ${theme?.color?.primary};
}

.w-full{
width: 100%;
}

.capitalize{
text-transform: capitalize;
}


.customEllipsis{
display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}


`;
