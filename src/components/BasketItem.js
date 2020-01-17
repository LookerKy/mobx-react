import React from 'react';
import { BasketItemWrapper } from './style/BasketItemStyle';
import { observer } from 'mobx-react';

const BasketItem = ({ name, price, count, onTake }) => {
  return (
    <BasketItemWrapper>
      <div className="name">{name}</div>
      <div className="price">{price}원</div>
      <div className="count">{count}</div>
      <div className="return" onClick={() => onTake(name)}>
        갖다놓기
      </div>
    </BasketItemWrapper>
  );
};

export default observer(BasketItem);
