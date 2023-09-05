import React from 'react'
import style from './Contact.module.css'

const Contact = (props) => {

  let userName = 'nombre del usuario'
  let userEmail = 'email del usuario'

  return (
    <div className={style.ovr}>
      <div className={style.vwContainer}>
      <div className={style.contact}>
        <header className={style.contacthdr}>
          <p className={style.contact_p}>DoggyGo</p>
          <hr />
        </header>
        <h1 className={style.frmttl}>
          cuentanos lo que tienes 
          para decir👋
        </h1>
        <form className={style.form}>
          <div className={style.inpsSection}>
          <div className={style.secInput}>
            <label className={style.lblinp} >Tu nombre</label>
            <input className={style.inp} disabled type="text" value={userName}  style={{color:'gray', cursor:'not-allowed'}}/>
          </div>
          <div className={style.secInput}>
            <label className={style.lblinp} >Tu email</label>
            <input className={style.inp} disabled type="text" value={userEmail}  style={{color:'gray', cursor:'not-allowed'}}/>
          </div>
          <div className={style.secInput}>
            <label className={style.lblinp}>Titulo</label>
            <input className={style.inp} type="text" name="" id="" />
          </div>
          <div style={{display:'grid', placeItems:'center'}}>
          <select name="" id="" style={{backgroundColor:'rgba(15, 27, 76, 1)', color:'white'}}>
            <option value=""></option>
            <option value="problema o queja">problema o queja</option>
            <option value="Sugerencia">Sugerencia</option>
            <option value="Contacto">Contacto</option>
            <option value="Ayuda">Ayuda</option>
          </select>
          </div>
          </div>
          <textarea className={style.txtar} name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="enviar" />
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact