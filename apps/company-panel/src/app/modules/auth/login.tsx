import { useCallback, useEffect, useState } from 'react';

import { Form, message } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { LoginPage } from '@msr-monorepo/shared-pages';
import { LocalStorageKeys } from '../../utils/constants';
import { authStore } from '../../Services/store/auth';
import { ISignInReq } from '../../Services/auth/types';
import { ROUTES, UserRole } from '@msr-monorepo/shared-utils';
import { authApi } from '../../Services/auth';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { actions, isLoggedIn, completeProfile } = authStore((state) => state);
  const [deviceId, setDeviceId] = useState<string | null>(
    localStorage.getItem(LocalStorageKeys.deviceId)
  );
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!deviceId) {
      const uuid = uuidv4();
      setDeviceId(uuid);
      localStorage.setItem(LocalStorageKeys.deviceId, uuid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = useCallback(
    async (values: ISignInReq) => {
      const data = {
        ...values,
        role: UserRole.TC,
        deviceId: deviceId ?? '',
        fcmToken: '',
        rememberMe: rememberMe,
      };
      setLoading(true);
      try {
        const res = await authApi.signIn(data);
        if (res?.data?.completeProfile) {
          navigate(ROUTES.dashboard);
          message.success(res.message || 'Logged in successfully');
        } else {
          //   localStorage.setItem(LocalStorageKeys.accessToken, JSON.stringify(res?.data.accessToken));
          //   setTimeout()
          navigate(ROUTES.addProfile);
        }
        actions.authSuccess(res);
      } catch (error: any) {
        message.error(
          error?.response?.data?.message ||
            'Something went wrong please try again!'
        );
      } finally {
        setLoading(false);
      }
    },
    [navigate, actions, deviceId, rememberMe]
  );

  if (isLoggedIn && completeProfile) {
    return <Navigate to={ROUTES.dashboard} />;
  }

  return (
    <LoginPage
      onSubmit={onSubmit}
      form={form}
      rememberMe={rememberMe}
      setRememberMe={setRememberMe}
      loading={loading}
    />
  );
};

export default SignIn;
