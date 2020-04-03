import React from 'react';
import icon from './QUANTUM-logo.svg'
import SearchInput from './HeaderSearch/SearchInput'
import UserBar from './HeaderSearch/UserBar/UserBar'
import HeaderNav from './HeaderMenu/HeaderNav'
import s from './header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerTop}>
          <div className={s.inner}>
            <a className={s.headerLogo} href="#">
              <img src={icon} alt="Logo"></img>
            </a>
            <div className={s.headerSearch}>
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
