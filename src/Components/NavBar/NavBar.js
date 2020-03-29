import React from 'react';


const NavBar = () => {
  return(
    <aside className="content__nav-bar">
      <ul className="nav-bar__categories">
        <li className="nav-bar__computers">Computers</li>
        <li className="nav-bar__apple-computers">Apple Computers</li>
        <li className="nav-bar__laptops">Laptops</li>
        <li className="nav-bar__friends">Friends</li>
        <li className="nav-bar__computers-components">Computer Components</li>
        <li className="nav-bar__accessories">Accessories</li>
        <li className="nav-bar__cell-phones">Cell Phones</li>
        <li className="nav-bar__tv-video">TV & Video</li>
        <li className="nav-bar__game-consoles">Game consoles</li>
        <li className="nav-bar__whatches">Watches</li>
      </ul>
    </aside>
  )
}
export default NavBar