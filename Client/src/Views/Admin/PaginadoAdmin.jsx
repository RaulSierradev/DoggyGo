const PaginadoAdmin = (props) => {
  const { cardsPerPage, currentPage, setCurrentPage, totalCards } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className="pb-14">
      <ul className="inline-block p-0 m-0">
        <li className="inline">
          <p
            className={`text-white bg-indigo-800 float-left px-2 py-4 cursor-pointer ${
              currentPage === 1
                ? "cursor-not-allowed bg-slate-400 text-gray-700 pointer-events-none"
                : ""
            } hover:bg-indigo-600`}
            onClick={onPrevPage}
          >
            Previous
          </p>
        </li>
        {pageNumbers.map((e) => {
          return (
            <li className="inline" key={e}>
              <p
                className={`${e === currentPage ? "text-indigo-700 bg-stone-400 float-left px-2 py-4 cursor-pointer" : "text-indigo-500 bg-stone-300 float-left px-2 py-4 cursor-pointer"} hover:bg-stone-200`}
                onClick={() => onSpecificPage(e)}
              >
                {e}
              </p>
            </li>
          );
        })}
        <li className="inline">
          <p
            className={`text-white bg-indigo-800 float-left px-2 py-4 cursor-pointer ${
              currentPage >= pageNumbers.length
                ? "cursor-not-allowed bg-slate-400 text-gray-700 pointer-events-none"
                : ""
            } hover:bg-indigo-600`}
            onClick={onNextPage}
          >
            Next
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PaginadoAdmin;
