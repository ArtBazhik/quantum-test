import React from 'react'

const HeaderNav = () => {
  return(
    <div className="header__nav">
    <div className="container">
      <div className="header__nav-inner">
        <div className="header__nav-allCategory">
          All Categories
        </div>
        <div className="header__nav-menu">
          <ul className="header__nav-menuList">
            <li>Super Deals</li>
            <li>Featured Brands</li>
            <li>Collections</li>
            <li>Bestselling</li>
          </ul>
        </div>
        <div className="header__nav-submenu">
          <ul className="header__nav-submenuList">
            <li>Help</li>
            <li>USD</li>
            <li>Language</li>
           </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
export default HeaderNav