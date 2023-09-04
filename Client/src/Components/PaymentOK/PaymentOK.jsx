import { useEffect, useState } from 'react';
import style from './PaymentOK.module.css';
import icon from '/SuccessIcon.png';

const PaymentOK = () => {
	const [items, setItems] = useState({});

	useEffect(() => {
		const localItems = JSON.parse(localStorage.getItem('user'));
		console.log(localItems);
		if (localItems) {
			setItems(localItems);
		}
	}, []);

	// const clearLocalStorage = () => {
	// 	localStorage.clear();
	// }

	const iconURL = icon;
	console.log(items);

	return (
		<div className={style.PaymentOK}>
			<div className={style.POK_sec1}>
				<img className={style.POK_icon} src={iconURL} />
				<h2 className={style.POK_ttl}>Pago exitoso</h2>
				<h2 className={style.POK_mnt}>$ {items.cost}</h2>
				<div className="flex items-center flex-col font-extralight mt-2">
					<p>Tu paseo de {items.duration} esta confirmado</p>
					<p>Fecha: {items.startDate}</p>
					<p>Hora: {items.time}</p>
				</div>
			</div>
			<hr />
			<div className={style.POK_sec2}>
				{/* <div className={style.POK_sec2_TXcontainer}>
					{' '}
					<p>Ref Number</p> <p className={style.sc2tx_txsec}>39427</p>{' '}
				</div> */}
				<div className={style.POK_sec2_TXcontainer}>
					{' '}
					<p>Payment Time</p>{' '}
					<p className={style.sc2tx_txsec}>
						{`${new Date()}`.slice(4, 21)}
					</p>{' '}
				</div>
				<div className={style.POK_sec2_TXcontainer}>
					{' '}
					<p>Payment Method</p>{' '}
					<p className={style.sc2tx_txsec}>Tarjeta de Credito</p>{' '}
				</div>
				<div className={style.POK_sec2_TXcontainer}>
					{' '}
					<p>Pago hecho en</p>{' '}
					<p className={style.sc2tx_txsec}>Mercado Pago</p>{' '}
				</div>
				<hr style={{ borderStyle: 'dashed' }} />
				<div className={style.POK_sec2_TXcontainer}>
					{' '}
					<p className={style.sc2tx_total}>Total</p>{' '}
					<p className={style.sc2tx_total}>${items.total}</p>{' '}
				</div>
			</div>
		</div>
	);
};

export default PaymentOK;
