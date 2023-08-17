import React from 'react'
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Landing from './Views/Landing/Landing'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to={'/inicio'} />} />
        <Route path='/inicio' element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App
