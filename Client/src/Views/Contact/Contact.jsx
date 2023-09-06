import React, { useState } from 'react'
import style from './Contact.module.css'
import { useSelector } from 'react-redux';
import axios from 'axios';

const Contact = (props) => {

  const user = useSelector(state => state.currentUser)

  const  [btnActive, setBtnActive] = useState(!true) 
  const [title, setTitle] = useState('')
  const [categoria, setCategoria] = useState('')
  const [message, SetMessage] = useState('')

  const SendContact = (event) => {
    event.preventDefault();
    setBtnActive(true)
    console.log({
      name:user.name,
      email:user.email,
      category: categoria,
      title,
      message,
      email:user.email,
    })
    axios.post('http:/contact', {
        name:user.name,
        email:user.email,
        category: categoria,
        title,
				message,
        email:user.email,
			})
    .then(()=>{
      setBtnActive(false)
    })
    .catch((error)=>{
      window.alert(error.message)
      setBtnActive(false)
    })
  }

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
        {/* ------------------------------FORM------------------------------ */}
        <form className={style.form} onSubmit={SendContact}>
          <div className={style.inpsSection}>
          <div className={style.secInput}>
            <label className={style.lblinp} >Tu nombre</label>
            <input className={style.inp} disabled type="text" value={user.name} style={{color:'gray', cursor:'not-allowed'}}/>
          </div>
          <div className={style.secInput}>
            <label className={style.lblinp} >Tu email</label>
            <input className={style.inp} disabled type="text" value={user.email}  style={{color:'gray', cursor:'not-allowed'}}/>
          </div>
          <div className={style.secInput}>
            <label className={style.lblinp}>Titulo</label>
            <input className={style.inp} type="text" required value={title} onChange={(event)=>{setTitle(event.target.value)}} />
          </div>
          <div style={{display:'grid', placeItems:'center'}}>
          <select required  value={categoria} onChange={(event)=>{setCategoria(event.target.value)}} style={{backgroundColor:'rgba(15, 27, 76, 1)', color:'white'}}>
            <option value=""></option>
            <option value="problema o queja">problema o queja</option>
            <option value="Sugerencia">Sugerencia</option>
            <option value="Contacto">Contacto</option>
            <option value="Ayuda">Ayuda</option>
          </select>
          </div>
          </div>
          <textarea className={style.txtar} required name="" id="" cols="30" rows="10" value={message} onChange={(event)=>{SetMessage(event.target.value)}} ></textarea>
          <input className={style[`inpsbm_${btnActive}`]} type="submit" value={btnActive ? 'Enviando' : 'enviar'} disabled={btnActive} />
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact