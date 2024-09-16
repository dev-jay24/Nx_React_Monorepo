import { useMemo, useState } from 'react';

import {
  AuditOutlined,
  BugOutlined,
  DashboardOutlined,
  FileSyncOutlined,
  GroupOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SolutionOutlined,
  TeamOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '@msr-monorepo/shared-utils';
import { SidebarDesign } from '@msr-monorepo/shared-components';

function createMenuItem(
  link?: string,
  label?: string,
  key?: any,
  icon?: any,
  children?: any,
  type?: any
) {
  return {
    link,
    key,
    icon,
    children,
    label,
    type,
  };
}

const items: any[] | undefined = [
  createMenuItem(ROUTES.dashboard, 'Dashboard', '1', <DashboardOutlined />),
  createMenuItem(ROUTES.HorseOwner, 'Horse Owner', '2', <UserSwitchOutlined />),
  createMenuItem(
    ROUTES.transportComanyManagement,
    'Transport Management',
    '3',
    <TeamOutlined />
  ),
  createMenuItem(
    ROUTES.quoteManagement,
    'Quote Management  ',
    '4',
    <GroupOutlined />
  ),
  createMenuItem(
    ROUTES.tripManagement,
    'Trip Management ',
    '5',
    <BugOutlined />
  ),
  createMenuItem(
    ROUTES.commissionManagement,
    'Commission Management ',
    '6',
    <FileSyncOutlined />
  ),
  createMenuItem(
    ROUTES.paymentManagement,
    'Payment Management ',
    '7',
    <SolutionOutlined />
  ),
  // createMenuItem(
  //   '/subscription-management',
  //   'Subscription Management',
  //   '4',
  //   <MoneyCollectOutlined />
  // ),
  createMenuItem(
    ROUTES.termsAndConditions,
    'CMS Management',
    'sub2',
    <AuditOutlined />,
    [
      createMenuItem(ROUTES.termsAndConditions, 'Terms And Conditions', '8'),
      createMenuItem(ROUTES.privacyPolicy, 'Privacy Policy', '9'),
      createMenuItem(ROUTES.FAQs, 'FAQs', '10'),
    ],
    'CMS Management'
  ),
];

function compareLinkAndReturnKey(items: any, currentPath: any): any {
  let activeLinkKey;
  for (const item of items) {
    if (
      item?.children &&
      Array.isArray(item?.children) &&
      item.children.length > 0
    ) {
      activeLinkKey = compareLinkAndReturnKey(item.children, currentPath);
    } else if (
      item.link === currentPath ||
      item.link === currentPath.split('/').splice(0, 3).join('/')
    ) {
      activeLinkKey = item.key;
      break;
    } else {
      continue;
    }
  }
  return activeLinkKey;
}
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);

  const activeTab = useMemo(() => {
    const activeLinkKey = compareLinkAndReturnKey(items, location?.pathname);
    if (activeLinkKey) {
      return [activeLinkKey];
    } else {
      return [
        items?.find(
          (item) =>
            item?.link?.split('/')[1] === location?.pathname?.split('/')[1]
        )?.key ?? '1',
      ];
    }
  }, [location.pathname]);

  return (
    <SidebarDesign
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      activeTab={activeTab}
      navigate={navigate}
      items={items}
    />
  );
};

export default Sidebar;
