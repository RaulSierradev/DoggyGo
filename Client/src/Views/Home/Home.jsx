import { useNavigate } from "react-router-dom";
import Filtros from "./Components/Filtros/Filtros";
import Paginado from "./Components/Paginado/Paginado"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button className="m-5 inline-block w-auto h-auto border-4 rounded" onClick={()=> navigate("/inicio")}>Volver</button>
      <Filtros />
      <Paginado />
    </div>
  );
};

export default Home;
