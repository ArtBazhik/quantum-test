import React from 'react'
import {NavLink} from 'react-router-dom'
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
  'Watches',
]

const NavBar = (props) => {
  return (
      <aside className={s.navBar}>
        <ul className={s.categories}>
          <li className={s.computers}>
            <NavLink to='/computers' activeClassName={s.active}>{categories[0]}</NavLink>
          </li>
          <li className={s.appleComputers}>
            <NavLink to="/appleComputers" activeClassName={s.active}>{categories[1]}</NavLink>
          </li>
          <li className={s.laptops}>
            <NavLink to="/laptops" activeClassName={s.active}>{categories[2]}</NavLink>
          </li>
          {/*<li className={s.friends}>*/}
          {/*  <NavLink to={"/"}>{categories[3]}</NavLink>*/}
          {/*</li>*/}
          {/*<li className={s.computersComponents}>*/}
          {/*  <NavLink to={"/"}>{categories[4]}</NavLink>*/}
          {/*</li>*/}
          {/*<li className={s.accessories}>*/}
          {/*  <NavLink to={"/"}>{categories[5]}</NavLink>*/}
          {/*</li>*/}
          <li className={s.cellPhones}>
            <NavLink to="/phones" activeClassName={s.active}>{categories[6]}</NavLink>
          </li>
          {/*<li className={s.tvVideo}>*/}
          {/*  <NavLink to={"/"}>{categories[7]}</NavLink>*/}
          {/*</li>*/}
          {/*<li className={s.gameConsoles}>*/}
          {/*  <NavLink to={"/"}>{categories[8]}</NavLink>*/}
          {/*</li>*/}
          {/*<li className={s.watches}>*/}
          {/*  <NavLink to={"/"}>{categories[9]}</NavLink>*/}
          {/*</li>*/}
        </ul>
      </aside>
  )
}
export default NavBar
