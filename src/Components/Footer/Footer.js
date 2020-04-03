import React from 'react'
import FooterNav from './FooterNav/FooterNav'
import FooterDown from './FooterDown/FooterDown'
import s from './footer.module.scss'

const Footer = () => {
  return(
      <footer className={s.footer}>
          <FooterNav/>
          <FooterDown/>
      </footer>
  )
}
export default Footer
