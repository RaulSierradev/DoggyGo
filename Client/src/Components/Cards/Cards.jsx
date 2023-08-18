/* eslint-disable react/prop-types */
import Card from "../Card/Card";

const Cards = ({ walkers }) => {
  return (
    <div>
      <div className='my-5'>
        <h1>Estas son las cards</h1>
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
