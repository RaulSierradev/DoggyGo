/* eslint-disable react/prop-types */
//import { Link } from "react-router-dom";

const Card = ({ walker }) => {
  const { /*id,*/ name, direccion, telefono, descripción, disponibilidad } =
    walker;

  return (
    <div className='max-w-sm w-full lg:max-w-full lg:flex'>
      {/*className='border border-gray-400 lg:border lg:border-gray-400 bg-white rounded lg:rounded-b-none lg:rounded-r p-4 flex flex-row justify-between leading-normal*/}
      <div className='border-t flex flex-row justify-between leading-normal'>
          <p className='text-sm text-gray-600 flex'>
            {disponibilidad ? "Disponible" : "No disponible"}
          </p>
          <div className='text-gray-900 font-bold text-xl mb-2'>{name}</div>
          <p className='text-gray-700 text-base'>{descripción}</p>
            <p className='text-gray-900 leading-none'>{direccion}</p>
            <p className='text-gray-900 leading-none'>{telefono}</p>
      
      </div>
    </div>
  );
};

export default Card;
