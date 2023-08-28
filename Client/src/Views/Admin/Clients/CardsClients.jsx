import { Link } from "react-router-dom";

const CardsClients = (props) => {
  const { clients } = props;
  return (
    <div className="mt-16" >
        <table className="m-10 text-center">
        <tr className="p-10">
            <td className="font-bold text-xl text-indigo-800">Nombre</td>
            <td className="font-bold text-xl text-indigo-800">Correo</td>
            <td className="font-bold text-xl text-indigo-800">Telefono</td>
        </tr>
        {clients?.map((e, index) => {
        return (
          <tr key={index}>
            <td className="px-10 py-3">{e.name}</td>
            <td className="px-10">{e.email}</td>
            <td className="px-10">{e.phone}</td>
            <td className="px-10"><Link className="bg-green-600 p-2 text-sm text-white font-semibold rounded-lg hover:bg-green-500">Ver perfil</Link></td>
            <td className="px-10"><button className="bg-yellow-600 p-2 text-sm text-white font-semibold rounded-lg hover:bg-yellow-500">Suspender</button></td>
            <td className="px-10"><button className="bg-rose-600 p-2 text-sm text-white font-semibold rounded-lg hover:bg-rose-500">Eliminar</button></td>
          </tr>
        );
      })}
        
        </table>
        
      
    </div>
  );
};

export default CardsClients;
