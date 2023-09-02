import React from 'react'
import style from './DogsUser.module.css'
import DogCard from '../../Components/DogCard/DogCard'

const DogsUser = () => {

  //desde redux
  const user = {
    id: '1a23b456-7c89-0123-45de-abcdef123456', 
    name: 'John Doe',
    image: 'john.jpg', 
    password: 'hashedPassword', 
    email: 'johndoe@example.com',
    birthdate: '1990-01-15', 
    country: 'USA',
    state: 'California',
    city: 'Los Angeles',
    address: '123 Main Street',
    phone: '+1 (123) 456-7890',
    description: 'A user description',
    schedule: '11am-3pm', 
    cpr: true, 
    status: true, 
    size: 'MEDIUM', 
    rol: 'Walker' 
};

  const dogs = [ {
    id: '1a23b456-7c89-0123-45de-abcdef123456',
    name: 'Max',
    image: 'max.jpg dsggggggggggggggggggggggggggggggggggggggggggggggggg',
    size: 'MEDIUM',
    age: '3 years',
    recomendations: 'Good with kids',
    breed: 'Golden Retriever',
    sex: 'MACHO',
    castrated: false
}]

  return (
    <div className={style.DogsUser}>
      <div className={style.UserInfo}>
        
      </div>
      <div className={style.dogsContainer}>
        {
         dogs.map((dog, index)=>{
          return (
            <DogCard dog={dog}/>
          )
         })
        }
      </div>
    </div>
  )
}

export default DogsUser