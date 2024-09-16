import { useMemo } from 'react';

import { Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import {
  formatDate,
  formatStringToTitleCase,
  getAdders,
  ROUTES,
  statusToTagNameAndColorConverter,
} from '@msr-monorepo/shared-utils';
import { CommonTable } from '@msr-monorepo/shared-components';

interface IProps {
  isLoading?: boolean;
  // data: TripList;
  data: any;
}

const RecentTripTable: React.FC<IProps> = ({ isLoading, data }: any) => {
  const tableData = useMemo(() => {
    return data && data?.totalRecords > 0
      ? data.tripList.map((item: any) => ({ ...item, key: item.rowId }))
      : [];
  }, [data]);

  const columns: ColumnsType<any> = [
    {
      title: 'Horse Owner',
      dataIndex: 'horseOwner',
      key: 'horseOwner',
      className: 'capitalize',
      sorter: true,
      ellipsis: {
        showTitle: false,
      },
      render: (data) => <>{data ?? '-'}</>,
    },
    {
      title: 'Transport Company',
      dataIndex: 'transportCompany',
      key: 'transportCompany',
      className: 'capitalize',
      sorter: true,
      ellipsis: {
        showTitle: false,
      },
      render: (data) => <>{data ?? '-'}</>,
    },
    {
      title: 'Driver Name',
      dataIndex: 'driver',
      key: 'driver',
      className: 'capitalize',
      sorter: true,
      ellipsis: {
        showTitle: false,
      },
      render: (data) => <>{data ?? '-'}</>,
    },
    {
      title: 'Trip Name',
      dataIndex: 'name',
      key: 'name',
      className: 'capitalize',
      sorter: true,
      ellipsis: {
        showTitle: false,
      },
      render: (data) => <>{data ?? '-'}</>,
    },
    {
      title: 'Trip Type',
      dataIndex: 'tripType',
      key: 'tripType',
      className: 'capitalize',
      sorter: true,
      ellipsis: {
        showTitle: false,
      },
      render: (data) => <>{formatStringToTitleCase(data) ?? '-'}</>,
    },
    {
      title: 'Pickup Date',
      dataIndex: 'pickUpDate',
      key: 'pickUpDate',
      sorter: true,
      ellipsis: {
        showTitle: false,
      },
      render: (data, fullData) => {
        if (!data) {
          return <>-</>;
        }

        return (
          <div className="d-flex flex-column ">
            <p className="customEllipsis">
              {formatDate(data)}
              {fullData?.isFlexiblePickUpDate &&
                ` To ${formatDate(fullData?.lastPickUpDate)}`}
            </p>
            {fullData?.returnDate && (
              <p className="customEllipsis mt-10">
                {formatDate(fullData?.returnDate)}
                {fullData?.isFlexibleReturnDate &&
                  fullData?.lastReturnDate &&
                  ` To ${formatDate(fullData?.lastReturnDate)}`}
              </p>
            )}
          </div>
        );
      },
    },
    {
      title: 'Pickup Location',
      dataIndex: 'pickUp',
      key: 'pickUp',

      className: 'capitalize tableAddress',
      render: (address, allData) => {
        if (!address) {
          return <>-</>;
        }
        const pickUpStr = getAdders(address);
        const returnPickUpStr = allData?.returnPickUp
          ? getAdders(allData?.returnPickUp)
          : '';

        return (
          <div className="d-flex flex-column ">
            <Tooltip placement="topLeft" title={pickUpStr}>
              <p className="customEllipsis">{pickUpStr}</p>
            </Tooltip>
            {returnPickUpStr && (
              <Tooltip
                placement="topLeft"
                title={returnPickUpStr}
                className="mt-8"
              >
                <p className="customEllipsis">{returnPickUpStr}</p>
              </Tooltip>
            )}
          </div>
        );
      },
    },
    {
      title: 'Drop Location',
      dataIndex: 'dropOff',
      key: 'dropOff',
      className: 'capitalize tableAddress',
      render: (address, allData) => {
        if (!address) {
          return <>-</>;
        }
        const dropOffStr = getAdders(address);
        const returnDropOffStr = allData?.returnDropOff
          ? getAdders(allData?.returnDropOff)
          : '';

        return (
          <div className="d-flex flex-column ">
            <Tooltip placement="topLeft" title={dropOffStr}>
              <p className="customEllipsis">{dropOffStr}</p>
            </Tooltip>
            {returnDropOffStr && (
              <Tooltip
                placement="topLeft"
                title={returnDropOffStr}
                className="mt-8"
              >
                <p className="customEllipsis">{returnDropOffStr}</p>
              </Tooltip>
            )}
          </div>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'tripStatus',
      key: 'tripStatus',
      sorter: true,
      render: (data) => {
        const tagData = statusToTagNameAndColorConverter(data);
        return (
          <span>
            <Tag className="capitalize" color={tagData.color}>
              {tagData.tagName}
            </Tag>
          </span>
        );
      },
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      className: 'text-center',
      render: (_, data) => {
        return (
          <Link
            to={`${ROUTES.viewTripDetail(data?._id)}`}
            className="tableLink noDecoration mr-16"
          >
            View
          </Link>
        );
      },
    },
  ];

  return (
    <div className="shadow-paper">
      <CommonTable
        loading={isLoading}
        columns={columns}
        pagination={false}
        dataSource={tableData}
        scrollX={true}
        hidePagination={true}
      />
    </div>
  );
};

export default RecentTripTable;
