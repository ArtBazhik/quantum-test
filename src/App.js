import React from 'react'
import './SCSS/App.scss'
import {Route, BrowserRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import SlickSlider from './Components/SliderSection/SlickSlider'
import SectionProduct from './Components/ProductSection/SectionProduct'
import Main from './Components/Content/Content'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
          <SlickSlider/>
          <SectionProduct/>
          <Main/>
          <Footer/>
        </div>
      </BrowserRouter>

  )
}
export default App
