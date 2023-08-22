import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
	const isAuthenticated = !!Cookies.get('auth');
	const navigate = useNavigate();

	const handleLogout = () => {
		Cookies.remove('auth');
		navigate('/login');
	};

	if (!isAuthenticated) {
		navigate('/login');
		return null; // Return null to prevent rendering anything else
	}

	return (
		<div>
			<button
				className="rounded-sm bg-slate-100 text-slate-500"
				onClick={handleLogout}
			>
				Sign Out
			</button>
		</div>
	);
};

export default ProtectedPage;
