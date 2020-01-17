import React from 'react';

import './App.css';
import Counter from './components/Counter';
import Market from './components/Market';
import DevTools from 'mobx-react-devtools';

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <Market />
      {process.env.NODE_ENV === 'development' && <DevTools />}
    </div>
  );
}

export default App;
