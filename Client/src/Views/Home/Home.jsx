import { useNavigate } from "react-router-dom";
import Filtros from "./Components/Filtros/Filtros";
import Paginado from "./Components/Paginado/Paginado"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../Redux/actions";
import SearchBar from "./Components/SearchBar/SearchBar";

const Home = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <div>
      <button className="m-5 inline-block w-auto h-auto border-4 rounded" onClick={()=> navigate("/inicio")}>Volver</button>
      <SearchBar />
      <Filtros />
      <Paginado />
    </div>
  );
};

export default Home;
