import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Wrapper } from './style';
import { profileHooks } from '../../Services/profile';
import { Button, ContentHeader, Meta } from '@msr-monorepo/shared-components';
import RecentTripTable from './components/RecentTripTable';
import { ROUTES } from '@msr-monorepo/shared-utils';

const Dashboard = () => {
  const navigate = useNavigate();

  const { data, isLoading } = profileHooks.GetDashBoardDetail();

  return (
    <>
      <Meta title="Dashboard" />
      <Wrapper>
        <ContentHeader
          pageTitle="Dashboard"
          items={[{ title: 'Dashboard' }, { title: 'Dashboard Management' }]}
        />
        <div className="contentContainer">
          <Row className="dashboardCardContainer" gutter={[24, 0]}>
            <Col xs={8} lg={6}>
              <div className="dashboardInfo">
                <h2 className="infoTitle">Total Driver</h2>
                <span className="number">
                  {data?.stats?.totalDrivers ? data?.stats?.totalDrivers : '0'}
                </span>
              </div>
            </Col>
            <Col xs={8} lg={6}>
              <div className="dashboardInfo">
                <h2 className="infoTitle">Requested Shipping Quotes</h2>
                <span className="number">
                  {data?.stats?.totalRequestedQuotes
                    ? data?.stats?.totalRequestedQuotes
                    : '0'}
                </span>
              </div>
            </Col>
            <Col xs={8} lg={6}>
              <div className="dashboardInfo">
                <h2 className="infoTitle">
                  Accepted Quotes - Pending Confirmation
                </h2>
                <span className="number">
                  {data?.stats?.totalAcceptedQuotes
                    ? data?.stats?.totalAcceptedQuotes
                    : '0'}
                </span>
              </div>
            </Col>
            <Col xs={8} lg={6}>
              <div className="dashboardInfo">
                <h2 className="infoTitle">Total Completed Trips</h2>
                <span className="number">
                  {data?.stats?.totalCompletedTrips
                    ? data?.stats?.totalCompletedTrips
                    : '0'}
                </span>
              </div>
            </Col>
          </Row>
          <div className="shadow-paper d-flex align-content-center justify-content-between">
            <h1 className="pt-8">Open Shipping Quote Requests</h1>
            <Button
              size="middle"
              type="primary"
              onClick={() => {
                navigate(ROUTES.quoteManagement);
              }}
            >
              View All
            </Button>
          </div>
          <div className="shadow-paper">
            {data?.newTrips?.trips && (
              <RecentTripTable data={data?.newTrips} isLoading={isLoading} />
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Dashboard;
