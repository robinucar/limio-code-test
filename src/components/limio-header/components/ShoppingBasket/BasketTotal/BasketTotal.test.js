import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasketTotal from './BasketTotal';

describe('BasketTotal component', () => {
  afterEach(() => {
    // Clean up after each test to prevent memory leaks
    cleanup();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test('renders BasketTotal component with the correct total', () => {
    const total = 123.45;
    render(<BasketTotal total={total} />);

    // Check if the total is rendered correctly
    expect(screen.getByText(`Total: $${total.toFixed(2)}`)).toBeInTheDocument();
  });
});
