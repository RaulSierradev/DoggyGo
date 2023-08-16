import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import {Home, Nada} from "./Views"

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to={'/inicio'} />} />
        <Route path='/inicio' element={<Nada />} />
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
