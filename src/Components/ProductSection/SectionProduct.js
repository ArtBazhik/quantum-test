import React from 'react';
import s from './sectionProduct.module.scss'
import leftRgt1 from './image-3.jpg'
import leftRgt2 from './image-4.jpg'


const SectionProduct = () => {
  return(
    <section className={s.product}>
      <div className="container">
        <div className={s.inner}>
          <div className={`${s.column} ${s.columnLeft}`}>
            <p className={s.columnLeftText}>Astronomy Or Astrology</p>
          </div>
          <div className={`${s.column} ${s.columnCenter}`}>
            <p className={s.columnCenterText}>The Basics Of Buying <br/> A Telescope</p>
          </div>
          <div className={`${s.column} ${s.columnRight}`}>
             <div className={s.rightItem}>
               <img src={leftRgt1}/>
               <p>Getting Free Publicity <br/>For Your Business</p>
             </div>
             <div className={s.rightItem}>
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
