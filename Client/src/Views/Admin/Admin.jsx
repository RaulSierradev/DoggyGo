import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as actions from "../../Redux/actions.js";
import Header from "./Header";
import Sidebar from "./Sidebar";

// Icons
import { RiLineChartLine } from "react-icons/ri";

const Admin = () => {
  const clients = useSelector((state) => state.clients);
  const walkers = useSelector((state) => state.walkers);
  const walks = useSelector((state) => state.walks);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(actions.getAllUsers());
      dispatch(actions.getAllWalks());
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  console.log("Estos son los clientes", clients);
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1 */}
          <div className="bg-indigo-600 p-8 rounded-xl text-gray-300 flex flex-col gap-3">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">Ingresos</h4>
            <span className="text-5xl text-white">
              &#36; {1.5 * walks.length}
            </span>
          </div>
          {/* Card 2 */}
          <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
            <div className="flex items-center gap-4 bg-indigo-600/10 rounded-xl p-4">
              <span className="bg-indigo-600 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                {walks.length}
              </span>
              <div>
                <h3 className="font-bold">Paseos realizados</h3>
              </div>
            </div>
            <div className="bg-indigo-600/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-indigo-600 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  {clients.length}
                </span>
                <div>
                  <h3 className="font-bold">Nuevos Clientes</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">
              Últimos clientes inscritos
            </h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              {clients?.map((e, index) => {
                console.log(index);
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 mb-8 ${
                      index >= 2 && "hidden"
                    }`}
                  >
                    <img
                      src={e.image}
                      className="w-14 h-14 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">{e.name}</h3>
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-end">
                <Link
                  to="/admin/clientes"
                  className="hover:text-indigo-600 transition-colors hover:underline"
                >
                  <p>Todos los clientes</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-8">Ultimos paseos</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              {/* Card 1 */}
              {walks?.map((e, index) => {
                return (
                  <div
                    key={index}
                    className={`grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4 ${
                      index >= 2 && "hidden"
                    }`}
                  >
                    <div className="col-span-2 flex items-center gap-4">
                      <img
                        src={e.image}
                        className="w-14 h-14 object-cover rounded-xl"
                      />
                      <div>
                        <h3 className="font-bold">Jhon Philips</h3>
                        <p className="text-gray-500">{e.duration}</p>
                      </div>
                    </div>
                    <div>
                      <span
                        className={
                          e.state === true
                            ? `bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium`
                            : "bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium"
                        }
                      >
                        {e.state === true ? "En proceso" : "Finalizado"}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">&#36; {e.cost}</span>
                    </div>
                  </div>
                );
              })}
              {/* Card 2 */}
              <div className="flex justify-end">
                <a
                  href="#"
                  className="hover:text-indigo-600 transition-colors hover:underline"
                >
                  Todos los paseos
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8">
              Últimos paseadores inscritos
            </h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              {walkers?.map((e, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 mb-8 ${
                      index >= 2 && "hidden"
                    }`}
                  >
                    <img
                      src={e.image}
                      className="w-14 h-14 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">{e.name}</h3>
                    </div>
                  </div>
                );
              })}

              <div className="flex justify-end">
                <Link
                  to="/admin/paseadores"
                  className="hover:text-indigo-600 transition-colors hover:underline"
                >
                  <p>Todos los paseadores</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
