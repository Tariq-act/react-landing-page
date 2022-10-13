import React from 'react';

import CartItem from '../CartItem/CartItem';

import { useGlobalContext } from '../../context/context';
import './CartContainer.styles.css';
const CartContainer = () => {
  const { cart, clearCart, total } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <div className='cart'>
        <header>
          <h2>Shopping cart bag</h2>
          <div className='empty-cart'>is currently empty</div>
        </header>
      </div>
    );
  }
  return (
    <div className='cart'>
      <header>
        <h2>Shopping cart bag</h2>
      </header>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <div className='btn btn-clear' onClick={clearCart}>
          clear cart
        </div>
      </footer>
    </div>
  );
};

export default CartContainer;
