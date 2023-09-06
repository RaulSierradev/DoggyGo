import style from './Landing.module.css';
import Paseadores from '../../Components/Paseadores/Paseadores';
import { useNavigate } from 'react-router-dom';
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
			img: 'https://picsum.photos/203',
			price: 'paseador1',
			addres: 'paseador1',
			dogs: 'paseador1',
			distance: 'paseador1',
		},
		{
			img: 'https://picsum.photos/210',
			price: 'paseador2',
			addres: 'paseador2',
			dogs: 'paseador2',
			distance: 'paseador2',
		},
		{
			img: 'https://picsum.photos/200',
			price: 'paseador3',
			addres: 'paseador3',
			dogs: 'paseador3',
			distance: 'paseador3',
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
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Animi ex, omnis ea blanditiis odit incidunt architecto
					numquam magni veritatis aliquam, sed ut accusantium illo
					unde cupiditate itaque harum adipisci quidem?
				</p>
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
							de entre nuestros mejores paseadores...
						</p>
						<button className={style.sec3vwall}>
							ver todos los paseadores{' '}
							<img
								style={{
									display: 'inline-block',
									height: '1rem',
								}}
								src={flecha}
								alt=""
							/>
						</button>
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
