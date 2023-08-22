/* eslint-disable react/prop-types */
import Card from "../Card/Card";

const Cards = ({ walkers }) => {
  return (
    <div>
      <div className='m-5 border-2 rounded-lg container mx-auto bg-white'>
        <table className="border-separate border-spacing-3 w-full">
          <thead>
            <tr>
              <th>Walkers</th>
            </tr>
          </thead>
          <tbody>
            {walkers?.map((walker) => (
              <tr key={walker.id}>
                <td colSpan="1">
                  <Card walker={walker} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cards;
