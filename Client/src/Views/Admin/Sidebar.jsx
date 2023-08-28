import { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import { RiMore2Fill, RiCloseFill } from "react-icons/ri";
import { FcHome, FcManager, FcBusinessman, FcGlobe } from "react-icons/fc";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`bg-indigo-950 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_960_720.png"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          />
          <h1 className="text-xl text-white font-bold">Admin</h1>
        </div>
        {/* Nav */}
        <div className="bg-indigo-800 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8">
            <Link
              to="/admin/"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors hover:text-gray-400"
            >
              <FcHome /> Inicio
            </Link>
            <Link
              to="/admin/clientes"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors hover:text-gray-400"
            >
              <FcBusinessman /> <p>Clientes</p>
            </Link>
            <Link
              to="/admin/paseadores"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors hover:text-gray-400"
            >
              <FcManager /> Paseadores
            </Link>
            
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <FcGlobe /> Paseos
            </a>
          </nav>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl">
            <p className="text-gray-400">Having troubles?</p>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;
