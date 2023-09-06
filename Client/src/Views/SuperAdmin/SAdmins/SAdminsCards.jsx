import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SuperPaginadoAdmin from "../SuperPaginadoAdmin";
import { deleteUser } from '../../../Redux/actions'


const SAdminsCards = (props) => {
  const { admin } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const totalCards = admin.length;

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  return (
    <div className="mt-16">
      <table className="m-10 text-center">
        <tr className="p-10">
          <td className="font-bold text-xl text-amber-800">Nombre</td>
          <td className="font-bold text-xl text-amber-800">Correo</td>
          <td className="font-bold text-xl text-amber-800">Telefono</td>
        </tr>
        {admin
          ?.map((e, index) => {
            return (
              <tr key={index}>
                <td className="px-8 py-3">{e.name}</td>
                <td className="px-8">{e.email}</td>
                <td className="px-8">{e.phone}</td>
                <td className="px-10">
                  <Link
                    className="bg-green-600 p-2 text-sm text-white font-semibold rounded-lg hover:bg-green-500"
                    to={`http://localhost:5173/sadmin/detail/${e.id}`}
                  >
                    Ver perfil
                  </Link>
                </td>
              </tr>
            );
          })
          .slice(firstIndex, lastIndex)}
      </table>
      <SuperPaginadoAdmin
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCards={totalCards}
      />
    </div>
  );
};

export default SAdminsCards;
