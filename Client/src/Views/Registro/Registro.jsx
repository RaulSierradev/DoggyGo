import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VerificacionPaseador from "./VerificacionPaseador";
import registroPaseador from "../../img/registroPaseador.png";


import { useDispatch } from 'react-redux';
import { createUser, editUser } from '../../Redux/actions';
import google from '../../assets/google1.svg';

const initialState = {
	rol: '',
	name: '',
	password: '',
	description: '',
	birthdate: '',
	email: '',
	image: 'jkadkkl',
	country: '',
	city: '',
	address: '',
	state: '',
	phone: '',
	status: false,
	suscription: false,
	isComplete: true,
};

const RegistroPaseador = () => {
	const urlParams = new URLSearchParams(window.location.search)
		? new URLSearchParams(window.location.search)
		: null;
	const googleEmail = urlParams ? urlParams.get('email') : null;
	const googleName = urlParams ? urlParams.get('name') : null;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [user, setUser] = useState({
		...initialState,
		password: googleEmail ? 'null' : '',
	});
	const [errors, setErrors] = useState({});

	const googleLogin = (e) => {
		e.preventDefault();
		window.open('http://localhost:3001/auth/google/signup', '_self');
	};

	const handleChange = (e) => {
		setUser({
			...user,
			// is google email is not null, then set the email to google email
			email: googleEmail ? googleEmail : user.email,
			name: googleName ? googleName : user.name,
			[e.target.name]: e.target.value,
		});
		setErrors(
			VerificacionPaseador(
				{
					...user,
					[e.target.name]: e.target.value,
				},
				!!googleEmail
			)
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(errors);
		if (
			!Object.keys(errors).length &&
			user.name &&
			user.address &&
			user.email &&
			user.phone &&
			(googleEmail || user.password) // only check for password if googleEmail is null
		) {
			if (googleEmail) {
				dispatch(editUser(user));
			} else {
				dispatch(createUser(user));
			}
			setUser(initialState);
			alert('Se ha creado su usario correctamente');
			navigate('/login');
		} else {
			alert('Hay errores en el formulario');
		}
	};

	console.log(user);
	return (
		<div className="bg-white min-h-screen md:flex items-center justify-center">
			<div className="md:w-1/2 lg:w-1/2 mb-16 ">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20">
					<div className="sm:mx-auto sm:w-full sm:max-w-s">
						<button
							className="m-5 inline-block w-auto h-auto border-4 rounded"
							onClick={() => navigate('/inicio')}
						>
							Volver
						</button>
						<h2 className="text-left text-6xl font-bold leading-9 tracking-tight text-indigo-600">
							Bienvenido
						</h2>
						<p className="mt-3 text-left">
							Llena el siguiente formulario para ser parte de
							nuestra comunidad
						</p>
						<p className="text-gray-900 text-sm mt-3 mb-3">
							¿Ya tienes una cuenta?{' '}
							<Link to="/login">
								<span className="text-indigo-600 font-bold">
									Inicia sesión
								</span>
							</Link>
						</p>
						<div className="flex gap-1 items-center">
							<p className="mt-3 text-center">Registrate con: </p>

							<button
								className="cursor-pointer"
								onClick={googleLogin}
							>
								<img
									className="rounded-md"
									src={google}
									alt=""
								/>
							</button>
						</div>
					</div>
					<form className="space-y-6 mt-10">
						<label className="text-sm font-medium leading-6 text-gray-900">
							<input
								type="radio"
								value="Walker"
								name="rol"
								onChange={handleChange}
								className="mr-2"
							/>
							Quiero ser un paseador canino
						</label>
						<label className="block text-sm font-medium leading-6 text-gray-900">
							<input
								type="radio"
								value="Client"
								onChange={handleChange}
								name="rol"
								className="mr-2"
							/>
							Necesito que alguien pasee a mi perro
						</label>
					</form>

          {user.rol && (
            <form className="space-y-6 mt-10" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
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
                  {errors.name && (
                    <p className="text-sm text-red-600">* {errors.name}</p>
                  )}
                </div>
              </div>
              {user.rol === "Walker" && (
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
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
                  className="block text-sm font-medium leading-6 text-gray-900"
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
                {errors.email && (
                  <p className="text-sm text-red-600">* {errors.email}</p>
                )}
                <label
                  htmlFor="birthdate"
                  className="block text-sm font-medium leading-6 text-gray-900 mt-5"
                >
                  Birth Date:
                </label>
                <input
                  type="birthdate"
                  id="birthdate"
                  value={user.birthdate}
                  name="birthdate"
                  onChange={handleChange}
                  placeholder="2021-01-01"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Pais
                </label>
                <select
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                  type="text"
                  name="country"
                  value={user.country}
                  onChange={handleChange}
                >
                  <option>Seleccione...</option>
                  <option>Colombia</option>
                  <option>Argentina</option>
                  <option>Mexico</option>
                  <option>Chile</option>
                  <option>Uruguay</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Estado
                </label>
                <select
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                  type="text"
                  name="state"
                  value={user.state}
                  onChange={handleChange}
                >
                  <option>Seleccione...</option>
                  <option>Bogota D.C.</option>
                  <option>Buenos Aires</option>
                  <option>CDMX</option>
                  <option>Metropolitana de Santiago</option>
                  <option>Montevideo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Ciudad
                </label>
                <select
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                  type="text"
                  name="city"
                  value={user.city}
                  onChange={handleChange}
                >
                  <option>Seleccione...</option>
                  <option>Bogota</option>
                  <option>Buenos Aires</option>
                  <option>Ciudad De Mexico</option>
                  <option>Santiago</option>
                  <option>Montevideo</option>
                </select>
              </div>
							<div>
								<label
									htmlFor="address"
									className="block text-sm font-medium leading-6 text-gray-900"
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
								{errors.address && (
									<p className="text-sm text-red-600">
										* {errors.address}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium leading-6 text-gray-900"
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
								{errors.phone && (
									<p className="text-sm text-red-600">
										* {errors.phone}
									</p>
								)}
							</div>
							<div>
								{googleEmail ? (
									''
								) : (
									<>
										<label
											htmlFor="password"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Contraseña
										</label>
										<input
											type="password"
											id="password"
											value={user.password}
											name="password"
											onChange={handleChange}
											placeholder="Minima de 8 caracteres"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
										/>
										{errors.password && (
											<p className="text-sm text-red-600">
												* {errors.password}
											</p>
										)}
									</>
								)}
							</div>

							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{googleEmail
									? 'Actualiza tus datos'
									: 'Crear Cuenta'}
							</button>
						</form>
					)}
				</div>
			</div>

      <div className="sm:block hidden w-1/2 mt-10 mb-16">
        <img
          src={registroPaseador}
          alt="Imagen registro paseador"
          className="sm:mx-auto sm:w-full sm:max-w-sm sm:block hidden"
        />
      </div>
    </div>
  );
};

export default RegistroPaseador;
