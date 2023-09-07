import style from './Landing.module.css';
import Paseadores from '../../Components/Paseadores/Paseadores';
import { NavLink, useNavigate } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../../Components/Footer/Footer';
//import Footer from '../Dashboard/components/Footer';

/* borrar al sustituir por urls de cloudinary */
import agenda from '/guia.png';
import contacta from '/contacta.png';
import renta from '/renta.png';
import flecha from '/flecha.png';

import Accordion from '../Accordion/Accordion';

const Landing = () => {
	const navigate = useNavigate();

	//requerido de redux
	const PaseadoresEstrella = [
		{
			img: 'https://images.unsplash.com/photo-1612981811649-f304acad6425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nJTIwd2Fsa2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
			price: 'Diego',
			addres: 'Santiago de Chile',
			dogs: 'Paseos completados',
			distance: '200',
		},
		{
			img: 'https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
			price: 'Martina',
			addres: 'Buenos Aires',
			dogs: 'Paseos completados',
			distance: '100',
		},
		{
			img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
			price: 'Bruno',
			addres: 'California',
			dogs: 'Pasos completados',
			distance: '50',
		},
	];

	const urlguia = agenda;
	const urlcontacta = contacta;
	const urlarenta = renta;
	const urlflecha = flecha;

	return (
		<div className={style.Landing}>
			<Nav />
			<section className={style.sec1}>
				<span>Bienvenido a Doggy</span>
				<h2>Pasea a tu perro</h2>
				<p>
					Sabemos lo ocupada que puede ser la vida moderna y cuán
					importante es el bienestar de tu peludo amigo. DoggyGo llega
					para solucionar esos problemas, ofreciéndote una forma
					fácil, rápida y segura de encontrar paseadores de perros
					confiables cerca de ti.
				</p>
				<NavLink
					to={'/registro'}
					className="bg-sky-900 rounded-md p-2 text-white font-bold"
				>
					Unete Hoy
				</NavLink>
			</section>
			<section className={style.sec2}>
				<p className={style.sec2txP}>¿como funciona?</p>
				<span className={style.sec2txS}>
					lo que necesitas saber para contratar a un paseador
				</span>
				<div className="w-4/6 flex items-center justify-center m-auto p-2">
					<Accordion />
				</div>
			</section>
			<section className={style.sec3}>
				<div className={style.sec3InfoC}>
					<h2 className={style.sec3tll}>paseadores estrella</h2>
					<div>
						<p className={style.sec3stx}>
							Algunos de nuestros mejores paseadores...
						</p>
						<NavLink to={'/home'} className={style.sec3vwall}>
							ver todos los paseadores{' '}
							<img
								style={{
									display: 'inline-block',
									height: '1rem',
								}}
								src={flecha}
								alt=""
							/>
						</NavLink>
					</div>
				</div>
				<div className={style.sec3PSContainer}>
					{PaseadoresEstrella.map((paseador, index) => {
						return (
							<Paseadores
								key={index + 'walker'}
								walker={paseador}
							/>
						);
					})}
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Landing;
