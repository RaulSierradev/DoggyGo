import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterWalkers, restoreWalkers } from "../../../../Redux/actions";

const Filtros = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreWalkers());
  }, [dispatch]);

  const [filter, setFilter] = useState("");

  const handleFilter = (event) => {
    event.preventDefault();
    const value = event.target.value;

    dispatch(filterWalkers(value));
    setFilter(value);
  };

  const handleResetFilter = () => {
    dispatch(restoreWalkers());
    setFilter("");
  };

  return (
    <div>
      <select
        className='bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        name='locationfilter'
        value={filter}
        onChange={handleFilter}
      >
        <option value='' disabled>
          Select Location
        </option>
        <optgroup label='Country'>
          <option value='Country - Colombia'>Colombia</option>
          <option value='Country - Argentina'>Argentina</option>
          <option value='Country - Mexico'>Mexico</option>
          <option value='Country - Chile'>Chile</option>
          <option value='Country - Uruguay'>Uruguay</option>
        </optgroup>
        <optgroup label='State'>
          <option value='State - Bogota D.C.'>Bogota D.C.</option>
          <option value='State - Buenos Aires'>Buenos Aires</option>
          <option value='State - CDMX'>CDMX</option>
          <option value='State - Metropolitana de Santiago'>
            Metropolitana de Santiago
          </option>
          <option value='State - Montevideo'>Montevideo</option>
        </optgroup>
        <optgroup label='City'>
          <option value='City - Bogota'>Bogota</option>
          <option value='City - Buenos Aires'>Buenos Aires</option>
          <option value='City - Ciudad De Mexico'>Ciudad De Mexico</option>
          <option value='City - Santiago'>Santiago</option>
          <option value='City - Montevideo'>Montevideo</option>
        </optgroup>
      </select>
      <button
        type='button'
        onClick={handleResetFilter}
        className='bg-white border-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mx-1'
      >
        <span className='sr-only'>Close menu</span>
        <svg
          className='h-3'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </div>
  );
};

export default Filtros;
