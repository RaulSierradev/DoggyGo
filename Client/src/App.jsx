import React from 'react'
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Nada from './Views/Nada/Nada'
import Registro from './Views/Registro/RegistroPaseador.jsx'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to={'/inicio'} />} />
        <Route path='/inicio' element={<Nada />} />
        <Route path='/registropaseador' element={<Registro />} />
      </Routes>
    </div>
  )
}

export default App
