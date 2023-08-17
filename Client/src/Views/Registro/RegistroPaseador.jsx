import { useState } from "react";
import VerificacionPaseador from "./VerificacionPaseador";
import registroPaseador from "../../img/registroPaseador.png";

const RegistroPaseador = () => {
  const [paseador, setPaseador] = useState({
    nombre: "",
    password: "",
    repPassword: "",
    descripcion: "",
    email: "",
    disponibilidad: false,
    direccion: "",
    telefono: "",
  });
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    setPaseador({
      ...paseador,
      [e.target.name]: e.target.value,
    });
    setErrores(
      VerificacionPaseador({
        ...paseador,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !Object.keys(errores).length &&
      paseador.nombre &&
      paseador.descripcion &&
      paseador.direccion &&
      paseador.disponibilidad &&
      paseador.email &&
      paseador.password &&
      paseador.telefono
    ) {
      setPaseador({
        nombre: "",
        password: "",
        descripcion: "",
        email: "",
        disponibilidad: false,
        direccion: "",
        telefono: "",
      });

      alert("Se ha creado su usario correctamente");
    } else {
      alert("Hay errores en el formulario");
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-1/2 mb-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20">
          <div className="sm:mx-auto sm:w-full sm:max-w-s">
            <h2 className="text-left text-4xl font-bold leading-9 tracking-tight text-blue-600">
              ¿Quieres ser un paseador con nosotros?
            </h2>
            <p className="mt-3 text-left">
              Llena el siguiente formulario para ser parte
            </p>
          </div>
          <form className="space-y-6 mt-10" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre:
              </label>
              <div className="mt-2">
                <input
                  className={
                    errores.name
                      ? "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                      : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                  }
                  placeholder="Ej: Juan Rodríguez"
                  type="text"
                  value={paseador.nombre}
                  name="nombre"
                  onChange={handleChange}
                  id="nombre"
                />
                {errores.nombre && (
                  <p className="text-sm text-red-600">* {errores.nombre}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="descripcion"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Descripción:
              </label>
              <textarea
                type="text"
                id="descripcion"
                value={paseador.descripcion}
                name="descripcion"
                onChange={handleChange}
                placeholder="Una descripción de tí, para que la vean los interesados"
                className={
                  errores.descripcion
                    ? "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                    : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                }
              />
            </div>
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
                value={paseador.email}
                name="email"
                onChange={handleChange}
                placeholder="correo@correo.com"
                className={
                  errores.email
                    ? "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                    : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                }
              />
              {errores.email && (
                <p className="text-sm text-red-600">* {errores.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="direccion"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Direccion
              </label>
              <input
                type="text"
                id="direccion"
                value={paseador.direccion}
                name="direccion"
                onChange={handleChange}
                placeholder="Calle, avenida, ciudad"
                className={
                  errores.direccion
                    ? "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                    : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                }
              />
            </div>
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Teléfono
              </label>
              <input
                type="number"
                id="telefono"
                value={paseador.telefono}
                name="telefono"
                onChange={handleChange}
                placeholder="Tu teléfono, sin letras ni espacios"
                className={
                  errores.telefono
                    ? "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                    : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                }
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={paseador.password}
                name="password"
                onChange={handleChange}
                placeholder="Minima de 8 caracteres"
                className={
                  errores.password
                    ? "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                    : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                }
              />
              {errores.password && (
                <p className="text-sm text-red-600">* {errores.password}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="repPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Repetir contraseña
              </label>
              <input
                type="password"
                id="repPassword"
                value={paseador.repPassword}
                name="repPassword"
                onChange={handleChange}
                placeholder="Vuelve a ingresar tu contraseña"
                className={
                  errores.repPassword
                    ? "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                    : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                }
              />
              {errores.repPassword && (
                <p className="text-sm text-red-600">* {errores.repPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Crear Cuenta
            </button>
          </form>
        </div>
      </div>

      <div className="w-1/2 mb-16">
        <img
          src={registroPaseador}
          alt="Imagen registro paseador"
          className="sm:mx-auto sm:w-full sm:max-w-sm"
        />
      </div>
    </div>
  );
};

export default RegistroPaseador;
