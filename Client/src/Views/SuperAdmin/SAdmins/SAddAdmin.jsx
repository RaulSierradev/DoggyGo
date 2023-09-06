import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../Redux/actions";
import { useNavigate } from "react-router-dom";

const SAddAdmin = (props) => {
  const navigate = useNavigate()
  const { add, setAdd } = props;
  const initialState = {
    rol: "Admin",
    name: "",
    description: "",
    birthdate: "2000-01-01",
    email: "",
    image: "",
    country: "Pais",
    city: "ciudad",
    address: "Direccion",
    state: "Estado",
    phone: "",
    password: "12345678",
    enabled: true
  };
  const [user, setUser] = useState(initialState);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    setAdd(!add);
    navigate('/sadmin')
    alert("Se ha creado el usuario correctamente");
  };

  return (
    <div className="flex justify-around">
      <div className="w-2/12"></div>
      <form
        className="pr-10 space-y-6 mt-10 text-base shadow-xl bg-amber-100 p-3 items-center w-5/12"
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
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          Crear
        </button>
      </form>
      <div className="w-2/12"></div>
    </div>
  );
};

export default SAddAdmin;
