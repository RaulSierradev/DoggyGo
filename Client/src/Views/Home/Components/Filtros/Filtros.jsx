const Filtros = () => {
  return (
    <div className='flex justify-center mt-3 '>
      <select name='filter' defaultValue=''>
        <option value='' disabled>
          Select Filter
        </option>
        <option value='ubicacion'>Ubicacion</option>
        <option value='favoritos'>Favoritos</option>
        <option value='disponibilidad'>Disponibilidad</option>
      </select>
    </div>
  );
};

export default Filtros;
