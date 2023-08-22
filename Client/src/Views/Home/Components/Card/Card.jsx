/* eslint-disable react/prop-types */
//import { Link } from "react-router-dom";

const Card = ({ walker }) => {
  const { /*id,*/ name, image, description, country, state, city, status } =
    walker;

    //! Hacer el link cuando lo hayan terminado
  return (
    <div className='w-full'>
      {/*<Link to={`/detail/${id}`}></Link>*/}
      <div className='flex flex-row justify-around items-center pt-2 mt-4 leading-normal space-x-4 border-y-4'>
        <div className='basis-11 text-sm text-gray-600 pr-2'>
          {status ? "Disponible" : "No disponible"}
        </div>
        <img className="basis-11" src={image} alt="url" />
        <p className='basis-11 pr-2 text-gray-900 font-bold text-xl mb-2'>
          {name}
        </p>
        <p className='basis-40 pr-2 text-gray-700 text-base'>{description}</p>
        <p className='basis-6 text-gray-900 leading-none'>{country}</p>
        <p className='basis-6 text-gray-900 leading-none'>{state}</p>
        <p className='basis-6 pl-2 text-gray-900 leading-none'>{city}</p>
      </div>
    </div>
  );
};

export default Card;
