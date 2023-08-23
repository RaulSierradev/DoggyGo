import React from 'react'
import style from './Paseadores.module.css'

const Paseadores = ({walker}) => {
  return (
    <div className={style.walker}>
        <div className={style.imgContaienr} style={{backgroundImage: `url(${walker.img})`}} />
        <div className={style.txtC}>
          <p className={style.price}><b>{walker.price}</b></p>
          <span style={{opacity:0.40}}>{walker.addres.slice(0, 30)}</span>
          <div className={style.infoC}>
            <p>{walker.dogs}</p>
            <p>{walker.distance}</p>
          </div>
        </div>
    </div>
  )
}

export default Paseadores