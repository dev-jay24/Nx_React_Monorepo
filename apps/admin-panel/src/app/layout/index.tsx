import { Suspense, lazy } from 'react';

import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

import { StyledLayout } from './Layout.Styled';
import Sidebar from './sidebar';
import { Loader } from '@msr-monorepo/shared-components';

const Header = lazy(() => import('./header'));

const Layout = () => {
  return (
    <StyledLayout hasSider>
      <Sidebar />

      <StyledLayout className="siteLayout">
        <Header />

        <Content>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Content>
        {/* <Footer /> */}
      </StyledLayout>
    </StyledLayout>
  );
};

export default Layout;
