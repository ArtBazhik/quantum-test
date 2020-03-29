import React from 'react';
import leftClm from './image-2.svg'
import leftCntr from './image-1.jpg'
import leftRgt1 from './image-3.jpg'
import leftRgt2 from './image-4.jpg'


const SectionProduct = () => {
  return(
    <section className="product">
      <div className="container">
        <div className="product__inner">
          <div className="product__column column-left">
            <p className="column-left__text">Astronomy Or Astrology</p>
          </div>
          <div className="product__column column-center">
            <p className="column-center__text">The Basics Of Buying <br/> A Telescope</p>
          </div>
          <div className="product__column column-right">
             <div className="column-right__item">
               <img src={leftRgt1}/>
               <p>Getting Free Publicity <br/>For Your Business</p>
             </div>
             <div className="column-right__item">
             <img src={leftRgt2}/>
               <p>How Plasma Tvs And <br/>Lcd Tvs Differ</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SectionProduct