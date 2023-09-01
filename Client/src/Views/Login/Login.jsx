import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import verificacionLogin from './VerificarLogin.js';
import login from '../../img/Login.jpg';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAll } from '../../Redux/actions.js';
import google from '../../assets/google1.svg';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [logeo, setLogeo] = useState({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({});

	const googleLogin = (e) => {
		e.preventDefault();
		window.open('http://localhost:3001/auth/google/login', '_self');
	};

	useEffect(() => {
		try {
			dispatch(getAll());
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	const authenticateUser = async (email, password) => {
		try {
			const res = await axios.post('http://localhost:3001/user/login', {
				email,
				password,
			});
			console.log(res.data);
			Cookies.set('auth', res.data.token);
			return res.data.user;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	const handleChange = (e) => {
		setLogeo({
			...logeo,
			[e.target.name]: e.target.value,
		});
		setErrors(
			verificacionLogin({
				...logeo,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		// Authenticate user
		const user = await authenticateUser(logeo.email, logeo.password);

		if (user) {
			// Redirect to protected route after successful login
			if (user.rol === 'Walker') navigate('/dash');
		} else {
			// Show error message or perform other actions for failed authentication
			alert('Usuario o contraseña incorrectos');
		}
	};

	console.log(logeo);

	return (
		<div className="min-h-screen flex items-center justify-center bg-indigo-600">
			<div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-5 text-indigo-600">
				<div className="sm:w-1/2 px-16">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm">
						<button
							className="m-5 inline-block w-auto h-auto border-4 rounded"
							onClick={() => navigate('/inicio')}
						>
							Volver
						</button>
						<h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight">
							Inicio De Sesión
						</h2>
						<p className="text-gray-900 text-sm mt-3 text-center">
							¿No tienes una cuenta?{' '}
							<Link to="/registro">
								<span className="text-indigo-600 font-bold">
									Regístrate
								</span>
							</Link>
						</p>
					</div>

					<div className="flex flex-col items-center p-2">
						<button
							className="cursor-pointer"
							onClick={googleLogin}
						>
							<img className="rounded-md" src={google} alt="" />
						</button>

						<form
							className="flex flex-col gap-4"
							onSubmit={handleLogin}
						>
							<input
								className="p-2 rounded-xl border mt-8 text-gray-600"
								type="text"
								name="email"
								value={logeo.email}
								onChange={handleChange}
								placeholder="Email"
							></input>
							<input
								className="p-2 rounded-xl border text-gray-600"
								type="password"
								name="password"
								value={logeo.password}
								onChange={handleChange}
								placeholder="Contraseña"
							></input>
							{errors.email && (
								<p className="text-sm text-red-600">
									* {errors.email}
								</p>
							)}
							<button
								className="flex w-full justify-center rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								type="submit"
							>
								Iniciar Sesión
							</button>
						</form>
					</div>
				</div>
				<div className="sm:block hidden w-1/2">
					<img
						className="rounded-2xl sm:block hidden"
						src={login}
						alt="Imagen login"
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
