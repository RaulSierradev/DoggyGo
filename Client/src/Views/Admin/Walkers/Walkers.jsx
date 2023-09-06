import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

import { getAll } from "../../../Redux/actions.js";
import Sidebar from "../Sidebar.jsx";
import CardsWalkers from "./CardsWalkers.jsx";

const Walkers = () => {
  const token = Cookies.get('auth'); // {"email":"test","password":"test"}
	const decoded = jwt_decode(token);
	const id = decoded.id;
  const users = useSelector((state) => state.users);
  const userProfile = users.filter((user) => user.id === id)[0];
  const walkers = useSelector((state) => state.walkers);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getAll());
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar userProfile={userProfile} />
      <div className="p-10 text-center lg:col-span-3 xl:col-span-5 bg-gray-100 h-screen overflow-y-scroll">
        <h1 className="text-4xl font-bold m-10">
          Todos nuestros <span className="text-indigo-600">Paseadores</span>
        </h1>
        <CardsWalkers walkers={walkers} />
      </div>
    </div>
  );
};

export default Walkers;
