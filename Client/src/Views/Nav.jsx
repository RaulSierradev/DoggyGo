import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

function Nav() {
	const navigate = useNavigate();
	const users = useSelector((state) => state.users);
	let isAuthenticated = false;
	let currentUser = null;

	const token = Cookies.get('auth') ? Cookies.get('auth') : null;
	if (token) {
		isAuthenticated = true;
		const { id } = jwt_decode(token);
		currentUser = users.filter((user) => user.id === id)[0];
	}

	const handleLogout = () => {
		Cookies.remove('auth');
		navigate('/');
	};

	return (
		<nav className="flex justify-between items-center bg-[#16425b] h-20 p-4">
			<div className="flex items-center gap-2">
				<img
					className="w-10 h-10 rounded-full"
					src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
				/>
				<div className="text-white text-xl font-bold leading-tight tracking-widest">
					DoggyGo
				</div>
			</div>
			<div className="flex gap-10 text-zinc-200">
				<Link to="/home" className="text-white flex gap-1">
					<div className="flex items-center">
						<HomeIcon />
					</div>
					<p>Home</p>
				</Link>
				<Link to="/dash" className="text-white flex gap-1">
					<div className="flex items-center">
						<Person2Icon />
					</div>
					<p>Profile</p>
				</Link>
				<p>Help</p>
			</div>
			<div className="text-white font-bold flex gap-4 items-center">
				<div className="ml-2 rounded-full">
					{currentUser ? (
						<img
							className="w-10 h-10 rounded-full"
							src={currentUser.image}
							alt=""
						/>
					) : (
						''
					)}
				</div>
				{currentUser ? currentUser.name : ''}
			</div>
			<div className="flex gap-2">
				{isAuthenticated ? (
					<button
						onClick={handleLogout}
						className="border border-neutral-50 px-6 py-3 rounded text-neutral-50"
					>
						LOGOUT
					</button>
				) : (
					<>
						<Link
							to={'/login'}
							className="border border-neutral-50 px-6 py-2 rounded text-neutral-50"
						>
							Inicia sesión
						</Link>
						<Link
							to={'/registro'}
							className="bg-neutral-50 px-6 py-2 rounded text-zinc-900"
						>
							Registro
						</Link>
					</>
				)}
			</div>
			<div className="w-8 h-8">{/* Your menu icon here */}</div>
		</nav>
	);
}

export default Nav;
