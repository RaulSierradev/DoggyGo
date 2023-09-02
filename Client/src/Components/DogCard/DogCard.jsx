import React from 'react'
import style from './DogCard.module.css'

const DogCard = (props) => {

  return (
    <div className={style.DogCard}>
        <pre>
            {
            JSON.stringify(props.dog)
            }
        </pre>
    </div>
  )
}

export default DogCard