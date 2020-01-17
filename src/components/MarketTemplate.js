import React from 'react';
import { SuperMarketTemplate } from './style/MarketTemplate';

const MarketTemplate = ({ items, basket, total }) => {
  return (
    <SuperMarketTemplate>
      <div className="items-wrapper">
        <h2>상품</h2>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>장바구니</h2>
        {basket}
        {total}
      </div>
    </SuperMarketTemplate>
  );
};

export default MarketTemplate;
