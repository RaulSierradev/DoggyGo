import React from 'react'
import style from './DogCard.module.css'

const DogCard = ({dog, anmdl}) => {

  return (
    <button className={style.DogCard} style={{'--imagebg':`url(${dog.image ? dog.image : 'https://imgs.search.brave.com/OaQAb-Djr8GcFPEw6CQ_xyK-zIDa9BNrBuplUdVjqPE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgy/MTc2NjM4L3Bob3Rv/L2hhcHB5LWRvZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/czlqbkp1UTAtSUR6/SlRCVjFyUHN3aU5u/bDlRQ1dDMHhCLWND/SFlBTzNQYz0'})`, animationDelay:anmdl}}>
        <p className={style.nameDog}>{dog.name}</p>
    </button>
  )
}

export default DogCard