import React from 'react';
import icon from '../img/Logo/QUANTUM-logo.svg'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <a className="header__logo" href="#">
            <img src={icon} alt="Logo"></img>
          </a>
          <div className="header__search">
          <SearchInput />
          </div>
          <div className="header__user-bar">
          <ul className="header__user-barList">
            <li>2 Items</li>
            <li>Wish List</li>
            <li>Sing in</li>
          </ul>
          </div>
        </div>
      </div>
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
    </header> 
  )
}
export default Header
