import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../../Redux/actions.js";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.email);
  console.log("email1", email);
  const [emails, setEmails] = useState("");

  function handleChange(event) {
    setEmails(event.target.value);
    console.log("setEmail", emails);
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getEmail(emails));
    alert("Se envio su correo");
    navigate("/login");
    // console.log("getEmail",emails)
  }

  return (
    <div className="min-h-screen bg-gray-50 mx-auto container mt-10 px-2">
      <div className="py-10">
        <h1 className="text-4xl my-10 font-extrabold text-center text-indigo-600">
          Olvidé mi contraseña
        </h1>
        <form className="mt-8 mx-auto max-w-md bg-white py-8 px-4 shadow space-y-5">
          <label className="block text-sm uppercase text-gray-600 mb-2 font-bold">
            Correo electrónico
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400"
            type="search"
            value={emails}
            onChange={handleChange}
            placeholder="Escriba su correo..."
          />

          <button
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 cursor-pointer"
            type="submit"
            onClick={handleSubmit}
          >
            Enviar
          </button>
          <div className="flex items-center justify-between">
            <Link to="/registro">
              <p className="text-indigo-600 text-xs">Regístrate</p>
            </Link>
            <Link to="/login">
              <p className="text-indigo-600 text-xs">Iniciar Sesión</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
