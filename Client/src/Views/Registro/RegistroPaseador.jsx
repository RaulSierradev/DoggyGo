import { useState } from "react";

const RegistroPaseador = () => {
  const [paseador, setPaseador] = useState({
    nombre: "",
    password: "",
    descripcion: "",
    email: "",
    disponibilidad: false,
    direccion: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setPaseador({
      ...paseador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-s">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-blue-600">
          ¿Quieres ser un paseador con nosotros?
        </h2>
        <p className="mt-3 text-center">
          Llena el siguiente formulario para ser parte
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre:
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
                placeholder="Ej: Juan Rodríguez"
                type="text"
                value={paseador.nombre}
                name="nombre"
                onChange={handleChange}
                id="nombre"
              />
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
            />
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
            />
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
              name="repPassword"
              placeholder="Vuelve a ingresar tu contraseña"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
            />
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
  );
};

export default RegistroPaseador;
