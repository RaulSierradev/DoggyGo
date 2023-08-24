import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
	const isAuthenticated = !!Cookies.get('auth');
	const navigate = useNavigate();

	const handleLogout = () => {
		Cookies.remove('auth');
		navigate('/inicio');
	};

	if (!isAuthenticated) {
		navigate('/login');
		return null; // Return null to prevent rendering anything else
	}

	return (
		<div>
			<button
				className="rounded-sm text-black bg-gray-200 p-2"
				onClick={handleLogout}
			>
				Sign Out
			</button>
		</div>
	);
};

export default ProtectedPage;
