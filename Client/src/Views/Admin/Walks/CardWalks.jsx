import { Link } from "react-router-dom";
import { useState } from "react";
import PaginadoAdmin from "../PaginadoAdmin";

const CardWalks = (props) => {
  const { walks } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const totalCards = walks.length;

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  console.log("Estos son los paseos");
  return (
    <div className="mt-16">
      <table className="m-10 text-center">
        <tr className="p-10">
          <td className="font-bold text-xl text-indigo-800">ID</td>
          <td className="font-bold text-xl text-indigo-800">Fecha</td>
          <td className="font-bold text-xl text-indigo-800">Duración</td>
          <td className="font-bold text-xl text-indigo-800">Precio</td>
        </tr>
        {walks
          ?.map((e, index) => {
            return (
              <tr className="text-sm" key={index}>
                <td className="px-5 py-3">{e.id}</td>
                <td className="px-5">{e.startDate}</td>
                <td className="px-10">{e.duration}</td>
                <td className="px-5">&#36;{e.cost}</td>
              </tr>
            );
          })
          .slice(firstIndex, lastIndex)}
      </table>
      <PaginadoAdmin
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCards={totalCards}
      />
    </div>
  );
};

export default CardWalks;
