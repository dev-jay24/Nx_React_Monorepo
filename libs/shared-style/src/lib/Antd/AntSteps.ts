import { theme } from '../Theme';

import { createGlobalStyle } from 'styled-components';

export const AntSteps = createGlobalStyle`

.ant-steps.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-description{
    max-width: 80%;
    width: 100%;
}

.ant-steps.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
    display: flex;
    flex: 1;
}

.ant-steps .ant-steps-item-title{
color:${theme?.color?.primary};
}

.ant-steps .ant-steps-item-finish {
    .ant-steps-item-icon{
        background-color:${theme?.color?.transparent};
        border-color:${theme?.color?.primary}
    }
}


.ant-steps .ant-steps-item-wait
{
    &>.ant-steps-item-container
    {
        &>.ant-steps-item-content
        {
            &>.ant-steps-item-title
            {
                color:${theme?.color?.primary};
            }
        }
    }

     .ant-steps-item-icon{
    background-color:${theme?.color?.transparent};
    border-color:${theme?.color?.primary};
    &>.ant-steps-icon{
        color:${theme?.color?.primary};
    }
    }
}


.tripStep{
    .ant-steps-item{
       min-height: 90px;
    }}


`;
