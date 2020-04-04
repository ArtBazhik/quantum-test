import React from 'react'
import s from '../../ShowProducts/ShowProducts.module.scss'
import CardProduct from '../../../CardProduct/CardProduct'
import appleComputers from '../../../CategoriesProducts/AppleComputers'

const AppleComputers = (props) => {
  let appleComputer =
      appleComputers.map((phone, index) => {
        return <CardProduct key={index} image={phone.image} name={phone.name} price={phone.price}/>
      })
  return(
      <div className={s.showProducts}>{appleComputer}</div>
  )
}
export default AppleComputers
