import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { editUser } from '../../Redux/actions';
import Sidebar from './Sidebar';
import ImageUpload from '../Dashboard/components/ImageUpload';
import Swal from 'sweetalert2';
const Editar = () => {
	const token = Cookies.get('auth'); // {"email":"test","password":"test"}
	const decoded = jwt_decode(token);
	const id = decoded.id;
	const users = useSelector((state) => state.users);
	const userProfile = users.filter((user) => user.id === id)[0];
	const dispatch = useDispatch();
	const navigate = useNavigate();
	console.log(userProfile);
	const initialState = {
		rol: userProfile.rol,
		name: userProfile.name,
		description: userProfile.description,
		birthdate: userProfile.birthdate,
		email: userProfile.email,
		image: userProfile.image,
		country: userProfile.country,
		city: userProfile.city,
		address: userProfile.address,
		state: userProfile.state,
		phone: userProfile.phone,
	};
	const [user, setUser] = useState(initialState);
	const [value, setValue] = useState(dayjs(user.birthdate));
	const [imageUrl, setImageUrl] = useState('');
	useEffect(() => {
		setUser((prevDetails) => ({
			...prevDetails,
			image: imageUrl,
		}));
	}, [imageUrl]);
	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editUser(user));
		Swal.fire('Se ha modificado el usuario correctamente');
		navigate('/admin');
	};
	console.log(userProfile);
	return (
		<div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
			<Sidebar userProfile={userProfile} />
			<div className="p-10 text-center lg:col-span-3 xl:col-span-5 bg-gray-100 h-screen overflow-y-scroll items-center">
				<h1 className="text-2xl md:text-3xl font-bold">
					Editar <span className="text-indigo-600">Perfil</span>
				</h1>
				<div className="flex justify-around">
					<div className="w-2/12"></div>
					<form
						className="pr-10 space-y-6 mt-10 text-base shadow-xl bg-indigo-100 p-3 items-center w-5/12"
						onSubmit={handleSubmit}
					>
						<div>
							<label
								htmlFor="name"
								className="block font-medium leading-6 text-gray-900"
							>
								Nombre:
							</label>
							<div className="mt-2">
								<input
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
									placeholder="Ej: Juan Rodríguez"
									type="text"
									value={user.name}
									name="name"
									onChange={handleChange}
									id="name"
								/>
							</div>
						</div>
						{user.rol === 'Walker' && (
							<div>
								<label
									htmlFor="description"
									className="block font-medium leading-6 text-gray-900"
								>
									Descripción:
								</label>
								<textarea
									type="text"
									id="description"
									value={user.description}
									name="description"
									onChange={handleChange}
									placeholder="Una descripción de tí, para que la vean los interesados"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
								/>
							</div>
						)}
						<div>
							<label
								htmlFor="email"
								className="block font-medium leading-6 text-gray-900"
							>
								Email:
							</label>
							<input
								type="email"
								id="email"
								value={user.email}
								name="email"
								onChange={handleChange}
								placeholder="correo@correo.com"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
							/>
							<label
								htmlFor="birthdate"
								className="block font-medium leading-6 text-gray-900 mt-5"
							>
								Birth Date:
							</label>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									disableFuture
									openTo="year"
									views={['year', 'month', 'day']}
									value={value}
									onChange={(newValue) => {
										setValue(newValue);
										setUser({
											...user,
											birthdate:
												newValue.format('YYYY-MM-DD'),
										});
									}}
									renderInput={(params) => (
										<TextField {...params} />
									)}
								/>
							</LocalizationProvider>
						</div>
						<div>
							<label className="block font-medium leading-6 text-gray-900">
								Pais
							</label>
							<input
								type="text"
								id="country"
								name="country"
								value={user.country}
								onChange={handleChange}
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
							/>
						</div>
						<div>
							<label className="block font-medium leading-6 text-gray-900">
								Estado
							</label>
							<input
								type="text"
								id="state"
								name="state"
								value={user.state}
								onChange={handleChange}
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
							/>
						</div>
						<div>
							<label className="block font-medium leading-6 text-gray-900">
								Ciudad
							</label>
							<input
								type="text"
								id="city"
								name="city"
								value={user.city}
								onChange={handleChange}
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
							/>
						</div>

						<div>
							<label
								htmlFor="address"
								className="block font-medium leading-6 text-gray-900"
							>
								Direccion
							</label>
							<input
								type="text"
								id="address"
								value={user.address}
								name="address"
								onChange={handleChange}
								placeholder="Calle, avenida"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
							/>
						</div>
						<div>
							<label
								htmlFor="phone"
								className="block font-medium leading-6 text-gray-900"
							>
								Teléfono
							</label>
							<input
								type="number"
								id="phone"
								value={user.phone}
								name="phone"
								onChange={handleChange}
								placeholder="Tu teléfono, sin letras ni espacios"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
							/>
						</div>
						<div>
							<ImageUpload
								imageUrl={imageUrl}
								setImageUrl={setImageUrl}
							/>
						</div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Editar
						</button>
					</form>
					<div className="w-2/12"></div>
				</div>
			</div>
		</div>
	);
};

export default Editar;
