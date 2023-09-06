import { useDispatch, useSelector} from "react-redux"; 
import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import { setCurrentUser} from "../../Redux/actions.js"; 
import axios from "axios";

const Recuperar = () => {   
  const dispatch = useDispatch();
  const { id } = useParams();  

  const [details, setDetails] = useState([]); 

  async function getDetails(id) {
    try {

        const res = await axios.get(`http://localhost:3001/user/id/${id}`);
        setDetails(res.data);
        dispatch(setCurrentUser(res.data)); 
        return
    } catch (error) {
        console.error(error.message);
        
        // alert(error.message);
    }
} 
useEffect(() => {
  getDetails(id);
}, [id]);

console.log(details.name)

  
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Escriba su correo..."    
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default Recuperar;
