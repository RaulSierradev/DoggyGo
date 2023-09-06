import Summary from './Summary';
import { useDispatch, useSelector } from 'react-redux';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { useState } from 'react';
import { createWalk, setWalk } from '../../Redux/actions';
import idFromToken from '../utils/getToken';

const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

function Payment() {
	const idClient = idFromToken();
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);

	const bookingFee = 1.5;
	initMercadoPago(PUBLIC_KEY);
	// get the current user (Walker user)
	const currentUser = useSelector((state) => state.currentUser);
	console.log(currentUser);

	// an state to keep track of the walk
	const walk = useSelector((state) => state.walk);
	console.log(walk);

	// get the current user (Client user)
	const clientUser = useSelector((state) =>
		state.users.filter((user) => user.id === idClient)
	);
	console.log('client id ' + clientUser[0].id);

	const [id, setId] = useState(null);

	const createPreference = async () => {
		try {
			const response = await axios.post('http://localhost:3001/payment', {
				description: walk.title,
				price: Number(walk.cost) + bookingFee,
				quantity: 1,
				currency_id: 'USD',
			});
			console.log(response.data);
			const { id } = await response.data;
			console.log(id);
			return id;
		} catch (error) {
			console.log(error.message);
		}
	};

	console.log('walker id ' + currentUser.id);
	const handlePayment = async () => {
		setLoading(true);
		await dispatch(
			setWalk({
				...walk,
				total: Number(walk.cost) + bookingFee,
				state: true, // this needs back fix
				// walker: currentUser.name,
				WalkerId: currentUser.id, // ! fix this
				ClientId: clientUser[0].id,
			})
		);
		// get the new walk state
		console.log(walk);

		// await dispatch(createWalk());

		const id = await createPreference();
		setId(id);
		setLoading(false);
	};

	return (
		<div>
			<div className="flex flex-col items-center w-full h-full gap-4">
				<div className="w-2/4 h-16 m-2">
					<div className="pl-6 pr-4 py-4 bg-cyan-50 rounded-lg border border-emerald-700 justify-center items-center gap-1 flex">
						<div className="text-emerald-700 text-base font-normal text-center">
							Gracias, tu reserva con{' '}
							<span className="font-bold">
								{currentUser.name}
							</span>{' '}
							pronto estara confirmada
						</div>
					</div>
				</div>
				<div className="text-indigo-500 text-2xl font-bold">
					Listos para enviar tu pago
				</div>
				<div className="text-slate-500 text-2xl font-bold">Resumen</div>
				<div className="w-96">
					<span className="text-slate-400 text-lg font-normal">
						Gracias por confiar en nosotros y agendar a{' '}
						<span className="font-bold">{currentUser.name}</span>{' '}
						como tu paseador. Abajo encuentras un resumen del paseo.
						Se enviara una copia a tu correo.{' '}
					</span>
				</div>
				<Summary />
				<div className="text-slate-500 text-2xl font-bold">Precio</div>
				<div className="w-96 h-6 justify-start items-start inline-flex">
					<div className="grow shrink basis-0 text-slate-500 text-lg font-normal">
						Paseo de {walk.duration}
					</div>
					<div className="text-right text-slate-500 text-lg font-normal">
						${walk.cost}
					</div>
				</div>
				<div className="w-96 h-6 justify-start items-start inline-flex">
					<div className="grow shrink basis-0 text-slate-500 text-lg font-normal">
						Booking Fee
					</div>
					<div className="text-right text-slate-500 text-lg font-normal">
						${bookingFee}
					</div>
				</div>
				<div className="w-96 h-12 flex-col justify-start items-start inline-flex border-y-2 border-slate-100">
					<div className="self-stretch py-3 justify-start items-start inline-flex">
						<div className="grow shrink basis-0 text-gray-700 text-lg font-semibold">
							Total a pagar
						</div>
						<div className="text-right text-gray-700 text-lg font-semibold">
							${Number(walk.cost) + bookingFee}
						</div>
					</div>
					<div className="self-stretch h-px bg-slate-300" />
				</div>
				<div className="w-96 text-slate-400 text-lg font-normal">
					Realiza tu pago de manera segura con Mercado Pago.
				</div>
				<div className="w-40 h-12 px-5 py-3 rounded justify-start items-center gap-1 inline-flex">
					<div className="w-4 h-4 relative">
						<div className="w-3.5 h-3.5 left-[1.88px] top-[1.71px] absolute" />
						<div className="w-3.5 h-3.5 left-[1.88px] top-[1.71px] absolute" />
					</div>
					<div className="text-indigo-500 text-lg font-normal shadow-sm p-2 rounded-md">
						<img src="/mercadopagologo.svg" alt="" />
					</div>
				</div>
				<div className="flex gap-2 mb-5">
					<div className="w-48 h-12 px-5 py-3 rounded border border-indigo-500 justify-start items-center gap-2 inline-flex">
						<button className="text-indigo-500 text-lg font-normal">
							Back
						</button>
					</div>
					<div className="w-44 h-12 px-5 py-3 bg-indigo-500 rounded justify-start items-center gap-2 inline-flex">
						<button
							onClick={handlePayment}
							className="text-neutral-50 text-lg font-normal"
						>
							Confirm and pay
						</button>
					</div>
				</div>
				<div className="flex">
					{loading ? (
						<div className="font-bold text-blue-600">
							Loading...
						</div>
					) : (
						id && <Wallet initialization={{ preferenceId: id }} />
					)}
					{/* {id && <Wallet initialization={{ preferenceId: id }} />} */}
				</div>
			</div>
		</div>
	);
}

export default Payment;
