import React from 'react'
import s from '../../ShowProducts/ShowProducts.module.scss'

import CardProduct from '../../../CardProduct/CardProduct'
import cellPhone from '../../../CategoriesProducts/CellPhone'

const Phones = (props) => {
  let phones =
      cellPhone.map((phone, index) => {
        return <CardProduct key={index} image={phone.image} name={phone.name} price={phone.price}/>
      })
  return(
      <div className={s.showProducts}>{phones}</div>
  )
}
export default Phones
