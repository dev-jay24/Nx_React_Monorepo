import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@msr-monorepo/shared-utils';
import { authStore } from '../../Services/store/auth';
import { LoaderWrapper } from '@msr-monorepo/shared-components';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore((state) => state);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTES.signIn, { replace: true });
    }
  }, [isLoggedIn, navigate]);
  if (isLoggedIn) return <>{children}</>;
  else
    return (
      <LoaderWrapper>
        <h6>Loading</h6>
      </LoaderWrapper>
    );
};
