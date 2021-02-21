import React from 'react';
// import { render } from '@testing-library/react';
import NewDeck from '../pages/newDeck.js';
import renderWithRouter from '../services/renderWithRouter.js';
import Provider from '../contextAPI/Provider';
import '@testing-library/jest-dom';

// error Support for the experimental syntax 'jsx' isn't currently enabled

describe('homepage', () => {
  test('should render with default props', () => {
    const { container } = renderWithRouter(
      <Provider>
        <NewDeck />
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});
