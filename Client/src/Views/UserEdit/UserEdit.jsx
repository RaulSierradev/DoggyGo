import React from 'react'
import style from './UserEdit.module.css'

export const UserEdit = () => {
  return (
    <div className={style.UserEdit}>
      <div className={style.UserEditContainerP}>
        <p className={style.UEtitle}>Perfil de usuario</p>
        <div className={style.UEformsCon}>
          <div className={style.PsuForm}>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Nombre de usuario</label>
              <input className={style.inpDisb} type="text" value={'Jose Ruiz L.'} disabled />
            </div>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Email</label>
              <input className={style.inpDisb} type="text" value={'JoseELmNCO@epicGames.com'} disabled />
            </div>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Sexo</label>
              <input className={style.inpDisb} type="text" value={'Masculino'} disabled />
            </div>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Cumpleaños</label>
              <input className={style.inpDisb} type="text" value={'fechas'} disabled />
            </div>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Pais</label>
              <input className={style.inpDisb} type="text" value={'Mexico'} disabled />
            </div>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Direccion</label>
              <input className={style.inpDisb} type="text" value={'Cell falsa 123, ciudad de Mexico, Mexico'} disabled />
            </div>
          </div>
          <form className={style.FormPass} onSubmit={()=>{}}>
            <p className={style.FPtitle}>Actualiza tu contraseña</p>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Contraseña Actual</label>
              <input className={style.inpDisb} style={{cursor:'auto'}} type="text" value={''}  />
            </div>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Nueva contraseña</label>
              <input className={style.inpDisb} style={{cursor:'auto'}} type="text" value={''}  />
              <label className={style.lbInpt} style={{fontSize:'1cqmax', opacity:'40%'}}>(4-32 caracteres alfanumericos)</label>
            </div>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Confirmacion</label>
              <input className={style.inpDisb} style={{cursor:'auto'}} type="text" value={''}  />
            </div>
            <button className={style.btnSubm}>Guardar cambios</button>
          </form>
        </div>
      </div>
    </div>
  )
}
