import React from 'react'
import CardProduct from '../CardProduct/CardProduct'
import cellPhone from '../CategoriesProducts/CellPhone'

const ShowProducts = (props) => {
  let cardElement =
      cellPhone.map( product => <CardProduct name={cellPhone.name} price={cellPhone}/> )

  return (
      <div className="show-products">
        {cardElement}
      </div>
  )
}
export default ShowProducts
