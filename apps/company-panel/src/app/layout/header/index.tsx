import { useState } from 'react';

import { LockOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps, message } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Button, HeaderDesign } from '@msr-monorepo/shared-components';
import { ROUTES } from '@msr-monorepo/shared-utils';
import { authApi } from '../../Services/auth';
import { useQueryClient } from '@tanstack/react-query';
import { authStore } from '../../Services/store/auth';
const Header = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    userData: { firstName, lastName },
    actions: { authFail },
  } = authStore((state) => state);

  const [popup, setPopup] = useState(false);

  const onLogout = () => {
    authApi
      .logOut()
      .then((data) => {
        queryClient.clear();
        message.success(data.message);
        authFail();
      })
      .catch((error) => {
        message.error(error?.response?.data?.message || 'Something went wrong');
      });
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Button type="text">My Account</Button>,
      icon: <UserOutlined />,
      onClick: () => {
        navigate(ROUTES.profile);
      },
    },
    {
      key: '2',
      label: <Button type="text">Change Password</Button>,
      icon: <LockOutlined />,
      onClick: () => {
        navigate(ROUTES.changePassword);
      },
    },
    {
      key: '3',
      label: <Button type="text">Logout</Button>,
      icon: <LogoutOutlined />,
      onClick: () => {
        setPopup(true);
      },
    },
  ];

  return (
    <HeaderDesign
      items={items}
      popup={popup}
      setPopup={setPopup}
      navigate={navigate}
      ROUTES={ROUTES}
      firstName={firstName}
      lastName={lastName}
      onLogout={onLogout}
    />
  );
};

export default Header;
