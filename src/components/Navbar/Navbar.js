import React from 'react';

import { useGlobalContext } from '../../context/context';
import './Navbar.styles.css';
const Navbar = () => {
  const { count } = useGlobalContext();
  return (
    <nav className='navigation'>
      <div className='brand-logo'>
        <span>Act</span>Shop
      </div>
      <div className='cart-icon'>
        <i className='fa-solid fa-cart-shopping'></i>
        <div className='item-count'>{count}</div>
      </div>
    </nav>
  );
};

export default Navbar;
