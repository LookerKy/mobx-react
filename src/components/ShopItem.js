import React from 'react';
import { ShopItemWrapper } from './style/ShopItemStyle';

const ShopItem = ({ name, price, onPut }) => {
  return (
    <ShopItemWrapper onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원</div>
    </ShopItemWrapper>
  );
};

export default ShopItem;
