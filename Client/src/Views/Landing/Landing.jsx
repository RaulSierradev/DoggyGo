import React from "react";
import style from "./Landing.module.css";
import Paseadores from "../../Components/Paseadores/Paseadores";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const PaseadoresEstrella = [
    {
      img: "https://picsum.photos/203",
      price: "paseador1",
      addres: "paseador1",
      dogs: "paseador1",
      distance: "paseador1",
    },
    {
      img: "https://picsum.photos/210",
      price: "paseador2",
      addres: "paseador2",
      dogs: "paseador2",
      distance: "paseador2",
    },
    {
      img: "https://picsum.photos/200",
      price: "paseador3",
      addres: "paseador3",
      dogs: "paseador3",
      distance: "paseador3",
    },
  ];

  return (
    <div className={style.Landing}>
      <nav className={style.nav}>
        <h1>DoggyGo</h1>
        <div className={style.secbtns1}>
          <button className={style.btnsnav} onClick={() => navigate("/home")}>
            home
          </button>
          <button className={style.btnsnav}>features</button>
          <button className={style.btnsnav}>service</button>
          <button className={style.btnsnav}>listed</button>
          <button className={style.btnsnav}>contact</button>
        </div>
        <div className={style.sesionbtns}>
          <button className={style.Sing} onClick={() => navigate("/login")}>
            Sing up
          </button>
          <button
            className={style.Register}
            onClick={() => navigate("/registro")}
          >
            {"Register".split("").map((letter, index) => (
              <span
                className={style.letter}
                style={{ animationDelay: `${(index + 1) * 60}ms` }}
                key={index}
              >
                {letter}
              </span>
            ))}
          </button>
        </div>
      </nav>
      <section className={style.sec1}>
        <span>Bienvenido a Doggy</span>
        <h2>Pasea a tu perro</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ex,
          omnis ea blanditiis odit incidunt architecto numquam magni veritatis
          aliquam, sed ut accusantium illo unde cupiditate itaque harum adipisci
          quidem?
        </p>
        <button>More about us</button>
      </section>
      <section className={style.sec2}>
        <p className={style.sec2txP}>¿como funciona?</p>
        <span className={style.sec2txS}>
          lo que necesitas saber para contratar a un paseador
        </span>
        <div className={style.sec2indicatiosnContainer}>
          <div className={style.sec2_idication1}>
            <img
              src='https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg?w=2000'
              alt=''
            />
            <div>
              <p>guia de paseadores</p>
              <button>
                how to buy <img src='' alt='' />
              </button>
            </div>
          </div>
          <div className={style.sec2_idication2}>
            <img
              src='https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg?w=2000'
              alt=''
            />
            <div>
              <p>agenda / contacta</p>
              <button>
                how to rent <img src='' alt='' />
              </button>
            </div>
          </div>
          <div className={style.sec2_idication3}>
            <img
              src='https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg?w=2000'
              alt=''
            />
            <div>
              <p>paga</p>
              <button>
                how to pay <img src='' alt='' />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={style.sec3}>
        <div className={style.sec3InfoC}>
          <h2 className={style.sec3tll}>paseadores estrella</h2>
          <div>
            <p className={style.sec3stx}>
              everything you need to when you're looking
            </p>
            <button className={style.sec3vwall}>
              ver todos los paseadores
            </button>
          </div>
        </div>
        <div className={style.sec3PSContainer}>
          {PaseadoresEstrella.map((paseador, index) => {
            return <Paseadores key={index + "walker"} walker={paseador} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Landing;
