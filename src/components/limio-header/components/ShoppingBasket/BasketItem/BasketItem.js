// @flow
import React from 'react';

const BasketItem = ({ item, onRemove }) => (
  <li>
    <div className='item-details'>
      <h3>{item.label}</h3>
      <p>
        <strong>{item.name}</strong>
      </p>
      <p>{item.description}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p className='item-quantity'>Quantity: {item.quantity}</p>
      <p>Total Price: ${item.totalPrice}</p>
    </div>
    <button className='remove-button' onClick={onRemove}>
      Remove
    </button>
  </li>
);

export default BasketItem;
