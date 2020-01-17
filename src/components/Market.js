import React from 'react';
import MarketTemplate from './MarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

const Market = () => {
  return (
    <MarketTemplate
      items={<ShopItemList />}
      basket={<BasketItemList />}
      total={<TotalPrice />}
    />
  );
};

export default Market;
