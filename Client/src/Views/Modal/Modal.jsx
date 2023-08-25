import close from "../../img/x.svg";

const Modal = ({ children, estadoModal, setEstadoModal }) => {
  return (
    <div className="overflow-y-scroll">
      {estadoModal && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[750px] min-h-[450px]">
                <button
                  className="absolute top-5 text-center items-center right-5 w-8 h-8 bg-indigo-600 text-white hover:bg-indigo-500 rounded-full"
                  onClick={() => setEstadoModal(!estadoModal)}
                >
                  <img src={close} />
                </button>
                <div className="p-10">{children}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
