import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getById } from "../../../Redux/actions.js";
import Sidebar from "../Sidebar.jsx";
import ViewProfile from "./ViewProfile.jsx";
import EditProfile from "./EditProfile.jsx";

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch]);
  let userDetail = useSelector((state) => state.user);
  return (
    <div>
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <Sidebar />
        <div className="p-10 text-center lg:col-span-3 xl:col-span-5 bg-gray-100 h-screen overflow-y-scroll">
          <div className="flex">
            <div className="mr-10">
              <img
                className="w-72 rounded-3xl h-auto mx-10 mt-10"
                src={userDetail.image}
                alt={userDetail.name}
              />
            </div>
            <div className="text-left ml-10">
              <p className="text-sm py-3 text-left text-slate-700">
                id: #{userDetail.id}
              </p>
              <div className="font-bold">
                <h1 className="text-4xl text-indigo-600">{userDetail.name}</h1>
                <p>{userDetail.rol}</p>
              </div>
              <div className="flex justify-evenly p-8 gap-5">
                <button
                  onClick={() => setEdit(!edit)}
                  className="bg-emerald-700 p-5 text-white font-bold rounded-lg hover:bg-emerald-600"
                >
                  {!edit ? "Editar Perfil" : "Ver perfil"}
                </button>
                <button className="bg-blue-700 p-5 text-white font-bold rounded-lg hover:bg-blue-600">
                  {userDetail.rol === "Client"
                    ? "Paseos solicitados"
                    : "Paseos realizados"}
                </button>
                <button className="bg-amber-500 p-5 text-white font-bold rounded-lg hover:bg-amber-400">
                  Suspender
                </button>
              </div>
              {!edit && <ViewProfile userDetail={userDetail} />}
              {edit && <EditProfile userDetail={userDetail} setEdit={setEdit} edit={edit}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
