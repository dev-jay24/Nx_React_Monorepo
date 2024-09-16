import { Link } from './Common/Link';
import PhoneInputStyle from './Common/PhoneInputStyle';
import { Spacing } from './Common/Spacing';
import { Typography } from './Common/Typography';
import { Common } from './Common/common';
import { Fonts } from './Common/fonts';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Flex } from './Common/flex';
import { Grid } from './Common/grid';
import { Reset } from './Common/reset';
import AntdStyle from '../Antd';

export const GlobalStyle = () => {
  return (
    <>
      <Reset />
      <Fonts />
      <Grid />
      <Common />
      <Flex />
      <Spacing />
      <Typography />
      <Link />
      <AntdStyle />
      <PhoneInputStyle />
    </>
  );
};
