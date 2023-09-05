import React from 'react'
import style from './Testimonios..module.css'

const Testimonios = (props) => {
  return (
    <div className={style.TestimoniosContainer}>
      <div>
      {
        props.testimonios?.map((e, index) => {
          return (
            <div key={'testimonio'+index} className={style.testimonioC}>
              <div className={style.testimonio}>
                <img src={e.img} alt="" />
                <p>{e.name}</p>
                <p>{e.msg}</p>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Testimonios