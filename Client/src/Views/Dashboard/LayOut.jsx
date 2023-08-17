import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Nav from '../Nav';

const Layout = () => {
	return (
		<div className="bg-indigo-400 text-white h-full min-h-screen">
			<Navbar />
			{/* <Nav /> */}
			<div className="flex">
				<div className="w-60 py-1 px-5 border-r-2 border-slate-400">
					<Menu />
				</div>
				<div className="py-1 px-5 w-full flex-grow">
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
