
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Swal from 'sweetalert2';

import {
  createUser,
  editUser,
  getCities,
  getCountries,
  getStates,
} from "../../Redux/actions";
import ImageUpload from "../Dashboard/components/ImageUpload.jsx";
import VerificacionPaseador from "./VerificacionPaseador";
import registroPaseador from "../../img/registroPaseador.png";
import google from "../../assets/google1.svg";

const Registro = () => {
  const initialState = {
    rol: "",
    name: "",
    password: "",
    description: "",
    birthdate: "",
    email: "",
    image: "",
    country: "",
    city: "",
    address: "",
    state: "",
    phone: "",
    status: false,
    suscription: false,
    isComplete: true,
  };
  const urlParams = new URLSearchParams(window.location.search)
    ? new URLSearchParams(window.location.search)
    : null;
  const googleEmail = urlParams ? urlParams.get("email") : null;
  const googleName = urlParams ? urlParams.get("name") : null;
  const countries = useSelector((state) => state.countries);
  const states = useSelector((state) => state.states);
  const cities = useSelector((state) => state.cities);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState("");
  const [openC, setOpenC] = useState(false);
  const [openS, setOpenS] = useState(false);
  const [openY, setOpenY] = useState(false);
  const [co, setCo] = useState("");
  const [st, setSt] = useState("");
  const [value, setValue] = useState(dayjs("2022-04-07"));
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    try {
      dispatch(getCountries());
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  useEffect(() => {
    try {
      dispatch(getStates(co));
    } catch (error) {
      console.log(error.message);
    }
  }, [co]);
  useEffect(() => {
    try {
      dispatch(getCities(st, co));
    } catch (error) {
      console.log(error.message);
    }
  }, [st]);

  useEffect(() => {
    setUser((prevDetails) => ({
      ...prevDetails,
      image: imageUrl,
    }));
  }, [imageUrl]);

  const [user, setUser] = useState({
    ...initialState,
    password: googleEmail ? "null" : "",
  });

  const googleLogin = (e) => {
    e.preventDefault();
    window.open("http://localhost:3001/auth/google/signup", "_self");
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
			Swal.fire({
				icon: 'success',
				title: '¡Registro exitoso!',
				text: 'Ya puedes iniciar sesión',
			});
			navigate('/login');
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Hay campos vacios o incorrectos en el formulario',
			});
		}
	};

  console.log(user);
  return (
    <div className="bg-white min-h-screen md:flex items-center justify-center">
      <div className="md:w-1/2 lg:w-2/3 mb-16 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20 h-[600px] overflow-y-auto pr-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-s">
            <button
              className="m-5 inline-block w-auto h-auto border-4 rounded"
              onClick={() => navigate("/inicio")}
            >
              Volver
            </button>
            <h2 className="text-left text-6xl font-bold leading-9 tracking-tight text-indigo-600">
              Bienvenido
            </h2>
            <p className="mt-3 text-left">
              Llena el siguiente formulario para ser parte de nuestra comunidad
            </p>
            <p className="text-gray-900 text-sm mt-3 mb-3">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login">
                <span className="text-indigo-600 font-bold">Inicia sesión</span>
              </Link>
            </p>
            <div className="flex gap-1 items-center">
              <p className="mt-3 text-center">Registrate con: </p>

              <button className="cursor-pointer" onClick={googleLogin}>
                <img className="rounded-md" src={google} alt="" />
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
            <form className="space-y-6 mt-10 pr-10" onSubmit={handleSubmit}>
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
                  Fecha de nacimiento:
                </label>
                <div className="py-3">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      disableFuture
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                        setUser({
                          ...user,
                          birthdate: newValue.format("YYYY-MM-DD"),
                        });
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Pais
                </label>
                <div className="text-sm font-medium">
                  <div
                    onClick={() => setOpenC(!openC)}
                    className={`bg-gray-200 text-gray-900 w-full p-2 flex items-center justify-between rounded ${
                      !user.country && "text-gray-900"
                    }`}
                  >
                    {user.country
                      ? user.country?.length > 25
                        ? user.country?.substring(0, 25) + "..."
                        : user.country
                      : "Seleccione país"}{" "}
                    <BiChevronDown
                      size={20}
                      className={`${openC && "rotate-180"}`}
                    />
                  </div>
                  <ul
                    className={`mt-2 bg-gray-200 overflow-y-auto ${
                      openC ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <div className="flex items-center px-2 sticky top-0 bg-gray-200">
                      <AiOutlineSearch size={20} className="text-gray-600" />
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value.toLowerCase())}
                        placeholder="Ingrese nombre de país"
                        className="placeholder:text-gray-600 p-2 outline-none w-full bg-gray-200"
                      />
                    </div>
                    {countries?.map((e, index) => {
                      return (
                        <li
                          key={index}
                          className={`p-2 hover:bg-gray-300 ${
                            e?.name?.toLowerCase() ===
                              user.country?.toLowerCase() && "bg-gray-300"
                          } ${
                            e?.name?.toLowerCase().startsWith(input)
                              ? "block"
                              : "hidden"
                          }`}
                          onClick={() => {
                            if (
                              e?.name?.toLowerCase() !==
                              user.country.toLowerCase()
                            ) {
                              setUser({
                                ...user,
                                country: e?.name,
                                state: "",
                                city: "",
                              });
                              setOpenC(false);
                              setInput("");
                              setCo(e.iso2);
                            }
                          }}
                        >
                          {e.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Estado
                </label>
                <div className="text-sm font-medium">
                  <div
                    onClick={() => setOpenS(!openS)}
                    className={`bg-gray-200 text-gray-900 w-full p-2 flex items-center justify-between rounded ${
                      !user.state && "text-gray-900"
                    }`}
                  >
                    {user.state
                      ? user.state?.length > 25
                        ? user.state?.substring(0, 25) + "..."
                        : user.state
                      : "Seleccione estado"}{" "}
                    <BiChevronDown
                      size={20}
                      className={`${openS && "rotate-180"}`}
                    />
                  </div>
                  <ul
                    className={`mt-2 bg-gray-200 overflow-y-auto ${
                      openS ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <div className="flex items-center px-2 sticky top-0 bg-gray-200">
                      <AiOutlineSearch size={20} className="text-gray-600" />
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value.toLowerCase())}
                        placeholder="Ingrese nombre del estado"
                        className="placeholder:text-gray-600 p-2 outline-none w-full bg-gray-200"
                      />
                    </div>
                    {states?.map((e, index) => {
                      return (
                        <li
                          key={index}
                          className={`p-2 hover:bg-gray-300 ${
                            e?.name?.toLowerCase() ===
                              user.state?.toLowerCase() && "bg-gray-300"
                          } ${
                            e?.name?.toLowerCase().startsWith(input)
                              ? "block"
                              : "hidden"
                          }`}
                          onClick={() => {
                            if (
                              e?.name?.toLowerCase() !==
                              user.state.toLowerCase()
                            ) {
                              setUser({
                                ...user,
                                state: e?.name,
                                city: "",
                              });
                              setOpenS(false);
                              setInput("");
                              setSt(e.iso2);
                            }
                          }}
                        >
                          {e.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Ciudad
                </label>
                <div className="text-sm font-medium">
                  <div
                    onClick={() => setOpenY(!openY)}
                    className={`bg-gray-200 text-gray-900 w-full p-2 flex items-center justify-between rounded ${
                      !user.city && "text-gray-900"
                    }`}
                  >
                    {user.city
                      ? user.city?.length > 25
                        ? user.city?.substring(0, 25) + "..."
                        : user.city
                      : "Seleccione ciudad"}{" "}
                    <BiChevronDown
                      size={20}
                      className={`${openY && "rotate-180"}`}
                    />
                  </div>
                  <ul
                    className={`mt-2 bg-gray-200 overflow-y-auto ${
                      openY ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <div className="flex items-center px-2 sticky top-0 bg-gray-200">
                      <AiOutlineSearch size={20} className="text-gray-600" />
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value.toLowerCase())}
                        placeholder="Ingrese nombre de la ciudad"
                        className="placeholder:text-gray-600 p-2 outline-none w-full bg-gray-200"
                      />
                    </div>
                    {cities?.map((e, index) => {
                      return (
                        <li
                          key={index}
                          className={`p-2 hover:bg-gray-300 ${
                            e?.name?.toLowerCase() ===
                              user.city?.toLowerCase() && "bg-gray-300"
                          } ${
                            e?.name?.toLowerCase().startsWith(input)
                              ? "block"
                              : "hidden"
                          }`}
                          onClick={() => {
                            if (
                              e?.name?.toLowerCase() !== user.city.toLowerCase()
                            ) {
                              setUser({
                                ...user,
                                city: e?.name,
                              });
                              setOpenY(false);
                              setInput("");
                            }
                          }}
                        >
                          {e.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
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
                  <p className="text-sm text-red-600">* {errors.address}</p>
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
                  <p className="text-sm text-red-600">* {errors.phone}</p>
                )}
              </div>
              <div>
                <ImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
              </div>
              <div>
                {googleEmail ? (
                  ""
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
                {googleEmail ? "Actualiza tus datos" : "Crear Cuenta"}
              </button>
            </form>
          )}
        </div>
      </div>
      
      <div className="sm:block hidden w-1/3 mt-20 mb-16">
        <img
          src={registroPaseador}
          alt="Imagen registro paseador"
          className="md:mx-auto md:w-full md:max-w-sm md:block hidden"
        />
      </div>
    </div>
  );

};

export default Registro;
