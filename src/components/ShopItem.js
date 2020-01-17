import React from 'react';
import { ShopItemWrapper } from './style/ShopItemStyle';

const ShopItem = ({ name, price }) => {
  return (
    <ShopItemWrapper>
      <h4>{name}</h4>
      <div>{price}원</div>
    </ShopItemWrapper>
  );
};

export default ShopItem;
