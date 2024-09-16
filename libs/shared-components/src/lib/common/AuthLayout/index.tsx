import { ReactNode } from 'react';

import { AuthWrapper } from './Auth.Styled';
import { toAbsoluteUrl } from '@msr-monorepo/shared-utils';

export interface IAuthProps {
  containerClassName?: string;
  authBg?: string;
  children?: ReactNode;
}
export const AuthLayout = (props: IAuthProps) => {
  const { containerClassName, authBg, children } = props;
  const date = new Date();
  return (
    <AuthWrapper className={`authLayout ${containerClassName}`}>
      <div className="authLogo">
        <div>
          <img
            className="logoLg"
            alt="Logo"
            src={toAbsoluteUrl('/asset/LogoSmbgRemove.png')}
          />
        </div>
      </div>
      <div className={`${!authBg ? 'authBg' : authBg}`}>
        <div className="authContent">{children}</div>
      </div>
      <div className="copyright">
        Copyright © {date.getFullYear()} Produced By Mane Street Rideshare
      </div>
    </AuthWrapper>
  );
};
