import React from 'react'
import style from './UserInfo.module.css'

const UserInfo = ({bool}) => {

  //desde redux
  const user = {
    id: '1a23b456-7c89-0123-45de-abcdef123456', 
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/74.jpg', 
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

  return (
    <div className={style[`UserInfoDynamic${bool}`]}>
      <div className={style.UserInfoContainer}>
        <div>
          <p style={{textAlign: 'center', fontSize:'2.5cqmax'}}>{user.name}</p>
        </div>
        <div className={style.imageContainer}>
          <img className={style.imageUser} src={user.image} />
        </div>
        <div>
          <p>{user.country}</p>
          <p>{user.description}</p>
        </div>
      </div>
    </div>
  )
}

export default UserInfo