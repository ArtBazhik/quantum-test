import React from 'react';
import './App.scss';
import Header from './Components/Header/Header'
import SlickSlider from './Components/SlickSlider/SlickSlider'

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <SlickSlider/>
    </div>
  );
}

export default App;
