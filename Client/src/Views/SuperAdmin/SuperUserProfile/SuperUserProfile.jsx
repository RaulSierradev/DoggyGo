import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteUser, getById } from "../../../Redux/actions.js";
import SuperSidebar from "../SuperSidebar.jsx";
import SuperViewProfile from "./SuperViewProfile.jsx";
import SuperEditProfile from "./SuperEditProfile.jsx";

const SuperUserProfile = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch]);
  let userDetail = useSelector((state) => state.user);
  const handleDelete = ()=>{
    alert('Eliminar usuario')
    dispatch(deleteUser(id))
    navigate('/sadmin')
  }
  return (
    <div>
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <SuperSidebar />
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
                <h1 className="text-4xl text-amber-600">{userDetail.name}</h1>
                <p>{userDetail.rol}</p>
              </div>
              <div className="flex justify-evenly p-8 gap-5">
                <button
                  onClick={() => setEdit(!edit)}
                  className="bg-emerald-700 p-5 text-white font-bold rounded-lg hover:bg-emerald-600"
                >
                  {!edit ? "Editar Perfil" : "Ver perfil"}
                </button>
                {userDetail.rol !== "Admin" && (
                  <button className="bg-blue-700 p-5 text-white font-bold rounded-lg hover:bg-blue-600">
                    {userDetail.rol === "Client"
                      ? "Paseos solicitados"
                      : "Paseos realizados"}
                  </button>
                )}

                <button className="bg-rose-600 p-5 text-white font-bold rounded-lg hover:bg-rose-500" onClick={handleDelete}>
                  Eliminar
                </button>
              </div>
              {!edit && <SuperViewProfile userDetail={userDetail} />}
              {edit && (
                <SuperEditProfile
                  userDetail={userDetail}
                  setEdit={setEdit}
                  edit={edit}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperUserProfile;
