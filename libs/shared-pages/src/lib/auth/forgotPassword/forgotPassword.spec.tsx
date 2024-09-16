import { render } from '@testing-library/react';

import ForgotPassword from './forgotPassword';

describe('ForgotPassword', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ForgotPassword />);
    expect(baseElement).toBeTruthy();
  });
});
