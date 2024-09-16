import { render } from '@testing-library/react';

import ResetPassword from './resetPassword';

describe('ResetPassword', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResetPassword />);
    expect(baseElement).toBeTruthy();
  });
});
