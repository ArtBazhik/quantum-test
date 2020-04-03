import React from 'react'
import s from './footerDown.module.scss'

const FooterDown = () => {
  return(
      <div className='container'>
        <div className={s.footerDown}>
          <ul className={s.list}>
            <li>© 2016. Quantum UI kit</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
          <div className={s.banks}>
            <span>Accepted payment methods</span>
            <span className={s.visa}></span>
            <span className={s.masterCard}></span>
            <span className={s.payPal}></span>
            <span className={s.amazon}></span>
          </div>
        </div>
      </div>

  )
}
export default FooterDown
