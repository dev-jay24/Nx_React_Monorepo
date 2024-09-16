import { LoadingIcon } from '../../svg/LoadingIcon';

import { Spinner, Wrapper } from './style';

interface IProps {
  children?: React.ReactNode;
}

export const LoaderWrapper: React.FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export const Loader: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Spinner>
          <LoadingIcon />
        </Spinner>
        {children}
      </Wrapper>

      {children}
    </>
  );
};
