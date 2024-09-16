import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import RecentTripTable from './components/RecentTripTable';

import { Wrapper } from './style';
import { profileHooks } from '../../Services/profile';
import { Button, ContentHeader, Meta } from '@msr-monorepo/shared-components';
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
                <h2 className="infoTitle">Total Horse Owner</h2>
                <span className="number">
                  {data?.totalHorseOwner ? data?.totalHorseOwner : '0'}
                </span>
              </div>
            </Col>
            <Col xs={8} lg={6}>
              <div className="dashboardInfo">
                <h2 className="infoTitle">Total Transport Company</h2>
                <span className="number">
                  {data?.totalTransportCompany
                    ? data?.totalTransportCompany
                    : '0'}
                </span>
              </div>
            </Col>
            <Col xs={8} lg={6}>
              <div className="dashboardInfo">
                <h2 className="infoTitle">Total Driver</h2>
                <span className="number">
                  {data?.totalDriver ? data?.totalDriver : '0'}
                </span>
              </div>
            </Col>
            <Col xs={8} lg={6}>
              <div className="dashboardInfo">
                <h2 className="infoTitle">Total Trip</h2>
                <span className="number">
                  {data?.totalTrip ? data?.totalTrip : '0'}
                </span>
              </div>
            </Col>
          </Row>
          <div className="shadow-paper d-flex align-content-center justify-content-between">
            <h1 className="pt-8">Recent Trip Detail</h1>
            <Button
              size="middle"
              type="primary"
              onClick={() => {
                navigate(ROUTES.tripManagement);
              }}
            >
              View All
            </Button>
          </div>

          {data?.trips && (
            <RecentTripTable data={data.trips} isLoading={isLoading} />
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default Dashboard;
