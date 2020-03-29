import React from 'react';
import './App.scss';
import Header from './Components/Header/Header'
import SlickSlider from './Components/SlickSlider/SlickSlider'
import SectionProduct from './Components/SectionProduct/SectionProduct'
import Main from './Components/Content/Content'

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <SlickSlider/>
      <SectionProduct/>
      <Main/>
    </div>
  );
}

export default App;
