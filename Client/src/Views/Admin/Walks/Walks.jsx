import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllWalks} from '../../../Redux/actions.js'
import Sidebar from '../Sidebar'
import CardWalks from "./CardWalks";

const Walks = () => {
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
      <Sidebar />
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