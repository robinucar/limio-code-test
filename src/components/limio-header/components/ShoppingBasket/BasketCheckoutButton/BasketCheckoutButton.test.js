import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasketCheckoutButton from './BasketCheckoutButton';

describe('BasketCheckoutButton component', () => {
  const onCheckout = jest.fn();

  afterEach(() => {
    // Clean up after each test to prevent memory leaks
    cleanup();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test('renders BasketCheckoutButton component', () => {
    render(<BasketCheckoutButton onCheckout={onCheckout} />);

    // Check if the checkout button is rendered
    expect(screen.getByText('Go to Checkout')).toBeInTheDocument();
  });

  test('calls onCheckout when the button is clicked', () => {
    render(<BasketCheckoutButton onCheckout={onCheckout} />);

    const checkoutButton = screen.getByText('Go to Checkout');
    fireEvent.click(checkoutButton);

    expect(onCheckout).toHaveBeenCalledTimes(1);
  });
});
