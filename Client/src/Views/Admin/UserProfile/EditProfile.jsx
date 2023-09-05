import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../../Redux/actions";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const EditProfile = (props) => {
  const { userDetail, setEdit, edit } = props;
  const initialState = {
    rol: userDetail.rol,
    name: userDetail.name,
    description: userDetail.description,
    birthdate: userDetail.birthdate,
    email: userDetail.email,
    image: userDetail.image,
    country: userDetail.country,
    city: userDetail.city,
    address: userDetail.address,
    state: userDetail.state,
    phone: userDetail.phone,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(initialState);
  const [value, setValue] = useState(dayjs(user.birthdate));
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const id = userDetail.id;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(user));
    setEdit(!edit);
    alert("Se ha modificado el usuario correctamente");
  };
  return (
    <div>
      <form
        className="space-y-6 mt-10 shadow-xl bg-indigo-100 p-3"
        onSubmit={handleSubmit}
      >
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
          <label
            htmlFor="birthdate"
            className="block text-sm font-medium leading-6 text-gray-900 mt-5"
          >
            Birth Date:
          </label>
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
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
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
          <label className="block text-sm font-medium leading-6 text-gray-900">
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
          <label className="block text-sm font-medium leading-6 text-gray-900">
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
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            rol
          </label>
          <select
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
            type="text"
            name="rol"
            value={user.rol}
            onChange={handleChange}
          >
            <option>Walker</option>
            <option>Client</option>
          </select>
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Editar
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
