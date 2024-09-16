import { theme } from '../../Theme';

import { createGlobalStyle } from 'styled-components';

const PhoneInputStyle = createGlobalStyle`

.special-label{
    display: none;
}

.ant-form-item.phoneNumberInput .ant-form-item-control-input{
padding: 0;
}

.ant-form-item .ant-form-item-control-input-content{
    width: 100%;
    height: 100%;
}

.ant-form-item.phoneNumberInput .ant-form-item-control-input input::placeholder{
  color: ${theme?.color?.primaryLight};
}


.ant-form-item.phoneNumberInput .ant-form-item-control-input input{
    border-radius: 4px;
    background-color: ${theme?.color?.inputBox};    
    width: 100%;
    height: 100%;
    font-family: ${theme?.font?.family?.GentiumBasic};
    font-size: 20px;
    padding: 9.5px 14px 9.5px 45px;
    
}

.react-tel-input {
 height: 100%;
 width: 100%;
}

.react-tel-input .form-control{
border: 0;
}

.react-tel-input .selected-flag .arrow{
    display: none;
}

.react-tel-input .flag-dropdown{
    cursor: default;
    border: 0;
    background-color:${theme?.color?.transparent};
}

.react-tel-input .selected-flag{
    padding-left: 14px;
    cursor: default;
   
}

.ant-form-item.phoneNumberInput .ant-form-item-control-input{
    border: 1px solid ${theme?.color?.primaryBorder};
    height: 56px;
    border-radius: 4px;
}

/* .ant-form-item-control-input-content{
    display: flex;
    gap: 20px;
} */

.align-image-and-text{
    display: flex;
    gap: 16px;
}

.ant-form-item-has-error.ant-form-item.phoneNumberInput .ant-form-item-control-input{
    border: 1px solid ${theme?.color?.danger};
}

.ant-form-item.phoneNumberInput .ant-form-item-control-input:focus-within{
    border: 1px solid ${theme?.color?.primary};
}

.ant-form-item-has-error.ant-form-item.phoneNumberInput .ant-form-item-control-input:focus-within{
    border: 1px solid ${theme?.color?.danger};
}


`;

export default PhoneInputStyle;
