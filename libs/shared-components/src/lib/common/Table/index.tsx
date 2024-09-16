import React from 'react';

import { TablePaginationConfig, TableProps } from 'antd';
import { FilterValue, SorterResult } from 'antd/es/table/interface';

import { StyledTable } from './style';

interface CustomProps {
  summaryRow?: React.ReactNode;
  pagination?: Partial<TablePaginationConfig>;
  handleChange?: (
    pagination: TablePaginationConfig,
    _filters: Record<string, FilterValue | null>,
    sorter: SorterResult<any> | SorterResult<any>[]
  ) => void;
  loading?: boolean;
  scrollX?: boolean;
  hidePagination?: boolean;
}

export const TableSummaryCell: React.FC<{
  index: number;
  colSpan: number;
  component: React.ReactNode;
}> = ({ index, colSpan, component }) => (
  <StyledTable.Summary.Cell index={index} colSpan={colSpan}>
    {component}
  </StyledTable.Summary.Cell>
);

const defaultPaginationSettings: Partial<TablePaginationConfig> = {
  showSizeChanger: false,
  // showQuickJumper: true,
  // defaultPageSize: 5,
  // pageSizeOptions: ['5', '10', '20', '50', '100'],
  size: 'small',
  position: ['bottomRight'],
  showTotal: (total) => `Total ${total} items`,
};

export const CommonTable: React.FC<TableProps<any> & CustomProps> = (props) => {
  const {
    pagination,
    summaryRow,
    handleChange,
    loading,
    scrollX,
    hidePagination,
    rowKey,
  } = props;

  return (
    <StyledTable
      size="small"
      {...props}
      rowKey={(rowKey as string) || 'id'}
      pagination={
        !hidePagination && { ...defaultPaginationSettings, ...pagination }
      }
      onChange={handleChange}
      loading={loading}
      scroll={{ x: scrollX as true | undefined }}
      summary={
        summaryRow
          ? () => (
              <StyledTable.Summary fixed="top">
                <StyledTable.Summary.Row>{summaryRow}</StyledTable.Summary.Row>
              </StyledTable.Summary>
            )
          : undefined
      }
    />
  );
};
