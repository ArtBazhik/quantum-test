import React from 'react'
import NavBar from '../NavBar/NavBar'
import ContentNav from '../ContentNav/ContentNav'

const Main = () => {
  return(
    <main className="content">
      <div className="container">
        <div className="content__inner">
          <NavBar />
          <ContentNav />
        </div>
      </div>
    </main>
  )
}
export default Main