import ImageUpload from "../../../Dashboard/components/ImageUpload";
import Modal from "../../../Modal/Modal";

const FormDogs = ({ estadoModal, setEstadoModal }) => {
  return (
    <div className="overflow-y-scroll">
      <Modal estadoModal={estadoModal} setEstadoModal={setEstadoModal}>
        <div className="overflow-y-scroll">
          <div className="text-gray-700 text-4xl">
            <h1>
              Contacta con{" "}
              <span className="text-indigo-600 font-bold">{`<Nombre paseador>`}</span>
            </h1>
          </div>

          <form className="text-lg p-5">
            <div className="pt-3 pb-3">
              <label className="pr-3">Nombre mascota</label>
              <input
                placeholder="Ej: Fido"
                type="text"
                name="name"
                id="name"
                className="w-96 rounded-md border-0 py-1.5 bg-slate-200 text-gray-900 shadow-lg ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
            <div className="pt-3 pb-3">
              <label className="pr-3">Raza</label>
              <select className="w-48 text-base text-gray-700 p-3 rounded-md">
                <option>Akita Japonés</option>
                <option>Beagle</option>
                <option>Boyero de Berna</option>
                <option>Bull Terrier</option>
                <option>Chihuahua</option>
                <option>Crocker Spaniel</option>
                <option>Dóberman</option>
                <option>Golden Retriver</option>
                <option>Maltés</option>
                <option>Pastor Alemán</option>
              </select>
            </div>
            <div className="pt-3 pb-3">
              <label className="pr-3">Edad:</label>
              <input
                placeholder="Ej: Fido"
                type="number"
                name="name"
                id="name"
                className="w-24 rounded-md border-0 py-1.5 bg-slate-200 text-gray-900 shadow-lg ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
            <div>
              <label>Castrado/esterilizada: </label>
              <label className="text-gray-900 px-3">
                <input type="radio" name="castrado" /> Sí
              </label>
              <label className="text-gray-900 px-3">
                <input type="radio" name="castrado" /> No
              </label>
            </div>
            <div className="pt-3 pb-3">
              <label>Tamaño: </label>
              <div className="text-sm flex justify-between text-center">
                <label className="text-gray-900 px-3">
                  <input type="radio" name="tamaño" /> Pequeño{" "}
                  <span>
                    <br />
                    (3 - 10 Kg)
                  </span>
                </label>
                <label className="text-gray-900 px-3">
                  <input type="radio" name="tamaño" /> Mediano{" "}
                  <span>
                    <br />
                    (3 - 10 Kg)
                  </span>
                </label>
                <label className="text-gray-900 px-3">
                  <input type="radio" name="tamaño" /> Grande{" "}
                  <span>
                    <br />
                    (3 - 10 Kg)
                  </span>
                </label>
                <label className="text-gray-900 px-3">
                  <input type="radio" name="tamaño" /> Gigantes{" "}
                  <span>
                    <br />
                    (3 - 10 Kg)
                  </span>
                </label>
              </div>
            </div>
            <div className="pt-3 pb-3 text-left">
              <ImageUpload />
            </div>
            <div className="flex justify-between">
              <div></div>
              <button type="submit" className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Continuar</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default FormDogs;
