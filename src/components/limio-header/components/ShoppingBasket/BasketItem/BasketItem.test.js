import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasketItem from './BasketItem';

describe('BasketItem component', () => {
  const item = {
    label: 'Test Item',
    name: 'Test Name',
    description: 'This is a test item description.',
    price: 9.99,
    quantity: 2,
    totalPrice: 19.98,
  };

  const onRemove = jest.fn();

  afterEach(() => {
    // Clean up after each test to prevent memory leaks
    cleanup();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test('renders BasketItem component with item details', () => {
    render(<BasketItem item={item} onRemove={onRemove} />);

    // Check if the item details are rendered
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('Test Name')).toBeInTheDocument();
    expect(
      screen.getByText('This is a test item description.')
    ).toBeInTheDocument();
    expect(screen.getByText('Price: $9.99')).toBeInTheDocument();
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
    expect(screen.getByText('Total Price: $19.98')).toBeInTheDocument();

    // Check if the remove button is rendered
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  test('calls onRemove when remove button is clicked', () => {
    render(<BasketItem item={item} onRemove={onRemove} />);

    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);

    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});
