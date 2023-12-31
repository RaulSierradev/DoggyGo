import Filtros from './Components/Filtros/Filtros';
import Paginado from './Components/Paginado/Paginado';
import Nav from "../Nav"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterWalkers, getAllUsers, orderWalkers } from '../../Redux/actions';
import Cookies from 'js-cookie';
import Ordenamientos from './Components/Ordenamientos/Ordenamientos';
//import FormDogs from './Components/FormDogs/FormDogs';

const Home = () => {

  const dispatch = useDispatch();

  const [orderDefaultComplete, setOrderDefaultComplete] = useState(false); //?Para que orderDefault se aplica antes que el paginado, no pude solucionarlo de otra forma
  // const [estadoModal, setEstadoModal] = useState(false)

  useEffect(() => {
    const getAllUsersFirst = async () => {
      await dispatch(getAllUsers()); //!Esto va aca por ahora
      await dispatch(filterWalkers({status: true}));
      await dispatch(orderWalkers("Alphabetic"));
      setOrderDefaultComplete(true);
    };
    getAllUsersFirst();
  }, [dispatch]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      Cookies.set('auth', token);
      // Remove token from URL
      window.history.replaceState({}, document.title, '/');
    }
  }, []);

  return (
    <div className='flex flex-col bg-sky-100 h-screen'>
      <Nav />
      {/* <FormDogs estadoModal={estadoModal} setEstadoModal={setEstadoModal} /> */}
      <div className='mt-2 flex flex-row flex-wrap justify-around items-center'>
        <Ordenamientos />
        <Filtros />
      </div>
      {orderDefaultComplete && <Paginado />}
      {/* <button
				className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				onClick={() => setEstadoModal(!estadoModal)}
			>
				Al modal
			</button> */}
    </div>
  );
};

export default Home;
