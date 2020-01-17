import { observable, action, computed } from 'mobx';

export default class MarketStore {
  @observable
  selectedItem = [];

  @action
  put = (name, price) => {
    const exists = this.selectedItem.find(item => item.name === name);
    if (!exists) {
      this.selectedItem.push({ name, price, count: 1 });
      return;
    }

    exists.count++;
  };

  @action
  take = name => {
    const itemTaken = this.selectedItem.find(item => item.name === name);
    itemTaken.count--;
    if (itemTaken.count === 0) {
      this.selectedItem.remove(itemTaken);
    }
  };

  @computed
  get total() {
    console.log('총합 계산...');
    return this.selectedItem.reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0);
  }
}
