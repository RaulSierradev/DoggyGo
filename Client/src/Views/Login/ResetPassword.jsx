import { useState } from 'react'; 
import { useDispatch, useSelector } from "react-redux"; 
import { getEmail} from '../../Redux/actions.js'

const ResetPassword = () => {  
    const dispatch = useDispatch(); 
    const email = useSelector((state) => state.email)   
    console.log("email1", email )
    const [emails, setEmails] =  useState('');  

    function handleChange(event){
        setEmails(event.target.value) 
        console.log("setEmail",emails)
    } 
    function handleSubmit(event){
        event.preventDefault(); 
        dispatch(getEmail(emails))  
        // console.log("getEmail",emails)
       
    } 
   

  return (
    <div>
     <h2>Olvidé mi contraseña</h2> 
      <form> 
        <input 
         type="search" 
         value={emails} 
         onChange={handleChange} 
         placeholder="Escriba su correo..."
        
        />
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};
export default ResetPassword;
