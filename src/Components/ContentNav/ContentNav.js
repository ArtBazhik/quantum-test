import React from 'react'
import ShowProducts from '../ShowProducts/ShowProducts'

const ContentNav = () => {
  return(
    <div className="content__products-inner">
      <div className="sort-card">
        <ul className="sort-card__items">
          <li>Popular products</li>
          <li>Low price</li>
          <li>High price</li>
          <li>Categoties</li>
        </ul>
        <div className="sort-card__options">
          <span></span>
          <span></span>
        </div>
      </div>
      <ShowProducts />
    </div>
  )
}
export default ContentNav
