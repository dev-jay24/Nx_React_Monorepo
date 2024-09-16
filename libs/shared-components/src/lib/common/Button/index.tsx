import React, { ReactNode } from 'react';

import { ButtonProps } from 'antd';

import { Wrapper } from './style';

interface IButtonProps extends ButtonProps {
  icon?: ReactNode;
  block?: boolean;
  width?: string | number;
  height?: string | number;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  children,
  disabled,
  onClick,
  icon,
  type = 'default',
  htmlType = 'button',
  size = 'middle',
  target,
  href,
  block,
  ghost,
  width,
  height,
  loading,
}) => {
  return (
    <Wrapper
      loading={loading}
      block={block}
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
      htmlType={htmlType}
      size={size}
      target={target}
      href={href}
      icon={icon}
      ghost={ghost}
      style={{ width: `${width}`, height: `${height}` }}
    >
      {children}
    </Wrapper>
  );
};
