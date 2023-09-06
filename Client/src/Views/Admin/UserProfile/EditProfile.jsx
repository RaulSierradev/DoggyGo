import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../../Redux/actions";

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

  const [user, setUser] = useState(initialState);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
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
