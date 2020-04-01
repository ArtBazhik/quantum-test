import React, {forwardRef} from 'react'
import s from './CardProduct.module.scss'
import appleComputers from '../CategoriesProducts/AppleComputers'
import cellPhone from '../CategoriesProducts/CellPhone'
import laptops from '../CategoriesProducts/Laptops'
import computers from '../CategoriesProducts/Computers'
import img from './image-1.svg'

const CardProduct = ({name, price, image}) => {

  return (
      <div className={s.card}>
        <div className={s.cardHeader}>
          <span className={s.sale}>Sale</span>
          <div className={s.item}>
            <span className={s.menu}></span>
            <span className={s.favorite}></span>
          </div>
        </div>
        <div className={s.productImg}>
          <img src={image} alt=''/>
        </div>
        <div className={s.name}>{name}</div>
        <ul className={s.stars}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className={s.price}>$ {price}</div>
      </div>
  )
}
console.log(cellPhone)
export default CardProduct
