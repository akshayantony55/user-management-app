import React from 'react';
import './App.css';
import View from './view/view';
import Header from './navigation/header';

const App = () => {
  return (
    <div className="ViewContainer">
      <Header />
      <div>
        <View />
      </div>
    </div>
  );
};
export default App;
