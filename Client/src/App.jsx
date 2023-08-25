import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Views/Dashboard/LayOut';
import Users from './Views/Dashboard/components/Users';
import User from './Views/Dashboard/components/User';
import HomeDashboard from './Views/Dashboard/Home/HomeDashboard';
import Registro from './Views/Registro/Registro.jsx';
import Login from './Views/Login/Login';
import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home';
import PrivateRoutes from './Views/utils/PrivateRoutes';
import T from './Views/T/T';
import Error404 from './Views/Error404/Error404';
import WalkerDetail from './Views/WalkerDetail/WalkerDetail';
import Payment from './Views/Booking Confirmation/Payment';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigate to="/inicio" />} />
				<Route path="/inicio" element={<Landing />} />
				<Route path="/registro" element={<Registro />} />
				<Route path="/login" element={<Login />} />
				<Route element={<PrivateRoutes />}>
					<Route path="/dash" element={<Layout />} exact>
						<Route path="" element={<HomeDashboard />} exact />
						<Route path="history" element={<Users />} exact />
						<Route path="profile" element={<User />} exact />
					</Route>
				</Route>
				<Route path="/T" element={<T />} />
				<Route path="*" element={<Error404 />} />

				<Route path="/home" element={<Home />} />
				<Route path="/home/detail/:id" element={<WalkerDetail />} />
				<Route path="/home/payment" element={<Payment />} />
			</Routes>
		</div>
	);
}

export default App;
