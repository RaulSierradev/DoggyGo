import { useNavigate } from "react-router-dom";
import Filtros from "./Components/Filtros/Filtros";
import Paginado from "./Components/Paginado/Paginado";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers, orderDefault } from "../../Redux/actions";
import SearchBar from "./Components/SearchBar/SearchBar";

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [orderDefaultComplete, setOrderDefaultComplete] = useState(false); //?Para que orderDefault se aplica antes que el paginado, no pude solucionarlo de otra forma

  useEffect(() => {
    const getAllUsersFirst = async () => {
      await dispatch(getAllUsers())//!Esto va aca por ahora
      await dispatch(orderDefault());
      setOrderDefaultComplete(true);
    };
    getAllUsersFirst();
  }, [dispatch]);

  return (
    <div className="flex flex-col bg-sky-100 h-screen">
      <div className="w-full bg-white h-13 border-b-4">
         <button
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5 inline-block w-fit"
        onClick={() => navigate("/inicio")}
      >
        Volver
      </button>
      </div>
     
      <div className="mt-2 flex flex-row flex-wrap justify-around items-center">
        <Filtros />
        <SearchBar />
      </div>
      {orderDefaultComplete && <Paginado />}
    </div>
  );
};

export default Home;
