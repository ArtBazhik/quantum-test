import React from 'react'
import Slider from "react-slick"
import './slick.scss'
import Slide1 from './Slide1.jpg'
import Slide2 from './Slide2.jpeg'
import Slide3 from './Slide3.jpg'


const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides"
  };
  return (
    <section >
      <div className="container">
      <Slider {...settings}>
        <div>
          <img src={Slide1} />
        </div>
        <div>
          <img src={Slide2} />
        </div>
        <div>
          <img src={Slide3} />
        </div>
      </Slider>
      </div>
    </section>
  )
}
export default SlickSlider
