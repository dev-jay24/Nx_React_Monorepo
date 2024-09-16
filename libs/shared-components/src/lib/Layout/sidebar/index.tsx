import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import { toAbsoluteUrl } from '@msr-monorepo/shared-utils';
import { StyledLayout } from '../Layout.Styled';

export const SidebarDesign = ({
  collapsed,
  setCollapsed,
  activeTab,
  navigate,
  items,
}: any) => {
  return (
    <StyledLayout.Sider
      collapsible
      breakpoint="lg"
      collapsed={collapsed}
      width={'260px'}
      collapsedWidth={64}
      onCollapse={(collapsed: boolean) => {
        setCollapsed(collapsed);
      }}
      trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    >
      <div className="logoWrapper">
        <img
          className="logoLg"
          alt="Logo"
          src={toAbsoluteUrl('/icons/LogoSm.png')}
        />
        {!collapsed && 'Mane Street Rideshare'}
      </div>

      <Menu
        className="sidebarMenu"
        selectedKeys={activeTab}
        mode="inline"
        onClick={({ item }: any) => navigate(item.props.link)}
        items={items}
      />
    </StyledLayout.Sider>
  );
};
