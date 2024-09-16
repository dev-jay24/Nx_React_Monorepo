import React, { useState } from 'react';

import { ArrowDownOutlined, InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Checkbox, Col, Flex, Form, Image, Input, Modal, Select, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Upload, { UploadChangeParam, UploadFile } from 'antd/es/upload';
import PhoneInput from 'react-phone-input-2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { FileUploadColumn } from './style';
import {
  IFileUploadProps,
  IReactQuillProps,
  IRenderCheckBox,
  IRenderCheckboxProps,
  IRenderInputProps,
  IRenderSelectProps
} from './types';

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/JPEG'];

export const RenderTextInput = (props: IRenderInputProps) => {
  const {
    col,
    colClassName,
    colOffSet,
    offSetPull,
    name,
    label,
    rules,
    help,
    type,
    placeholder,
    value,
    disabled,
    min,
    max,
    minLength,
    maxLength,
    onChange,
    className,
    addonAfter,
    addonBefore,
    suffix,
    prefix,
    allowClear,
    required = false,
    size,
    tooltip,
    readOnly
  } = props;
  return (
    <Col
      xs={col?.xs}
      sm={col?.sm}
      md={col?.md ? col?.md : col}
      lg={col?.lg}
      xl={col?.xl}
      xxl={col?.xxl}
      className={colClassName ?? ''}
      offset={colOffSet}
      pull={offSetPull}
    >
      <Form.Item
        name={name ?? ''}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label={label}
        rules={rules}
        help={help ?? null}
        required={required}
        tooltip={tooltip}
      >
        <Input
          readOnly={readOnly}
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          className={className}
          addonAfter={addonAfter ?? null}
          addonBefore={addonBefore ?? null}
          suffix={suffix}
          prefix={prefix}
          allowClear={allowClear}
          size={size ?? 'middle'}
        />
      </Form.Item>
    </Col>
  );
};

export const RenderPasswordInput = ({
  col,
  colClassName,
  colOffSet,
  name,
  label,
  rules,
  placeholder,
  prefix,
  offSetPull,
  required,
  dependencies
}: IRenderInputProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <Col
      xs={col?.xs}
      sm={col?.sm}
      md={col?.md ? col?.md : col}
      lg={col?.lg}
      xl={col?.xl}
      xxl={col?.xxl}
      className={colClassName ?? ''}
      offset={colOffSet}
      pull={offSetPull}
    >
      <Form.Item
        name={name ?? ''}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label={label}
        rules={rules || null}
        required={required}
        dependencies={dependencies}
      >
        <Input.Password
          placeholder={placeholder}
          size="large"
          prefix={prefix ?? null}
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible
          }}
        />
      </Form.Item>
    </Col>
  );
};

export const RenderCheckBox = ({
  col,
  colClassName,
  colOffSet,
  name,
  label,
  rules,
  required,
  onChange,
  checked,
  className,
  children,
  value,
  initialValue,
  defaultChecked
}: IRenderCheckBox) => {
  return (
    <Col
      xs={col?.xs}
      sm={col?.sm}
      md={col?.md ? col?.md : col}
      lg={col?.lg}
      xl={col?.xl}
      xxl={col?.xxl}
      className={colClassName ?? ''}
      offset={colOffSet}
    >
      <Form.Item
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name={name}
        label={label}
        rules={rules}
        required={required}
        initialValue={initialValue}
      >
        <Checkbox
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          className={className}
        >
          {children}
        </Checkbox>
      </Form.Item>
    </Col>
  );
};

