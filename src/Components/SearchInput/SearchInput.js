import React from 'react';


const SearchInput = () => {
  return(
    <div className="header__search-box">
      <input className="header__search-line" placeholder="Search gods"></input>
      <span className="header__search-category">
      category
       </span>
    </div>
  )
}

export default SearchInput
