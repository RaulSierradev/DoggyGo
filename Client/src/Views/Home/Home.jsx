import { useNavigate } from "react-router-dom";
import Filtros from "./Components/Filtros/Filtros";
import Paginado from "./Components/Paginado/Paginado"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers, orderDefault } from "../../Redux/actions";
import SearchBar from "./Components/SearchBar/SearchBar";

const Home = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [orderDefaultComplete, setOrderDefaultComplete] = useState(false) //?Para que orderDefault se aplica antes que el paginado, no pude solucionarlo de otra forma

  useEffect(()=>{
    const getAllUsersFirst = async()=>{
    await dispatch(getAllUsers())//!Esto va aca por ahora
    await dispatch(orderDefault())
    setOrderDefaultComplete(true)
    }
    getAllUsersFirst()
  }, [dispatch])

  return (
    <div>
      <button className="m-5 inline-block w-auto h-auto border-4 rounded" onClick={()=> navigate("/inicio")}>Volver</button>
      <SearchBar />
      <Filtros />
      {orderDefaultComplete && <Paginado />}
    </div>
  );
};

export default Home;
