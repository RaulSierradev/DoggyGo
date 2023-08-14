import React from 'react'
import { probarEstado } from '../../Redux/actions'
import { useDispatch } from 'react-redux'

const Nada = () => {

  const dispatch = useDispatch()

  return (
    <div>
        <button onClick={()=>{dispatch(probarEstado())}}>Pobar el estado</button>
    </div>
  )

}

export default Nada