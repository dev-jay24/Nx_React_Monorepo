import { useMemo, useState } from 'react';

import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import {
  formatDate,
  formatStringToTitleCase,
  getAdders,
  ROUTES,
} from '@msr-monorepo/shared-utils';
import { CommonTable } from '@msr-monorepo/shared-components';

interface IProps {
  isLoading?: boolean;
  data: any;
}

const RecentTripTable: React.FC<IProps> = ({ isLoading, data }: any) => {
  const [popup, setPopup] = useState<string>('');

  const [decinePopup, setDecinePopup] = useState<boolean>(false);

  const [selectedData, setSelectedData] = useState<any>();

  const tableData = useMemo(() => {
    console.log('data: ', data);
    return data && data?.totalRecords > 0
      ? data.trips.map((item: any) => ({ ...item, key: item.rowId }))
      : [];
  }, [data]);

  const columns: ColumnsType<any> = [
    {
      title: 'Trip Name',
      dataIndex: 'name',
      key: 'transportCompany',
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
      className: 'capitalize',
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
      title: 'Actions',
      dataIndex: 'actions',
      className: 'text-center',
      ellipsis: {
        showTitle: false,
      },
      render: (_, data) => {
        return (
          <div>
            <Link
              to={`${ROUTES.pandingViewQuoteDetail(data?._id)}`}
              className="tableLink noDecoration mr-16"
            >
              View
            </Link>
            <Link
              to={``}
              className="tableLink noDecoration mr-16"
              onClick={() => {
                setPopup('add');
                setSelectedData(data);
              }}
            >
              Submit Quote
            </Link>
            <Link
              to={``}
              className="tableLink noDecoration mr-16"
              onClick={() => {
                setDecinePopup(true);
                setSelectedData(data);
              }}
            >
              Decline
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <CommonTable
        loading={isLoading}
        columns={columns}
        dataSource={tableData}
        scrollX={true}
      />

      {/* {selectedData && (
        <>
          <SubminPopup
            popup={popup}
            setPopup={setPopup}
            id={selectedData._id}
          />
          <DeclinePopup
            popup={decinePopup}
            setPopup={setDecinePopup}
            id={selectedData._id}
          />
        </>
      )} */}
    </>
  );
};

export default RecentTripTable;
