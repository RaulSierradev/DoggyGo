import Nav from '../Nav';
import Summary from './Summary';
import { useSelector } from 'react-redux';

function Payment() {
	const currentUser = useSelector((state) => state.currentUser);
	console.log(currentUser);

	return (
		<div>
			{/* <Nav /> */}
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
				<Summary details={currentUser} />
				<div className="text-slate-500 text-2xl font-bold">Precio</div>
				<div className="w-96 h-6 justify-start items-start inline-flex">
					<div className="grow shrink basis-0 text-slate-500 text-lg font-normal">
						Paseo de 1 hora
					</div>
					<div className="text-right text-slate-500 text-lg font-normal">
						$20
					</div>
				</div>
				<div className="w-96 h-6 justify-start items-start inline-flex">
					<div className="grow shrink basis-0 text-slate-500 text-lg font-normal">
						Booking Fee
					</div>
					<div className="text-right text-slate-500 text-lg font-normal">
						$1.50
					</div>
				</div>
				<div className="w-96 h-12 flex-col justify-start items-start inline-flex border-y-2 border-slate-100">
					<div className="self-stretch py-3 justify-start items-start inline-flex">
						<div className="grow shrink basis-0 text-gray-700 text-lg font-semibold">
							Total a pagar
						</div>
						<div className="text-right text-gray-700 text-lg font-semibold">
							$21.50
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
						<button className="text-neutral-50 text-lg font-normal">
							Confirm and pay
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
