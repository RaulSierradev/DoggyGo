import React, { useState } from 'react'
import style from './Plans.module.css'
const Plans = () => {

    const [mY, setMY] = useState(false)
    const price = {
                   doggy:100,
                   doggyPlus:130,
                   doggyPro:150,
                  }

  return (
    <div className={style.Plans}>
        <div className={style.plansinfo}>
            <h1>Pasea a tu perro comodamente</h1>
            <span>Unete hoy y encuentra a alguien que lo pasee por ti</span>
            <div className={style.myIndicator}>
                <div className={style.indi} style={{left: mY ? '0%' : '55%'}}>{mY ?  'Mes' : 'año'}</div>
                <input type="checkbox" checked={mY} onChange={()=>{setMY(!mY)}}/>
            </div>
        </div>
        <div className={style.CardsContiner}>
            <div className={style.card1} style={{animationDelay:'100ms'}}>{mY ? price.doggy : price.doggy * 11.5 }</div>
            <div className={style.card2} style={{animationDelay:'200ms'}}>{mY ? price.doggyPlus : price.doggyPlus * 11.5 }</div>
            <div className={style.card3} style={{animationDelay:'300ms'}}>{mY ? price.doggyPro : price.doggyPro * 11.5 }</div>
        </div>
    </div>
  )
}

export default Plans