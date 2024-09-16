import { ConfigProvider, message } from 'antd';
import { theme, themeObject } from '@msr-monorepo/shared-style';

const customTheme = {
  // color: {
  //   ...theme.color,
  //   primary: '#696cff', // #696cff
  // },
};
const customThemeObject = {};

export const ThemeConfig = ({ children }: any) => {
  message.config({
    duration: 4,
    maxCount: 2,
  });
  return (
    <ConfigProvider
      theme={{
        ...themeObject({ ...theme, ...customTheme }),
        ...customThemeObject,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
