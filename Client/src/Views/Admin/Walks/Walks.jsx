import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllWalks} from '../../../Redux/actions.js'
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Sidebar from '../Sidebar'
import CardWalks from "./CardWalks";

const Walks = () => {
  const token = Cookies.get('auth'); // {"email":"test","password":"test"}
	const decoded = jwt_decode(token);
	const id = decoded.id;
  const users = useSelector((state) => state.users);
  const userProfile = users.filter((user) => user.id === id)[0];
  const walks = useSelector((state=>state.walks))
  const dispatch = useDispatch()

  useEffect(()=>{
    try {
      dispatch(getAllWalks())
    } catch (error) {
      console.log(error.message)
    }
  }, [dispatch])
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar userProfile={userProfile} />
      <div className="p-10 text-center lg:col-span-3 xl:col-span-5 bg-gray-100 h-screen overflow-y-scroll">
        <h1 className="text-4xl font-bold m-10">
          Todos los <span className="text-indigo-600">Paseos realizados</span>
        </h1>
        <CardWalks walks={walks}/>
      </div>
    </div>
  )
}

export default Walks