import React from 'react';
import s from './searchInput.module.scss'


const SearchInput = () => {
  return(
    <div className={s.searchBox}>
      <input className={s.searchLine} placeholder="Search gods"></input>
      <span className={s.searchCategory}>
      category
       </span>
    </div>
  )
}

export default SearchInput
