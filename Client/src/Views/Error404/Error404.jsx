import React from 'react'
import style from './Error404.module.css'
import img from '/Error404Img.png' 

const Error404 = () => {
  const image = img
  return (
    <div className={style.Error404}>
      <div className={style.Error404_imgContainer}>
        <p  className={style.Error404_txtA}>Ups..!!</p>
        <img className={style.Error404_img} src={image} />
        <button className={style.Error404_txtB}>Home</button>
      </div>
    </div>
  )
}

export default Error404