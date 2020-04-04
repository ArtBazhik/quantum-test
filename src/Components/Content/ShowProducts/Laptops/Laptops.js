import React from 'react'
import s from '../../ShowProducts/ShowProducts.module.scss'

import CardProduct from '../../../CardProduct/CardProduct'
import laptops from '../../../CategoriesProducts/Laptops'

const Laptops = (props) => {
  let laptop =
      laptops.map((phone, index) => {
        return <CardProduct key={index} image={phone.image} name={phone.name} price={phone.price}/>
      })
  return(
      <div className={s.showProducts}>{laptop}</div>
  )
}
export default Laptops
