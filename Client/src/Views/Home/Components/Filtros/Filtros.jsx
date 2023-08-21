import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterWalkers, restoreWalkers } from "../../../../Redux/actions";

const Filtros = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(restoreWalkers())
  }, [dispatch])

  const [filter, setFilter] = useState("")

  const handleFilter = (event)=>{
    event.preventDefault();
    const value = event.target.value;

    dispatch(filterWalkers(value));
    setFilter(value);
  }

  const handleResetFilter = ()=>{
    dispatch(restoreWalkers());
    setFilter("");
  }

  return (
    <div className='flex justify-center mt-3 '>
      <select name='locationfilter' value={filter} onChange={handleFilter}>
        <option value='' disabled>
          Select Location
        </option>
        <optgroup label="Country">
          <option value="Country - Colombia">Colombia</option>
          <option value="Country - Argentina">Argentina</option>
          <option value="Country - Mexico">Mexico</option>
          <option value="Country - Chile">Chile</option>
          <option value="Country - Uruguay">Uruguay</option>
        </optgroup>
        <optgroup label="State">
          <option value="State - Bogota D.C.">Bogota D.C.</option>
          <option value="State - Buenos Aires">Buenos Aires</option>
          <option value="State - CDMX">CDMX</option>
          <option value="State - Metropolitana de Santiago">Metropolitana de Santiago</option>
          <option value="State - Montevideo">Montevideo</option>
        </optgroup>
        <optgroup label="City">
          <option value="City - Bogota">Bogota</option>
          <option value="City - Buenos Aires">Buenos Aires</option>
          <option value="City - Ciudad De Mexico">Ciudad De Mexico</option>
          <option value="City - Santiago">Santiago</option>
          <option value="City - Montevideo">Montevideo</option>
        </optgroup>
      </select>
      <button onClick={handleResetFilter}>X</button>
    </div>
  );
};

export default Filtros;
