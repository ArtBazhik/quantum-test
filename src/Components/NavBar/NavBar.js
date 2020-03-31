import React from 'react'

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
      <aside className="content__nav-bar">
        <ul className="nav-bar__categories">
          <li className="nav-bar__computers">{categories[0]}</li>
          <li className="nav-bar__apple-computers">{categories[1]}</li>
          <li className="nav-bar__laptops">{categories[2]}</li>
          <li className="nav-bar__friends">{categories[3]}</li>
          <li className="nav-bar__computers-components">{categories[4]}</li>
          <li className="nav-bar__accessories">{categories[5]}</li>
          <li className="nav-bar__cell-phones">{categories[6]}</li>
          <li className="nav-bar__tv-video">{categories[7]}</li>
          <li className="nav-bar__game-consoles">{categories[8]}</li>
          <li className="nav-bar__whatches">{categories[9]}</li>
        </ul>
      </aside>
  )
}
export default NavBar
