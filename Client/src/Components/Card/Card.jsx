/* eslint-disable react/prop-types */
//import { Link } from "react-router-dom";

const Card = ({ paseador }) => {
  const { /*id,*/ name, direccion, telefono, descripción, disponibilidad } =
    paseador;

  return (
    <div className='max-w-sm w-full lg:max-w-full lg:flex'>
      <div className='border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className='mb-8'>
          <p className='text-sm text-gray-600 flex'>
            {disponibilidad ? "Disponible" : "No disponible"}
          </p>
          <div className='text-gray-900 font-bold text-xl mb-2'>{name}</div>
          <p className='text-gray-700 text-base'>{descripción}</p>
        </div>
        <div className='flex items-center'>
          <div className='text-sm'>
            <p className='text-gray-900 leading-none'>{direccion}</p>
            <p className='text-gray-900 leading-none'>{telefono}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
