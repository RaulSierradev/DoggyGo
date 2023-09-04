import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';

const PrivateRoutes = ({ rol }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const token = urlParams.get('token');
		if (token) {
			console.log(token);
			Cookies.set('auth', token);
			// Remove token from URL
			window.history.replaceState({}, document.title, '/');
		}
		setLoading(false);
	}, []);

	if (loading) return null;

	const token = Cookies.get('auth');
	const isAuthenticated = !!token;
	const parenRoute = { Walker: '/dash', Client: '/home', Admin: '/admin' };

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	const decoded = jwt_decode(token);
	const userRole = decoded.rol;

	if (rol && !rol.includes(userRole)) {
		return <Navigate to={parenRoute[userRole]} />;
	}

	return <Outlet />;
};

export default PrivateRoutes;
