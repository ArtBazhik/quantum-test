import React from 'react'
import s from './headerNav.module.scss'

const HeaderNav = () => {
  return (
      <div className={s.headerNav}>
        <div className={s.container}>
          <div className={s.navInner}>
            <div className={s.navAllCategory}>
              All Categories
            </div>
            <div className={s.navMenu}>
              <ul className={s.navMenuList}>
                <li>Super Deals</li>
                <li>Featured Brands</li>
                <li>Collections</li>
                <li>Bestselling</li>
              </ul>
            </div>
            <div className={s.navSubmenu}>
              <ul className={s.navSubmenuList}>
                <li className={s.listItem}>Help</li>
                <li className={s.listItem}>USD</li>
                <li className={s.listItem}>Language</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

  )
}
export default HeaderNav
