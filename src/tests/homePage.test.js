import React from 'react';
 // import { render } from '@testing-library/react';
import NewDeck from '../pages/newDeck.js';
import renderWithRouter from '../services/renderWithRouter.js';

describe('homepage', () => {
  test('should render with default props', () => {
    const { container } = renderWithRouter(<NewDeck />);

    expect(container).toBeInTheDocument();
  });
});
