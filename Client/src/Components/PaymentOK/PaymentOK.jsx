import { useEffect, useState } from 'react';
import style from './PaymentOK.module.css';
import icon from '/SuccessIcon.png';
import Swal from 'sweetalert2';
import { createWalk } from '../../Redux/actions';
import { useDispatch } from 'react-redux';

const PaymentOK = () => {
	const dispatch = useDispatch();
	const [items, setItems] = useState({});

	useEffect(() => {
		const localItems = JSON.parse(localStorage.getItem('user'));
		console.log(localItems);
		if (localItems) {
			setItems(localItems);
		}
	}, []);

	const handleConfirm = () => {
		try {
			dispatch(createWalk(items));
			localStorage.clear();
			Swal.fire({
				title: 'Paseo confirmado',
				text: 'Tu paseo ha sido confirmado',
				icon: 'success',
				confirmButtonText: 'Ok',
			});
		} catch (error) {
			console.log(error.message);
			Swal.fire({
				title: 'Error',
				text: 'Ha ocurrido un error',
				icon: 'error',
				confirmButtonText: 'Ok',
			});
		}
	};

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
					<p>Hora de Pago</p>{' '}
					<p className={style.sc2tx_txsec}>
						{`${new Date()}`.slice(4, 21)}
					</p>{' '}
				</div>
				<div className={style.POK_sec2_TXcontainer}>
					{' '}
					<p>Metdo de Pago</p>{' '}
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
				<button
					className="w-44 h-12 px-5 py-3 bg-indigo-500 rounded justify-start items-center gap-2 inline-flex"
					onClick={handleConfirm}
				>
					Confirma
				</button>
			</div>
		</div>
	);
};

export default PaymentOK;
