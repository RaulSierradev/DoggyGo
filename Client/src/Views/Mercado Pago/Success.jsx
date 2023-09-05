import PaymentOK from '../../Components/PaymentOK/PaymentOK';
import Nav from '../Nav';
function Success() {
	return (
		<>
			<Nav />
			<div className="flex items-center justify-center mt-10">
				<PaymentOK />
			</div>
		</>
	);
}

export default Success;
