import React from 'react'
import './SCSS/App.scss'
import Header from './Components/Header/Header'
import SlickSlider from './Components/SliderSection/SlickSlider'
import SectionProduct from './Components/ProductSection/SectionProduct'
import Main from './Components/Content/Content'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
      <div className="wrapper">
        <Header/>
        <SlickSlider/>
        <SectionProduct/>
        <Main/>
        <Footer/>
      </div>
  )
}
export default App
