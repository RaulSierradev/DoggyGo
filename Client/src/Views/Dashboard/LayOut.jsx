import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Nav from '../Nav';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { getAllWalks } from '../../Redux/actions';
import { useDispatch } from 'react-redux';

const Layout = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const token = urlParams.get('token');

		if (token) {
			Cookies.set('auth', token);
			// Remove token from URL
			window.history.replaceState({}, document.title, '/');
		}
	}, []);

	useEffect(() => {
		dispatch(getAllWalks());
	}, []);

	return (
		<div className="bg-[#0c2239] text-white h-full min-h-screen">
			{/* <Navbar /> */}
			<Nav />
			<div className="flex mt-5">
				<div className="w-60 py-1 px-5 border-r-2 border-slate-50">
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
