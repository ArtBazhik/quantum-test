import React from 'react'
import s from './contentNav.module.scss'
import ShowProducts from '../ShowProducts/ShowProducts'

const ContentNav = () => {
  return(
    <div className={s.productsInner}>
      <div className={s.sortCard}>
        <ul className={s.cardItems}>
          <li>Popular products</li>
          <li>Low price</li>
          <li>High price</li>
          <li>Categoties</li>
        </ul>
        <div className={s.cardOptions}>
          <span></span>
          <span></span>
        </div>
      </div>
      <ShowProducts />
    </div>
  )
}
export default ContentNav
