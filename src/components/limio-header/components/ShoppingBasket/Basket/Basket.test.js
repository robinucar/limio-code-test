import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Basket from './Basket';
import { removeItem, calculateTotal } from '../../../../../redux/basketSlice';

// Create a mock of redux store
const mockStore = configureStore([]);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Basket component', () => {
  let store;
  let onCloseMock;
  let navigateMock;

  beforeEach(() => {
    store = mockStore({
      basket: {
        items: [
          {
            label: 'Item 1',
            name: 'Test Item 1',
            description: 'Description 1',
            price: 10.0,
            quantity: 1,
            totalPrice: 10.0,
          },
          {
            label: 'Item 2',
            name: 'Test Item 2',
            description: 'Description 2',
            price: 20.0,
            quantity: 2,
            totalPrice: 40.0,
          },
        ],
        total: 50.0,
      },
    });

    store.dispatch = jest.fn();
    onCloseMock = jest.fn();
    navigateMock = jest.fn();

    // Mock the useNavigate hook
    useNavigate.mockImplementation(() => navigateMock);
  });

  afterEach(() => {
    // Clean up after each test to prevent memory leaks
    cleanup();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test('renders Basket component with items and total', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Basket onClose={onCloseMock} />
        </BrowserRouter>
      </Provider>
    );

    // test if the basket items rendered
    expect(screen.getByText('Test Item 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Price: $10.00')).toBeInTheDocument();
    expect(screen.getByText('Quantity: 1')).toBeInTheDocument();
    expect(screen.getByText('Total Price: $10.00')).toBeInTheDocument();

    expect(screen.getByText('Test Item 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('Price: $20.00')).toBeInTheDocument();
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
    expect(screen.getByText('Total Price: $40.00')).toBeInTheDocument();

    // test if the total  rendered
    expect(screen.getByText('Total: $50.00')).toBeInTheDocument();

    // test if the checkout button rendered
    expect(screen.getByText('Go to Checkout')).toBeInTheDocument();
  });

  test('calls onClose when the close button is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Basket onClose={onCloseMock} />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('×'));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('dispatches removeItem and calculateTotal when an item is removed', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Basket onClose={onCloseMock} />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getAllByText('Remove')[0]);

    expect(store.dispatch).toHaveBeenCalledWith(removeItem(0));
    expect(store.dispatch).toHaveBeenCalledWith(calculateTotal());
  });

  test('navigates to checkout when the checkout button is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Basket onClose={onCloseMock} />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Go to Checkout'));

    expect(navigateMock).toHaveBeenCalledWith('/checkout');
  });
});
