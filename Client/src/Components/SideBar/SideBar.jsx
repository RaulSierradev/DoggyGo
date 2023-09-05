import React from 'react'
import style from './SideBar.module.css'

export const SideBar = ({ children }) => {
  return (
    <aside className={style.sidebar}>
    <div className={style.sidecontainermrg}>
        {
          children
        }
    </div>
</aside>
  )
}
