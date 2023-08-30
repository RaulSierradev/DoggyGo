import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getAll } from "../../../Redux/actions.js";
import Sidebar from "../Sidebar.jsx";
import CardsClients from "./CardsClients.jsx";

const Clientes = () => {
  const clients = useSelector((state) => state.clients);

  const dispatch = useDispatch();

  console.log("Clientes", clients);

  useEffect(() => {
    try {
      dispatch(getAll());
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <div className="p-10 text-center lg:col-span-3 xl:col-span-5 bg-gray-100 h-screen overflow-y-scroll">
        <h1 className="text-4xl font-bold m-10">Todos nuestros <span className="text-indigo-600">Clientes</span></h1>
        <CardsClients clients={clients} />
      </div>
    </div>
  );
};

export default Clientes;
