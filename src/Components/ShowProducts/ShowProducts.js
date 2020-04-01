import React from 'react'
import CardProduct from '../CardProduct/CardProduct'
import cellPhone from '../CategoriesProducts/CellPhone'

const ShowProducts = (props) => {
  let phones =
      cellPhone.map((phone, index) => {return <CardProduct key={index} image={phone.image} name={phone.name} price={phone.price}/>})
  return (
      <div className="show-products">
        {phones}
      </div>
  )
}
export default ShowProducts
