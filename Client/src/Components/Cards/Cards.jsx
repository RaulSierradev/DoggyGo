import { useState } from "react";
import Card from "../Card/Card";
//import { useSelector } from "react-redux";

const Cards = () => {
  //*Utilice un array local, actualizar a estado global
  //const paseadores = useSelector((state) => state.paseadores);
  const [paseadores, setPaseadores] = useState([
    {
      id: 1,
      name: "Pedro",
      direccion: "Calle falsa 123",
      telefono: "1234-9876",
      descripción: "Esta es mi descripcion",
      disponibilidad: true,
    },
    {
      id: 2,
      name: "Juan",
      direccion: "Calle falsa 123",
      telefono: "1234-9876",
      descripción: "Esta es mi descripcion",
      disponibilidad: false,
    },
  ])

  return (
    <div>
      <div className="my-5">
        <h1>Estas son las cards</h1>
        {paseadores?.map((paseador) => (
        <div className="px-5" key={paseador.id}>
          <Card paseador={paseador} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Cards;
