// @flow
import React from 'react';

const BasketTotal = ({ total }) => (
  <div className='total'>
    <h3>Total: ${total.toFixed(2)}</h3>
  </div>
);

export default BasketTotal;
