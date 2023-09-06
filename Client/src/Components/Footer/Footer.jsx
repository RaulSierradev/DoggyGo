import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.Footer} style={{marginTop:'5%'}}>
      <div className={style.links}>
        <h1>DoggyGo</h1>
        <div style={{visibility:'hidden'}}>
          <a href=''>enlace1</a>
          <a href=''>enlace2</a>
          <a href=''>enlace3</a>
        </div>
        <button style={{visibility:'hidden'}}>button</button>
      </div>
      <hr style={{borderColor:'rgba(51, 51, 51, 1)', width:'75%', marginLeft:'auto', marginRight:'auto', borderWidth:'1.4px', opacity:0.25}} />
      <p className={style.Declaracion}>©2023 DoggyGo todos los derechos reservados</p>
    </footer>
  )
}

export default Footer