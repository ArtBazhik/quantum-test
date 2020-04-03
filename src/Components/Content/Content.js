import React from 'react'
import s from './content.module.scss'
import NavBar from './NavBar/NavBar'
import ContentNav from './ContentNav/ContentNav'

const Main = () => {
  return(
    <main className={s.content}>
      <div className={s.container}>
        <div className={s.inner}>
          <NavBar />
          <ContentNav />
        </div>
      </div>
    </main>
  )
}
export default Main
