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
import Admin from './Views/Admin/Admin';
import Clientes from './Views/Admin/Clients/Clientes';
import Walkers from './Views/Admin/Walkers/Walkers';
import PerfilDeUsuario from './Views/PerfilDeUsuario/PerfilDeUsuario';
import UserProfile from './Views/Admin/UserProfile/UserProfile';
import Walks from './Views/Admin/Walks/Walks';

import Success from './Views/Mercado Pago/Success';
import AlertDialog from './Views/Home/Components/Card/AlertDialog';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigate to="/inicio" />} />
				<Route path="/inicio" element={<Landing />} />
				<Route path="/registro" element={<Registro />} />
				<Route path="/login" element={<Login />} />
				<Route path="/home/success" element={<Success />} />
				<Route path="/home" element={<Home />} />
				<Route path="/alert" element={<AlertDialog />} />

				{/* Walker routes */}
				<Route
					path="/dash"
					element={<PrivateRoutes rol={['Walker']} />}
				>
					<Route path="/dash" element={<Layout />}>
						<Route path="" element={<HomeDashboard />} exact />
						<Route path="/dash/history" element={<Users />} exact />
						<Route path="/dash/profile" element={<User />} exact />
					</Route>
				</Route>

				{/* Client routes */}
				<Route
					path="/home/detail/:id"
					element={<PrivateRoutes rol={['Client']} />}
				>
					<Route index element={<WalkerDetail />} />
					<Route path="payment" element={<Payment />} />
				</Route>

				<Route path="/T" element={<T />} />
				<Route path="*" element={<Error404 />} />

				{/* Admin routes */}
				<Route
					path="/admin"
					element={<PrivateRoutes rol={['Admin']} />}
				>
					<Route index element={<Admin />} />
					<Route path="clientes" element={<Clientes />} />
					<Route path="paseadores" element={<Walkers />} />
					<Route path="/admin/detail/:id" element={<UserProfile />} />
					<Route path="/admin/paseos" element={<Walks />} />
				</Route>

				{/* <Route path="/admin" element={<Admin />} />
				<Route path="/admin/clientes" element={<Clientes />} />
				<Route path="/admin/paseadores" element={<Walkers />} />
				<Route path="/admin/detail/:id" element={<UserProfile />} />
				<Route path="/admin/paseos" element={<Walks />} /> */}
			</Routes>
		</div>
	);
}

export default App;
