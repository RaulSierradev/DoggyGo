import React, { useState } from 'react'
import style from './UserEdit.module.css'
/* borrar al sustituir por urls de cloudinary */
import loaderImg from '/Loader-gif-transparent-background-11-GIF-Images-Download.gif'
/* borrar al sustituir por urls de cloudinary */

export const UserEdit = () => {

  /* Promesa de prueba de loader */
  const delay = (milliseconds) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promesa resuelta después de " + milliseconds + " milisegundos");
      }, milliseconds);
    });
  };

/* borrar al sustituir por urls de cloudinary */
  const imgLoader = loaderImg 

  /* en validaciones */
  const coincidenciaContraseña = false
  const BoolCaracteresInvalidos = false 

  /* necesaria para guardar cambios  */
  const  [btnActive, setBtnActive] = useState(true) 
  const [btnClass, setBtnClass] = useState('normal')
  const SaveChanges = (event) => {
    event.preventDefault();
    setBtnActive(false)
    setBtnClass('load')
    //proceso async
    delay(5000)
    .then(()=>{
      setBtnActive(true)
      setBtnClass('normal')
    })
    .catch((error)=>{
      /* alerta con seewtalert */
      setBtnActive(true)
      setBtnClass('normal')
    })
  }
  


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
          <form className={style.FormPass} onSubmit={SaveChanges}>
            <p className={style.FPtitle}>Actualiza tu contraseña</p>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Contraseña Actual</label>
              <input className={style.inpDisb} style={{cursor:'auto', color:'black'}} type="text" />
            </div>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Nueva contraseña</label>
              <input className={style.inpDisb} style={{cursor:'auto', color:'black'}} type="text" />
              <label className={style.lbInpt} style={{fontSize:'1cqmax', opacity:'40%'}}>(4-32 caracteres alfanumericos)</label>
              {
                /* sustituir por bool de las validaciones  */
                !BoolCaracteresInvalidos &&
                <p className={style.ErrorP}>{'<Caracteres invalidos en la contraseña>'}</p>
              }
            </div>
            <div className={style.InptContainer}>
              <label className={style.lbInpt}>Confirmacion</label>
              <input className={style.inpDisb} style={{cursor:'auto', color:'black'}} type="text" />
              {
                /* sustituir por bool de las validaciones  */
                !coincidenciaContraseña &&
                <p className={style.ErrorP}>{'<Las contraseñas no coinciden>'}</p>
              }
            </div>
            <button className={style[`btnSubm_${btnClass}`]} onClick={SaveChanges} disabled={!btnActive}>
              Guardar cambios 
              {
                btnClass === 'load' &&
                <img src={imgLoader} className={style.loader} />
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
