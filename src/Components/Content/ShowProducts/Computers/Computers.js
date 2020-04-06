import React from 'react'
import s from '../../ShowProducts/ShowProducts.module.scss'
import CardProduct from '../../../CardProduct/CardProduct'
import computers from '../../../CategoriesProducts/Computers'

const Computers = (props) => {
  let computer =
      computers.map((phone, index) => {
        return <CardProduct key={index} image={phone.image} name={phone.name} price={phone.price}/>
      })
  return(
      <div className={s.showProducts}>{computer}</div>
  )
}
export default Computers
