import { useState } from 'react';
import AccItem from './AccItem';

const faqs = [
	{
		title: '¿Cómo Funciona DoggyGo?',
		text: 'DoggyGo esta diseñado para conectar a dueños de perros con paseadores de perros confiables y verificados en tu área. Brindandote un proceso simple, desde la selección del paseador hasta el pago.',
	},
	{
		title: '¿Cómo agendo un paseo?',
		text: 'Elige a tu paseador y selecciona la duración que prefieras (20, 30 minutos o 1 hora). Una vez que hayas elegido un paseador, se te dirigirá a la página de pago donde podrás completar la transacción a través de Mercado Pago. ¡Eso es todo!',
	},
	{
		title: '¿Cómo me registro como paseador?',
		text: 'Registrarte como paseador en DoggyGo es muy fácil. Una vez que tu perfil haya sido aprobado, podrás empezar a recibir solicitudes de paseo. ¡Es así de sencillo!',
	},
];

export default function Accordion() {
	const [activeIndex, setActiveIndex] = useState(null);

	return (
		<div className="w-4/6 flex flex-col gap-3">
			{faqs.map((faq, index) => (
				<AccItem
					key={index}
					title={faq.title}
					text={faq.text}
					number={index}
					activeIndex={activeIndex}
					onActive={setActiveIndex}
				/>
			))}
		</div>
	);
}
