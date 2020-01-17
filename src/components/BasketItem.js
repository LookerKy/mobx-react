import React from 'react';
import { BasketItemWrapper } from './style/BasketItemStyle';

const BasketItem = ({ name, price, count }) => {
  return (
    <BasketItemWrapper>
      <div className="name">{name}</div>
      <div className="price">{price}</div>
      <div className="count">{count}</div>
      <div className="return"> 갖다놓기 </div>
    </BasketItemWrapper>
  );
};

export default BasketItem;
