import close from '../../img/x.svg';
import Payment from '../Booking Confirmation/Payment';
import FormDogs from '../Home/Components/FormDogs/FormDogs';

const Modal = ({
	children,
	estadoModal,
	setEstadoModal,
	nextStep,
	prevStep,
	currentStep,
}) => {
	return (
		<div className="overflow-y-scroll">
			{estadoModal && (
				<div
					className="relative z-10"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-3/6 h-[650px] overflow-y-auto">
								<button
									className="absolute top-5 text-center items-center right-5 w-8 h-8 bg-indigo-600 text-white hover:bg-indigo-500 rounded-full"
									onClick={() => setEstadoModal(!estadoModal)}
								>
									<img src={close} />
								</button>
								<div className="p-10 w-full">{children}</div>
								<div className="gap-8 flex justify-center border-t-2 border-slate-100 border items-center mb-5">
									<div className="flex">
										{currentStep === 1 ? (
											''
										) : (
											<button
												className="rounded-md mt-2 text-white bg-green-500 p-2"
												onClick={() => prevStep()}
											>
												Back
											</button>
										)}
									</div>
									{currentStep >= 4 ? (
										''
									) : (
										<div className="flex ">
											<button
												className="rounded-md mt-2 text-white bg-green-500 p-2"
												onClick={() => nextStep()}
											>
												Continue
											</button>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
