import React from 'react';
import icon from './QUANTUM-logo.svg'
import SearchInput from '../SearchInput/SearchInput'
import UserBar from '../UserBar/UserBar'
import HeaderNav from '../HeaderNav/HeaderNav'
import s from './header.module.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className={s.inner}>
            <a className="header__logo" href="#">
              <img src={icon} alt="Logo"></img>
            </a>
            <div className="header__search">
              <SearchInput />
          </div>
          </div>
          <UserBar/>
        </div>
      </div>
      <HeaderNav/>
    </header> 
  )
}
export default Header
