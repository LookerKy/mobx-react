import React from 'react';

import './App.css';
import Counter from './components/Counter';
import Market from './components/Market';
// import DevTools from 'mobx-react-devtools';

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <Market />
    </div>
  );
}

export default App;
