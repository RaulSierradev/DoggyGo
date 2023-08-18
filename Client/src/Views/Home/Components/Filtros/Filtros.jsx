const Filtros = () => {
  return (
    <div>
      <select name='filter'>
        <option value="" disabled>Select Filter</option>
        <option value="">Ubicacion</option>
        <option value="">Favoritos</option>
        <option value="">Disponibilidad</option>
      </select>
    </div>
  );
};

export default Filtros;
