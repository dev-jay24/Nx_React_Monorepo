import { createGlobalStyle } from 'styled-components';

export const AntModal = createGlobalStyle`

.ant-modal .ant-modal-content{
   padding: 32px;
   //  width: 520px;

}

.ant-modal.FaqModel .ant-modal-content{
   padding: 32px;
    width: 750px;

}

.ant-modal.FaqModel
{
   top: 0;
    height: 100vh;
    justify-content: center;
    display: flex;
    align-items: center;
}

.ant-modal .ant-modal-footer{
margin-top: 24px;
}

// .ant-modal
// {
//    top: 0;
//     height: 100vh;
//     justify-content: center;
//     display: flex;
//     align-items: center;
// }

`;
