import React from 'react';
import './App.scss';
import Header from './Components/Header'
import SlickSlider from './Components/SlickSlider'


const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <SlickSlider/>
    </div>
  );
}

export default App;
