import React, {useState, useEffect} from 'react'
import s from './headerNav.module.scss'

const HeaderNav = (props) => {
  let subMenu = React.createRef()
  let openSubmenu = () => {
    subMenu.current.classList.toggle(s.active)
  }
  const categories = [
    'Computers',
    'Apple Computers',
    'Laptops',
    'Friends',
    'Computer Components',
    'Accessories',
    'Cell Phones',
    'TV & Video',
    'Game consoles',
    'Watches',
  ]
  return (
      <div className={s.headerNav}>
        <div className={s.container}>
          <div className={s.navInner}>
            <div className={s.navAllCategory}>
              <span onClick={openSubmenu}>All Categories</span>
              <ul  className={s.subMenuCategories}>
                <li  ref={subMenu} className={s.subMenuList}>
                  <ul>
                    <li>{categories[0]}</li>
                    <li>{categories[1]}</li>
                    <li>{categories[2]}</li>
                    <li>{categories[3]}</li>
                    <li>{categories[4]}</li>
                    <li>{categories[5]}</li>
                    <li>{categories[6]}</li>
                    <li>{categories[7]}</li>
                    <li>{categories[8]}</li>
                    <li>{categories[9]}</li>
                  </ul>
                </li>
              </ul>
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
