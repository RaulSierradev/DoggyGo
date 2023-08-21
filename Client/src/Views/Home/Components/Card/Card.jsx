/* eslint-disable react/prop-types */
//import { Link } from "react-router-dom";

const Card = ({ walker }) => {
  const { /*id,*/ name, image, description, country, state, city, status } =
    walker;

    //! Hacer el link cuando lo hayan terminado
  return (
    <div className='max-w-sm w-full lg:max-w-full lg:flex'>
      {/*<Link to={`/detail/${id}`}></Link>*/}
      {/*className='border border-gray-400 lg:border lg:border-gray-400 bg-white rounded lg:rounded-b-none lg:rounded-r p-4 flex flex-row justify-between leading-normal*/}
      <div className='border-t-2 flex flex-row justify-between leading-normal space-x-4'>
        <img className="basis-1/7" src={image} alt="url" />
        <p className='text-sm text-gray-600 basis-1/7'>
          {status ? "Disponible" : "No disponible"}
        </p>
        <div className='text-gray-900 font-bold text-xl mb-2 basis-1/7'>
          {name}
        </div>
        <p className='text-gray-700 text-base basis-1/7'>{description}</p>
        <p className='text-gray-900 leading-none basis-1/7'>{country}</p>
        <p className='text-gray-900 leading-none basis-1/7'>{state}</p>
        <p className='text-gray-900 leading-none basis-1/7'>{city}</p>
      </div>
    </div>
  );
};

export default Card;
