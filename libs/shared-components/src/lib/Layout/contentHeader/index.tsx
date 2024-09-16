import { ReactNode } from 'react';

import { Col, Row, Space } from 'antd';

import StyledBreadcrumb, { BreadcrumbItem } from '../breadcrumb';

interface IProps {
  pageTitle?: string;
  button?: ReactNode;
  gap?: number;
  items?: BreadcrumbItem[];
}

export const ContentHeader = (props: IProps) => {
  return (
    <div className="shadow-paper">
      <Row gutter={[0, 15]} align={'middle'} className="pb-12">
        {props.items && <StyledBreadcrumb items={props.items} />}
      </Row>
      <Row gutter={[0, 15]} align={'middle'}>
        <Col xs={props?.button ? 18 : 24}>
          <h1 className="pageTitle">{props?.pageTitle}</h1>
        </Col>
        {props?.button && (
          <Col xs={6}>
            <div className="text-right">
              <Space size={props?.gap ?? 10}>{props?.button}</Space>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};
