import React, { useState } from 'react'
import style from './PerfilDeUsuario.module.css'
import { SideBtn } from '../../Components/SideBtn/SideBtn'
import { SideBar } from '../../Components/SideBar/SideBar'
import { UserEdit } from '../UserEdit/UserEdit'
import UserInfo from '../../Components/userInfo/userInfo'
import DogsUser from '../DogsUser/DogsUser'
/* BORRAR */
import userimg from '/user.png'
import imgdog from '/userDogs.png'
import imgInvsb from '/invisible.png'
import imvsb from '/visible.png'
import imgPsdo from '/pasado.png'
import imgEdt from '/editInfo.png'
/* BORRAR */

const PerfilDeUsuario = (props) => {

    //sustituir por las url de cloudinary...!!
    const imageUser = userimg
    const dogImage = imgdog
    const invisibleImg = imgInvsb
    const visibleImg = imvsb
    const pasadoimg = imgPsdo
    const editImg = imgEdt

    const [view, setView] = useState((<p>holaaaaa</p>))
    const [userI, setUserI] = useState(false)

    
    return (

    <div className={style.PerfilDeUsuario}>
        <SideBar>
            <img src={imageUser} />
            <SideBtn title='Perritos' img={dogImage} fx={()=>{setView((<DogsUser/>))}} />
            <SideBtn title='Paseos' img={pasadoimg}  fx={()=>{}} />
            <SideBtn title='Editar' img={editImg}  fx={()=>{setView((<UserEdit/>))}} />
            <SideBtn title='Usuario' img={userI ? invisibleImg : visibleImg }  fx={()=>{setUserI(!userI)}} />
        </SideBar>
        <section className={style.ViewContainer}> 
             <UserInfo bool={userI}/>
            {
            view
            }
        </section>
    </div>

  )
}

export default PerfilDeUsuario