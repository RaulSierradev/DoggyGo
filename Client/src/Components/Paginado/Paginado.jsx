import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const walkersPerPage = 2;

const Paginado = () => {
  //*Utilice un array local, actualizar a estado global
  //const walkers = useSelector((state) => state.walkers);
  const [walkers, setWalkers] = useState([
    {
      id: 1,
      name: "Pedro",
      direccion: "Calle falsa 123",
      telefono: "1234-9876",
      descripción: "Esta es mi descripcion",
      disponibilidad: true,
    },
    {
      id: 2,
      name: "Juan",
      direccion: "Calle falsa 123",
      telefono: "1234-9876",
      descripción: "Esta es mi descripcion",
      disponibilidad: false,
    },
    {
      id: 3,
      name: "Pablo",
    },
    {
      id: 4,
      name: "x1",
    },
    {
      id: 5,
      name: "x2",
    },
  ]);

  const [walkersPaginated, setWalkersPaginated] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
    setWalkersPaginated(walkers.slice(0, walkersPerPage));
  }, [walkers]);

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;

    const firstIndex = prevPage * walkersPerPage;
    const lastIndex = firstIndex + walkersPerPage;

    setWalkersPaginated(walkers.slice(firstIndex, lastIndex));

    setCurrentPage(prevPage);
  };

  const nextHandler = () => {
    const totalWalkers = walkers.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * walkersPerPage;
    const lastIndex = firstIndex + walkersPerPage;

    if (firstIndex >= totalWalkers) return;

    setWalkersPaginated(walkers.slice(firstIndex, lastIndex));

    setCurrentPage(nextPage);
  };

  return (
    <div>
      <Cards walkers={walkersPaginated} />
      <div className='flex flex-row'>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
            currentPage === 0
              ? "bg-gray-200 cursor-not-allowed rounded opacity-50"
              : ""
          }`}
          onClick={prevHandler}
          disabled={currentPage === 0}
        >
          Prev
        </button>
        <button className='bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l' disabled>
          {currentPage + 1}
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
            walkersPaginated.length < walkersPerPage ||
            walkers.length === (currentPage + 1) * walkersPerPage
              ? "bg-gray-200 cursor-not-allowed rounded opacity-50"
              : ""
          }`}
          onClick={nextHandler}
          disabled={
            walkersPaginated.length < walkersPerPage ||
            walkers.length === (currentPage + 1) * walkersPerPage
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Paginado;
