import React from 'react'
import style from './SideBtn.module.css'

export const SideBtn = (props) => {

  return (
    <button className={style.SideBtn} onClick={props.fx} style={{'--bg':`url(${props.img})`}}>
      <p className={style.btsTitle}>{props.title}</p>
    </button>
  )
}
