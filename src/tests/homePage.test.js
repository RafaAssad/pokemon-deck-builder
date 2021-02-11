import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../pages/homePage';

describe('homepage', () => {
  test('should render with default props', () => {
    const { container } = render(<HomePage />);

    expect(container).toBeInTheDocument();
  });
});
