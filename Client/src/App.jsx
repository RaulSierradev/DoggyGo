import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nada from './Views/Nada/Nada';
import Layout from './Views/Dashboard/LayOut';
import Users from './Views/Dashboard/components/Users';
import User from './Views/Dashboard/components/User';
import HomeDashboard from './Views/Dashboard/Home/HomeDashboard';
import RegistroPaseador from './Views/Registro/RegistroPaseador.jsx';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigate to="/inicio" />} />
				<Route path="/inicio" element={<Nada />} />
				<Route
					path="/registropaseador"
					element={<RegistroPaseador />}
				/>
				<Route path="/dash" element={<Layout />}>
					<Route path="" element={<HomeDashboard />} />
					<Route path="users" element={<Users />} />
					<Route path="users/:id" element={<User />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
