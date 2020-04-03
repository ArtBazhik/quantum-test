import React from 'react';
import s from './userBar.module.scss'

const UserBar = () => {
  return(
    <div className={s.userBar}>
      <ul className={s.barList}>
        <li>2 Items</li>
        <li>Wish List</li>
        <li>Sing in</li>
      </ul>
    </div>
  )
} 
export default UserBar
