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
import UserProfile from './Views/Admin/UserProfile/UserProfile';
import Walks from './Views/Admin/Walks/Walks';
import SuperAdmin from './Views/SuperAdmin/SuperAdmin';
import SuperClientes from './Views/SuperAdmin/SuperClients/SuperClientes';
import SuperWalkers from './Views/SuperAdmin/SuperWalkers/SuperWalkers';
import SuperUserProfile from './Views/SuperAdmin/SuperUserProfile/SuperUserProfile';
import SuperWalks from './Views/SuperAdmin/SuperWalks/SuperWalks';
import ResetPassword from './Views/Login/ResetPassword';
import Success from './Views/Mercado Pago/Success';
import AlertDialog from './Views/Home/Components/Card/AlertDialog';
import Recuperar from './Views/recuprarContrasena/Recuperar';
import Contact from './Views/Contact/Contact';
import Editar from './Views/Admin/Editar';
import SAdmins from './Views/SuperAdmin/SAdmins/SAdmins';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigate to="/inicio" />} />
				<Route path="/inicio" element={<Landing />} />
				<Route path="/registro" element={<Registro />} />
				<Route path="/login" element={<Login />} />
				<Route path="/success" element={<Success />} />
				<Route path="/home" element={<Home />} />
				<Route path="/alert" element={<AlertDialog />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route
					path="/recuperarcontraseña/:id"
					element={<Recuperar />}
				/>
				<Route path="/Help" element={<Contact />} />
				<Route path="/T" element={<T />} />
				<Route path="*" element={<Error404 />} />

				{/* Walker routes */}
				<Route
					path="/dash"
					element={<PrivateRoutes rol={['Walker', 'Client']} />}
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

				{/* Admin routes */}
				<Route
					path="/admin"
					element={<PrivateRoutes rol={['Admin']} />}
				>
					<Route index element={<Admin />} />
					<Route path="clientes" element={<Clientes />} />
					<Route path="editar" element={<Editar />} />
					<Route path="paseadores" element={<Walkers />} />
					<Route path="detail/:id" element={<UserProfile />} />
					<Route path="paseos" element={<Walks />} />
				</Route>

				<Route path="/sadmin" element={<SuperAdmin />} />
				<Route path="/sadmin/clientes" element={<SuperClientes />} />
				<Route path="/sadmin/paseadores" element={<SuperWalkers />} />
				<Route
					path="/sadmin/detail/:id"
					element={<SuperUserProfile />}
				/>
				<Route path="/sadmin/paseos" element={<SuperWalks />} />
				<Route path="/sadmin/admin" element={<SAdmins />} />
			</Routes>
		</div>
	);
}

export default App;