export const RenderCheckboxGroup = ({
  col,
  colClassName,
  colOffSet,
  name,
  label,
  rules,
  required,
  checkboxName,
  onChange,
  value,
  className,
  optionLabel,
  disabled,
  defaultValues
}: IRenderCheckboxProps) => {
  return (
    <Col
      xs={col?.xs}
      sm={col?.sm}
      md={col?.md ? col?.md : col}
      lg={col?.lg}
      xl={col?.xl}
      xxl={col?.xxl}
      className={colClassName ?? ''}
      offset={colOffSet}
    >
      <Form.Item
        name={name}
        label={label}
        rules={rules}
        required={required}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Checkbox.Group
          defaultValue={defaultValues}
          name={checkboxName}
          onChange={onChange}
          value={value}
          className={className}
          disabled={disabled}
        >
          {optionLabel?.map((item: any) => (
            <Checkbox value={item.value} key={item._id}>
              {item.label}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Form.Item>
    </Col>
  );
};

export const RenderSelectInput = ({
  col,
  colClassName,
  colOffSet,
  name,
  label,
  rules,
  required,
  onChange,
  value,
  className = '',
  optionLabel,
  disabled,
  onSelect,
  showSearch,
  mode,
  placeholder,
  allowClear,
  defaultValue,
  prefixIcon = '',
  suffixIcon
}: IRenderSelectProps) => {
  return (
    <Col
      xs={col?.xs}
      sm={col?.sm}
      md={col?.md ? col?.md : col}
      lg={col?.lg}
      xl={col?.xl}
      xxl={col?.xxl}
      className={colClassName ?? ''}
      offset={colOffSet}
    >
      <div className={`customSelect ${prefixIcon && 'selectWithIcon'} ${className ?? className}`}>
        <Form.Item
          name={name}
          label={label}
          rules={rules}
          required={required}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Select
            value={value}
            onSelect={onSelect}
            showSearch={showSearch}
            mode={mode}
            placeholder={placeholder}
            disabled={disabled}
            allowClear={allowClear}
            defaultValue={defaultValue}
            onChange={onChange}
            optionFilterProp="children"
            suffixIcon={
              <div className="selectIcons">
                {prefixIcon ? (
                  <>
                    <span className="prefixIcon">{prefixIcon}</span>
                    <span className="selectArrowIcon">{suffixIcon || <ArrowDownOutlined />}</span>
                  </>
                ) : (
                  <span className="selectArrowIcon">{suffixIcon || <ArrowDownOutlined />}</span>
                )}
              </div>
            }
          >
            {optionLabel?.map((item: any) => (
              <Select.Option key={item.value} value={item.value} label={item.label}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
    </Col>
  );
};

export const RenderTextArea = (props: any) => {
  return (
    <Col {...props.col}>
      <Form.Item
        name={props.name}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label={props.label}
        rules={props.rules}
        tooltip={props.tooltip}
      >
        <TextArea
          readOnly={props.readOnly}
          showCount={props.showCount}
          disabled={props.disabled}
          className={props.className}
          cols={props.cols}
          rows={props.rows}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          allowClear={props.allowClear}
        />
      </Form.Item>
    </Col>
  );
};

export const RenderCKEditor = ({
  colWidth,
  colClassName,
  colOffset,
  name,
  rules,
  onChange,
  placeholder,
  formLabel
}: IReactQuillProps) => {
  return (
    <Col xl={colWidth} className={colClassName} offset={colOffset}>
      <Form.Item
        name={name}
        label={formLabel}
        rules={rules}
        // required={required}
      >
        <ReactQuill placeholder={placeholder} theme="snow" onChange={onChange} />
      </Form.Item>
    </Col>
  );
};

export const RenderSelect = (props: any) => {
  const {
    col,
    colClassName,
    colOffSet,
    offSetPull,
    name,
    label,
    rules,
    help,
    onChange,
    required,
    tooltip,
    options,
    size,
    readOnly,
    showSearch
  } = props;
  return (
    <Col
      xs={col?.xs}
      sm={col?.sm}
      md={col?.md ? col?.md : col}
      lg={col?.lg}
      xl={col?.xl}
      xxl={col?.xxl}
      className={colClassName ?? ''}
      offset={colOffSet}
      pull={offSetPull}
    >
      <Form.Item
        name={name ?? ''}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label={label}
        rules={rules}
        help={help ?? null}
        required={required}
        tooltip={tooltip}
      >
        <Select
          disabled={readOnly}
          size={size}
          showSearch={showSearch}
          placeholder="Select a person"
          optionFilterProp="label"
          onChange={onChange}
          options={options}
        />
      </Form.Item>
    </Col>
  );
};

// common phone number field

export const RenderPhoneNumber = (props: any) => {
  const {
    col,
    colClassName,
    colOffSet,
    offSetPull,
    name,
    label,
    rules,
    help,
    required,
    tooltipContent,
    tooltipIcon,
    hidden,
    addOnBefore,
    value,
    validateStatus,
    placeholder,
    readOnly,
    form
  } = props;

  return (
    <Col
      xs={col?.xs}
      sm={col?.sm}
      md={col?.md ? col?.md : col}
      lg={col?.lg}
      xl={col?.xl}
      xxl={col?.xxl}
      className={colClassName ?? ''}
      offset={colOffSet}
      pull={offSetPull}
    >
      <Form.Item
        name={name}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label={label}
        hidden={hidden}
        rules={rules}
        help={help ?? null}
        required={required}
        initialValue={value}
        validateStatus={validateStatus}
        tooltip={
          tooltipContent && {
            title: tooltipContent,
            icon: tooltipIcon ?? <InfoCircleOutlined />
          }
        }
        className={`phoneNumberInput ${addOnBefore && 'inputWithPrefix'}`}
      >
        <PhoneInput
          country="us"
          onlyCountries={['us']}
          disableDropdown={true}
          placeholder={placeholder}
          disableCountryCode={true}
          value={form?.getFieldValue('phoneNumber') ?? ''}
          disabled={readOnly}
          onChange={(value) => {
            form?.setFieldsValue({ phoneNumber: value });
          }}
        />
      </Form.Item>
    </Col>
  );
};

export const RenderUpload: React.FC<IFileUploadProps> = ({
  form,
  col,
  colClassName,
  colOffSet,
  name,
  label,
  rules,
  maxCount = 1,
  accept,
  listType,
  labelCol,
  wrapperCol,
  note,
  moduleName,
  fileList,
  disabled
}) => {
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);

  const uploadButton = (
    <Flex vertical={true} align="center" gap={10}>
      <PlusOutlined className="uploadIcon" />
      <span>Upload</span>
    </Flex>
  );
  const onChange = async ({ file }: UploadChangeParam<UploadFile>) => {
    if (file.status === 'removed') return;

    const isJpgOrPng = IMAGE_TYPES.includes(file.type as string);

    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file as any);
    formData.append('moduleName', moduleName);

    // TODO : upload image api calling

    // try {
    //   const res: any = await imageUpload.imageUpload(formData);
    //   form?.setFieldValue(name, [{ originalName: file.name, serverName: res.data.name }]);
    // } catch (error: any) {
    //   message.error(error?.response?.data?.message || 'Something went wrong please try again!');
    // }
  };
  const onRemove = (file: UploadFile) => {
    const files = form?.getFieldValue(name);
    const filteredFiles = files.filter(
      (f: { originalName: string }) => f.originalName !== file.name
    );

    form?.setFieldValue(name, filteredFiles);
  };

  return (
    <FileUploadColumn
      xs={col?.xs}
      sm={col?.sm}
      md={col?.md ? col?.md : col}
      lg={col?.lg}
      xl={col?.xl}
      xxl={col?.xxl}
      className={colClassName ?? ''}
      offset={colOffSet}
    >
      <Form.Item
        name={name ?? ''}
        labelCol={labelCol ?? { span: 24 }}
        wrapperCol={wrapperCol ?? { span: 24 }}
        label={label}
        rules={rules || null}
      >
        <div className="align-image-and-text">
          <Upload
            className="fileUpload"
            maxCount={maxCount}
            onRemove={onRemove}
            accept={accept ?? 'image/*'}
            onChange={onChange}
            fileList={fileList}
            listType={listType}
            multiple={false}
            beforeUpload={() => {
              return false;
            }}
            disabled={disabled}
            onPreview={() => setPreviewVisible(!previewVisible)}
          >
            {fileList?.length > maxCount - 1 ? null : uploadButton}
          </Upload>
          <Modal
            open={previewVisible}
            onCancel={() => setPreviewVisible(!previewVisible)}
            footer={null}
          >
            <div style={{ maxHeight: '500px' }}>
              <Image
                preview={false}
                width={'100%'}
                height={'100%'}
                className="mt-40 pb-40"
                src={fileList?.[0]?.url}
              />
            </div>
          </Modal>
          <div className="note-text">
            <span className="note-text-secondary"></span>
            {note}
          </div>
        </div>
      </Form.Item>
    </FileUploadColumn>
  );
};
