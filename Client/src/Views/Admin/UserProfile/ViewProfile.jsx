const ViewProfile = (props) => {
  const { userDetail } = props;
  return (
    <div>
      <div className="shadow-xl text-sm  bg-indigo-100 p-7 text-gray-900">
        <p className="py-3 text-gray-900">
          email: <span className="text-gray-600">{userDetail.email}</span>
        </p>
        <p className="py-3">
          fecha de nacimiento:{" "}
          <span className="text-gray-700">{userDetail.birthdate}</span>
        </p>
        <div className="grid grid-cols-2 gap-6">
          <p>
            Pais: <span className="text-gray-700">{userDetail.country}</span>
          </p>
          <p>
            Estado: <span className="text-gray-700">{userDetail.state}</span>
          </p>
          <p>
            Ciudad: <span className="text-gray-700">{userDetail.city}</span>
          </p>
          <p>
            Direccion:{" "}
            <span className="text-gray-700">{userDetail.address}</span>
          </p>
          <p>
            Telefono: <span className="text-gray-700">{userDetail.phone}</span>
          </p>
          <p>
            Disponible:{" "}
            <span className="text-gray-700">
              {userDetail.status ? "true" : "false"}
            </span>
          </p>
          <p
            className={`${
              userDetail.rol === "Client" && "hidden"
            } pr-10 text-justify `}
          >
            Descripcion:{" "}
            <span className="block text-gray-700">
              {userDetail.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
