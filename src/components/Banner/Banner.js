import React from 'react';

import './Banner.styles.css';
const Banner = () => {
  return (
    <div className='banner'>
      <div className='image-wrapper'>
        <img
          src='https://images.unsplash.com/photo-1529089215701-115b6fccd84c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80'
          alt=''
          className='banner-image'
        />
      </div>
    </div>
  );
};

export default Banner;
