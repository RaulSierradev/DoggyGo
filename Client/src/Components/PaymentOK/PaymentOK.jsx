import React from 'react'
import style from './PaymentOK.module.css'
import icon from '/SuccessIcon.png'

const PaymentOK = ({pay}) => {

  const iconURL = icon
  const pay2 = {
               monto:100,
               referencia:34322,
               fecha: 'Aug 21 2023 13:13',
               metododepago: 'mercado libre',
               user: 'roberto'
               }

  return (
    <div className={style.PaymentOK}>
          <div className={style.POK_sec1}>
            <img className={style.POK_icon} src={iconURL}/>
            <h2 className={style.POK_ttl}>Payment succes</h2>
            <h2 className={style.POK_mnt}>$ {pay2.monto.toLocaleString()}°</h2>
          </div>
            <hr />
        <div className={style.POK_sec2}>
          <div className={style.POK_sec2_TXcontainer}> <p>Ref Number</p> <p className={style.sc2tx_txsec}>39427</p> </div>
          <div className={style.POK_sec2_TXcontainer}> <p>Payment Time</p> <p className={style.sc2tx_txsec}>{`${new Date()}`.slice(4, 21)}</p> </div>
          <div className={style.POK_sec2_TXcontainer}> <p>Payment Method</p> <p className={style.sc2tx_txsec}>holaa</p> </div>
          <div className={style.POK_sec2_TXcontainer}> <p>Sander Name</p> <p className={style.sc2tx_txsec}>holaa</p> </div>
          <hr style={{borderStyle:'dashed'}}/>
          <div className={style.POK_sec2_TXcontainer}> <p className={style.sc2tx_total}>Total</p> <p className={style.sc2tx_total}>holaa</p> </div>
        </div>
    </div>
  )
}

export default PaymentOK