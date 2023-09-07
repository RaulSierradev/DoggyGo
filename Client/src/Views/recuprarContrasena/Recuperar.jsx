import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { editPassword, editUser, setCurrentUser } from "../../Redux/actions.js";
import axios from "axios";

const Recuperar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [details, setDetails] = useState({});
  const [pass, setPass] = useState("");

  async function getDetails(id) {
    try {
      const res = await axios.get(`http://localhost:3001/user/id/${id}`);
      setDetails(res.data);
      dispatch(setCurrentUser(res.data));
      return;
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getDetails(id);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPassword(details));
    alert("Se ha cambiado la contraseña correctamente");
    navigate("/login");
  };

  console.log(details.name);

  const handleChange = (e) => {
    setPass(e.target.value);
    setDetails({
      ...details,
      password: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 mx-auto container mt-10 px-2">
      <div className="py-10">
        <h1 className="text-4xl my-10 font-extrabold text-center text-indigo-600">
          Nueva contraseña
        </h1>
        <form
          className="mt-8 mx-auto max-w-md bg-white py-8 px-4 shadow space-y-5"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="password"
            className="block text-sm uppercase text-gray-600 mb-2 font-bold"
          >
            password:
          </label>
          <input
            type="password"
            id="password"
            value={pass}
            name="email"
            onChange={handleChange}
            placeholder="Nueva contraseña"
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400"
          />
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 cursor-pointer"
          type="submit">Cambiar</button>
        </form>
      </div>
    </div>
  );
};
export default Recuperar;
