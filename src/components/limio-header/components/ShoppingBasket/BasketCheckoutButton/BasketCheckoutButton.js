// @flow
import React from 'react';

const BasketCheckoutButton = ({ onCheckout }) => (
  <button className='checkout-button' onClick={onCheckout}>
    Go to Checkout
  </button>
);

export default BasketCheckoutButton;
