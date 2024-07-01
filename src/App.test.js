import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock all components on the App.js
jest.mock('./Header', () => ({
  Header: () => <div>Header Component</div>,
}));

jest.mock('@limio/sdk', () => ({
  LimioProvider: ({ children }) => <div>{children}</div>,
  useLimio: () => ({
    shop: {
      offers: [],
    },
  }),
}));

jest.mock('./components/limio-header', () => ({
  __esModule: true,
  default: () => <div>Limio Header Component</div>,
}));

jest.mock('./components/grouped-offers', () => ({
  __esModule: true,
  default: () => <div>Grouped Offers Component</div>,
}));

jest.mock('./components/limio-footer', () => ({
  __esModule: true,
  default: () => <div>Limio Footer Component</div>,
}));

jest.mock('./ErrorBoundary', () => ({
  ErrorBoundary: ({ children }) => <div>{children}</div>,
}));

describe('App component', () => {
  afterEach(() => {
    // Clean up after each test
    cleanup();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test('renders App component with all sections', () => {
    render(<App />);

    // test if Header rendered
    expect(screen.getByText('Header Component')).toBeInTheDocument();

    // test if the Limio Header  rendered
    expect(screen.getByText('Limio Header Component')).toBeInTheDocument();

    // test if the Grouped Offers rendered
    expect(screen.getByText('Grouped Offers Component')).toBeInTheDocument();

    // test if the Limio Footer  rendered
    expect(screen.getByText('Limio Footer Component')).toBeInTheDocument();
  });
});
