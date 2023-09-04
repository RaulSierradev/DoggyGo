import React from 'react'
import style from './DogsUser.module.css'
import DogCard from '../../Components/DogCard/DogCard'

const DogsUser = () => {

  const dogs = [ {
    id: '1a23b456-7c89-0123-45de-abcdef123456',
    name: 'Max',
    image: 'https://images.dog.ceo/breeds/dachshund/Daschund_Wirehair.jpg',
    size: 'MEDIUM',
    age: '3 years',
    recomendations: 'Good with kids',
    breed: 'Golden Retriever',
    sex: 'MACHO',
    castrated: false
}]
  dogs.length = 10;
  dogs.fill(dogs[0])

  return (
    <div className={style.DogsUser}>
      <div className={style.DogsUserContainerP}>
        <div className={style.dogsContainer}>
          {
           dogs.map((dog, index)=>{
            return (
              <DogCard key={'dog'+index} dog={dog} anmdl={1+index*30 +'ms'}/>
            )
           })
          }
        </div>
      </div>
    </div>
  )
}

export default DogsUser