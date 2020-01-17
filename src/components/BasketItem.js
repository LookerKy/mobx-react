import React from 'react';
import { BasketItemWrapper } from './style/BasketItemStyle';
import { observer } from 'mobx-react';

const BasketItem = ({ item, onTake }) => {
  return (
    <BasketItemWrapper>
      <div className="name">{item.name}</div>
      <div className="price">{item.price}원</div>
      <div className="count">{item.count}</div>
      <div className="return" onClick={() => onTake(item.name)}>
        갖다놓기
      </div>
    </BasketItemWrapper>
  );
};

export default observer(BasketItem);
