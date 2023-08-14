import React from 'react'
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Nada from './Views/Nada/Nada'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to={'/inicio'} />} />
        <Route path='/inicio' element={<Nada />} />
      </Routes>
    </div>
  )
}

export default App
