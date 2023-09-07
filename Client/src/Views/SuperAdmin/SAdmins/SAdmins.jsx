import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getAll } from "../../../Redux/actions.js";
import SuperSidebar from "../SuperSidebar.jsx";
import SAdminsCards from "./SAdminsCards.jsx";
import SAddAdmin from "./SAddAdmin.jsx";

const SAdmins = () => {
  const admin = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  const [add, setAdd] = useState(false);

  useEffect(() => {
    try {
      dispatch(getAll());
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <SuperSidebar />
      <div className="p-10 text-center lg:col-span-3 xl:col-span-5 bg-gray-100 h-screen overflow-y-scroll">
        <h1 className="text-4xl font-bold m-10">
          Nuestros <span className="text-amber-600">Administradores</span>
        </h1>
        <button
          className="bg-amber-600 p-5 rounded-xl text-white font-bold hover:bg-amber-500"
          onClick={() => setAdd(!add)}
        >
          {!add ? 'Agregar admin': 'Ver admins'}
        </button>
        {!add ? (
          <SAdminsCards admin={admin} />
        ) : (
          <SAddAdmin add={add} setAdd={setAdd} />
        )}
      </div>
    </div>
  );
};

export default SAdmins;
