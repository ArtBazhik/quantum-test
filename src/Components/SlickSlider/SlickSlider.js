import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import Slide1 from './Slide1.jpg'
import Slide2 from './Slide2.jpeg'
import Slide3 from './Slide3.jpg'
// import PrevBtn from './Left-button.svg'
// import NextBtn from './Right-button.svg'


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "slides"
};

const SlickSlider = () => {

  return (
    <section className="slickSlider">
      <div className="container">
      <Slider {...settings}>
        <div>
          <img className="photo" src={Slide1} />
        </div>
        <div>
          <img className="photo" src={Slide2} />
        </div>
        <div>
          <img className="photo" src={Slide3} />
        </div>
      </Slider>
      </div>
    </section>
  )
}
export default SlickSlider