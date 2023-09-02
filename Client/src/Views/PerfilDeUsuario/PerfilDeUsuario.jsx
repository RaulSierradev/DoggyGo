import React, { useState } from 'react'
import { SideBtn } from '../../Components/SideBtn/SideBtn'
import { SideBar } from '../../Components/SideBar/SideBar'
import DogsUser from '../DogsUser/DogsUser'
import style from './PerfilDeUsuario.module.css'
import userimg from '/user.png'
import imgdog from '/userDogs.png'

const PerfilDeUsuario = (props) => {

    //sustituir por las url de cloudinary...!!
    const imageUser = userimg
    const dogImage = imgdog

    const [view, setView] = useState((<p>holaaaaa</p>))

    
    return (

    <div className={style.PerfilDeUsuario}>
        <SideBar>
            <img src={imageUser} />
            <SideBtn title='Perritos' img={dogImage} fx={()=>{setView((<DogsUser/>))}} />
        </SideBar>
        <section className={style.ViewContainer}>
            {
            view
            }
        </section>
    </div>

  )
}

export default PerfilDeUsuario