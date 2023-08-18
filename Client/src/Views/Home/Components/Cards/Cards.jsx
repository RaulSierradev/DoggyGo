/* eslint-disable react/prop-types */
import Card from "../Card/Card";

const Cards = ({ walkers }) => {
  return (
    <div>
      <div className='m-5 border-2 rounded-lg container mx-auto'>
        {walkers &&
          walkers.map((walker) => (
            <div className='px-5' key={walker.id}>
              <Card walker={walker} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cards;
