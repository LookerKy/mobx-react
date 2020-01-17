import React from 'react';
import MarketTemplate from './MarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';

const Market = () => {
  return (
    <MarketTemplate items={<ShopItemList />} basket={<BasketItemList />} />
  );
};

export default Market;
