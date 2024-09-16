import { ROUTES } from '@msr-monorepo/shared-utils';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from '../modules/auth/login';
import Layout from '../layout';
import Dashboard from '../modules/Dashboard';
import { AuthGuard } from '../common/AuthGuard';
import { ForgotPassword, ResetPassword } from '@msr-monorepo/shared-pages';

const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES.signIn} element={<SignIn />} />
      <Route path={ROUTES.resetPassword} element={<ResetPassword />} />
      <Route path={ROUTES.forgotPassword} element={<ForgotPassword />} />

      <Route
        path={ROUTES.default}
        element={
          <AuthGuard>
            <Layout />
          </AuthGuard>
        }
      >
        <Route path={ROUTES.dashboard} element={<Dashboard />} />
        <Route
          path={ROUTES.default}
          element={<Navigate replace to={ROUTES.dashboard} />}
        />
      </Route>

      <Route path="*" element={<Navigate replace to={ROUTES.signIn} />} />
    </Routes>
  );
};

export default Routing;
