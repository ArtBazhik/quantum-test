import React from 'react'
import s from './CardProduct.module.scss'
import appleComputers from '../CategoriesProducts/AppleComputers'
import cellPhone from '../CategoriesProducts/CellPhone'
import laptops from '../CategoriesProducts/Laptops'
import computers from '../CategoriesProducts/Computers'

const CardProduct  = (props) => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <span className={s.sale}>Sale</span>
        <span className={s.menu}></span>
        <span className={s.favorite}></span>
      </div>
      <div className={s.productImg}>
        <img src={cellPhone[0].image} alt=''/>
      </div>
      <div>{cellPhone[0].name}</div>
      <ul className={s.stars}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className={s.price}>$ {cellPhone[0].price}</div>
    </div>
  )
}
export default CardProduct
