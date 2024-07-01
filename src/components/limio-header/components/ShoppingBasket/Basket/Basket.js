import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from '../../../../../redux/basketSlice';
import './Basket.css';
import { useNavigate } from 'react-router-dom';
import BasketItem from '../BasketItem/BasketItem';
import BasketTotal from '../BasketTotal/BasketTotal';
import BasketCheckoutButton from '../BasketCheckoutButton/BasketCheckoutButton';

const Basket = ({ onClose }) => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);
  const total = useSelector((state) => state.basket.total);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className='basket'>
      <button className='close-button' onClick={onClose}>
        &times;
      </button>
      <h2>Basket</h2>
      <ul>
        {basketItems.map((item, index) => (
          <BasketItem key={index} item={item} />
        ))}
      </ul>
      <BasketTotal total={total} />
      <BasketCheckoutButton onCheckout={handleCheckout} />
    </div>
  );
};

export default Basket;
