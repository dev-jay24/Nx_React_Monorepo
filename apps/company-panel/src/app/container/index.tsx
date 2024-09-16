import { Suspense } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import 'react-phone-input-2/lib/style.css';
import { GlobalStyle } from '@msr-monorepo/shared-style';
import { ErrorBoundary, LoaderWrapper } from '@msr-monorepo/shared-components';
import { ThemeConfig } from '../Config';
import { setupAxios } from '../utils/functions';

setupAxios();

const queryClient = new QueryClient();

const AppContainer = () => {
  return (
    <ThemeConfig>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <LoaderWrapper>
                <h6 style={{ textAlign: 'center' }}>Loading</h6>
              </LoaderWrapper>
            }
          >
            <BrowserRouter>
              <GlobalStyle />
              <Routes />
            </BrowserRouter>
          </Suspense>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeConfig>
  );
};

export default AppContainer;
