/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterWalkers, getWalkerByName, restoreWalkers } from "../../../../Redux/actions";

const SearchBar = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getWalkerByName(name));
    setName("");
  };

  const handleReset = () => {
    dispatch(restoreWalkers());
    dispatch(filterWalkers(true))
  };

  return (
    <div className='flex items-center'>
      <button onClick={handleReset} className='mr-2 px-1 py-2 text-gray-500 border border-gray-200 rounded-md bg-white'>
        Restablecer
      </button>
      <form>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            onChange={handleChange}
            value={name}
            type='search'
            className='block w-full p-4 pl-14 mr-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
            placeholder='Buscar paseador...'
          />
          <button
            onClick={handleSearch}
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
