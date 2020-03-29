import React from 'react';
import icon from './QUANTUM-logo.svg'
import SearchInput from '../SearchInput/SearchInput'
import UserBar from '../UserBar/UserBar'
import HeaderNav from '../HeaderNav/HeaderNav'

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
          <UserBar/>
        </div>
      </div>
      <HeaderNav/>
    </header> 
  )
}
export default Header