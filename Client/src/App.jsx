import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Views/Dashboard/LayOut";
import Users from "./Views/Dashboard/components/Users";
import User from "./Views/Dashboard/components/User";
import HomeDashboard from "./Views/Dashboard/Home/HomeDashboard";
import Registro from "./Views/Registro/Registro.jsx";
import Login from "./Views/Login/Login";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to='/inicio' />} />
        <Route path='/inicio' element={<Landing />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dash' element={<Layout />}>
          <Route path='' element={<HomeDashboard />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<User />} />
        </Route>
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
