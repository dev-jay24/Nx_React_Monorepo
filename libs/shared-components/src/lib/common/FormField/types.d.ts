import { ColProps } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';

type NameType = string | number | (string | number)[];
export interface IRenderInputProps {
  //  COLUMN
  col?: any;
  colClassName?: string;
  colOffSet?: any;
  offSetPull?: any;
  // FORM_ITEM
  name?: NameType;
  label?: string;
  rules?: any;
  help?: React.ReactNode | string;
  // FORM_INPUT
  type?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  min?: number | string;
  max?: number | string;
  minLength?: number;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  addonAfter?: any;
  addonBefore?: any;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  allowClear?: any;
  size?: SizeType;
  required?: boolean;
  defaultValue?: string;
  tooltip?: any;
  readOnly?: boolean;
  dependencies?: any;
}

export interface IRenderCheckBox {
  col?: any;
  colClassName?: string;
  colOffSet?: any;
  name?: NameType;
  label?: string;
  className?: string;
  checkBoxName?: string;
  required?: boolean;
  rules?: any;
  children?: any;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (event) => void;
  checked?: boolean;
  initialValue?: boolean;
  value?: boolean;
}

export interface IRenderCheckboxProps {
  col?: any;
  colClassName?: string;
  colOffSet?: any;
  name?: string | number | (string | number)[];
  label?: string;
  className?: string;
  checkboxName?: string;
  required?: boolean;
  value?: any;
  onChange?: (checkedValues: string[]) => void;
  optionLabel?: any;
  rules?: any;
  disabled?: boolean;
  defaultValues?: any;
}

export interface IRenderSelectProps {
  col?: any;
  colClassName?: string;
  colOffSet?: any;
  name?: NameType;
  label?: string;
  rules?: any;
  required?: boolean;
  onChange?: any;
  value?: any;
  className?: string;
  optionLabel?: any;
  disabled?: boolean;
  onSelect?: any;
  showSearch?: boolean;
  mode?: any;
  placeholder?: string;
  allowClear?: boolean;
  defaultValue?: any;
  prefixIcon?: any;
  suffixIcon?: any;
}

export interface IReactQuillProps {
  col?: ColProps;
  colClassName?: string;
  colOffset?: number;
  offsetPull?: number;
  name?: NameType;
  label?: string;
  rules?: any;
  showCount?: boolean;
  disabled?: boolean;
  className?: string;
  cols?: number;
  rows?: number;
  placeholder?: string;
  maxLength?: number;
  allowClear?: boolean;
  extraClass?: string;
  colWidth?: number;
  onChange?: any;
  placeholder?: string;
  formLabel?: string;
}

export interface IFileUploadProps {
  form?: FormInstance<any>;
  col?: any;
  colClassName?: string;
  moduleName: string;
  btnText?: string;
  colOffSet?: any;
  block?: boolean;
  label?: any;
  required?: boolean;
  rules?: any;
  fileList?: any;
  name?: NameType;
  maxCount?: number;
  onChange?: any;
  accept?: string;
  onRemove?: any;
  showProgress?: boolean;
  progressPercentage?: any;
  multiple?: boolean;
  listType?: any;
  onPreview?: any;
  action?: any;
  data?: any;
  beforeUpload?: any;
  children?: any;
  defaultFileList?: any;
  customRequest?: any;
  labelCol?: any;
  wrapperCol?: any;
  note?: any;
  disabled?: boolean;
}
