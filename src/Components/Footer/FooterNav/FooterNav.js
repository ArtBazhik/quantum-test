import React from 'react'
import icLogo from '../../Header/QUANTUM-logo.svg'
import s from './footerNav.module.scss'

const FooterNav = () => {
  return(
      <div className={s.footerNav}>
        <div className='container'>
          <div className={s.inner}>
            <a href='#' className={s.item}>
              <img src={icLogo} alt=''/>
            </a>
            <ul className={`${s.navList} ${s.item}`}>
              <li>Shop</li>
              <li>Journal</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
            <div className={`${s.blockSocial} ${s.item}`} >
              <span className={s.facebook}></span>
              <span className={s.twitter}></span>
              <span className={s.instagram}></span>
              <span className={s.youtube}></span>
            </div>
          </div>
        </div>
      </div>
  )
}
export default FooterNav
