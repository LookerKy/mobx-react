import CounterStore from './Counter';
import MarketStore from './Market';

export default class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
  }
}
