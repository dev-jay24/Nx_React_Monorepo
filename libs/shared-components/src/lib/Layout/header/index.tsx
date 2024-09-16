import { BellOutlined } from '@ant-design/icons';
import { Badge, Col, Dropdown, Row } from 'antd';

import { ConfirmModel } from '../../common/ConfirmModel';
import { StyledLayout } from '../Layout.Styled';

export const HeaderDesign = ({
  items,
  popup,
  setPopup,
  navigate,
  ROUTES,
  firstName,
  lastName,
  onLogout,
}: any) => {
  return (
    <>
      <StyledLayout.Header style={{ textAlign: 'center' }}>
        <Row gutter={16} align={'middle'} justify={'space-between'}>
          <Col
            xs={24}
            className="d-flex align-items-center justify-content-end"
          >
            <div className="notification-container">
              {/* Notification icon */}
              <Badge
                // dot={data?.unReadCount !== 0} // show dot if notification count is not 0
                className="notificationBadge"
              >
                <BellOutlined
                  className="notificationIcon"
                  onClick={() => navigate(ROUTES.notification)}
                />
              </Badge>
            </div>
            <Dropdown
              menu={{ items }}
              trigger={['click']}
              className="layout-header-dropdown"
              overlayClassName="layout-header-dropdown"
            >
              <div
                onClick={(e) => e.preventDefault()}
                className="d-flex header-dropdown align-items-center"
              >
                <div className="profile-avatar-container">
                  <span className="profile-place-holder">
                    {firstName?.toUpperCase()?.charAt(0)}
                  </span>
                </div>
                <span className="profile-user-name">{`${firstName} ${lastName}`}</span>
              </div>
            </Dropdown>
          </Col>
        </Row>
      </StyledLayout.Header>
      <ConfirmModel
        open={popup}
        onOk={() => {
          onLogout();
        }}
        onCancel={() => {
          setPopup(false);
        }}
        title={'Log Out'}
        subTitle={'Are you sure, you want to Log out?'}
      />
    </>
  );
};
