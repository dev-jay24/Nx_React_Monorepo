import { AntBadge } from './AntBadge';
import { AntCard } from './AntCard';
import { AntDropdown } from './AntDropdown';
import { AntInput } from './AntInput';
import { AntMenu } from './AntMenu';
import { AntMessage } from './AntMessage';
import { AntModal } from './AntModal';
import { AntPagination } from './AntPagination';
import { AntSelect } from './AntSelect';
import { AntSteps } from './AntSteps';
import { AntTabs } from './AntTabs';
import { AntTags } from './AntTags';

const AntdStyle = () => {
  return (
    <>
      <AntPagination />
      <AntDropdown />
      <AntMenu />
      <AntBadge />
      <AntTags />
      <AntModal />
      <AntInput />
      <AntCard />
      <AntMessage />
      <AntTabs />
      <AntSteps />
      <AntSelect />
    </>
  );
};

export default AntdStyle;
