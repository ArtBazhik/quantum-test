import React from 'react'
import s from './navBar.module.scss'

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
  'Watches'
]

const NavBar = (props) => {
  return (
      <aside className={s.navBar}>
        <ul className={s.categories}>
          <li className={s.computers}>{categories[0]}</li>
          <li className={s.appleComputers}>{categories[1]}</li>
          <li className={s.laptops}>{categories[2]}</li>
          <li className={s.friends}>{categories[3]}</li>
          <li className={s.computersComponents}>{categories[4]}</li>
          <li className={s.accessories}>{categories[5]}</li>
          <li className={s.cellPhones}>{categories[6]}</li>
          <li className={s.tvVideo}>{categories[7]}</li>
          <li className={s.gameConsoles}>{categories[8]}</li>
          <li className={s.watches}>{categories[9]}</li>
        </ul>
      </aside>
  )
}
export default NavBar
