import { useDispatch, useSelector } from 'react-redux';
import StarRating from '../Reviews/StartRating';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Payment from '../Booking Confirmation/Payment';
import { setCurrentUser } from '../../Redux/actions/';
import Summary from '../Booking Confirmation/Summary';
import Modal from '../../Views/Modal/Modal';
import FormDogs from '../Home/Components/FormDogs/FormDogs';
import WalkCosts from '../Booking Costs/WalkCosts';
import Schedule from '../Booking Schedule/Schedule';

function WalkerDetail() {
	const dispatch = useDispatch();

	const [details, setDetails] = useState([]);
	const [loading, setLoading] = useState(false);

	// modal states
	const [estadoModal, setEstadoModal] = useState(false);
	const [currentStep, setCurrentStep] = useState(1);

	const { id } = useParams();

	async function getDetails(id) {
		try {
			setLoading(true);

			const res = await axios.get(`http://localhost:3001/user/id/${id}`);
			console.log(res.data);
			setDetails(res.data);
			dispatch(setCurrentUser(res.data));
			setLoading(false);
		} catch (error) {
			console.error(error.message);
			alert(error.message);
		}
	}

	const handleOpen = () => setEstadoModal(!estadoModal);

	const nextStep = () => {
		setCurrentStep(currentStep + 1);
	};

	const prevStep = () => {
		if (currentStep > 1) setCurrentStep(currentStep - 1);
	};

	const renderStepContent = (step) => {
		if (step > 4) setCurrentStep(1);
		switch (step) {
			case 1:
				return <FormDogs />;
			case 2:
				return <WalkCosts />;
			case 3:
				return <Schedule />;
			case 4:
				return <Payment />;
			default:
				return <FormDogs />;
		}
	};

	useEffect(() => {
		getDetails(id);
	}, [id]);

	return (
		<>
			<Nav />
			<div className="flex items-center gap-10 justify-center bg-[#e9ecef] p-6 w-full h-screen">
				{loading ? (
					<h1>Loading...</h1>
				) : (
					<>
						<div className="border-md h-5/6 w-1/3 flex items-center flex-col justify-center gap-4 bg-white p-3 rounded-md shadow">
							<div className="h-40 w-40">
								<img
									className="w-full h-full p-1 rounded-full object-cover border-4 border-black"
									src={details.image ? details.image : ''}
									alt={details.name}
								/>
							</div>
							<h1 className="font-bold text-lg capitalize">
								{details.name}
							</h1>
							<div className="flex flex-col gap-2">
								<div className="text-black flex gap-2">
									<div>
										<EmailIcon color="inherit" />
									</div>
									<p>{details.email}</p>
								</div>

								<div className="text-sm text-black flex gap-2">
									<div>
										<PhoneIcon color="inherit" />
									</div>
									<p>{details.phone}</p>
								</div>

								<div className="text-sm text-black flex gap-2">
									<div>
										<LocationOnIcon color="inherit" />
									</div>
									<p>
										{details.country}, {details.city}
									</p>
								</div>
							</div>

							{/* <Link
								to={'/home/payment'}
								// state={{ details }}
								className="rounded-md mt-2 text-white bg-green-500 p-2"
							>
								Book {details.name}
							</Link> */}
							<button
								className="rounded-md mt-2 text-white bg-green-500 p-2"
								onClick={handleOpen}
							>
								Test Modal
							</button>
							<Modal
								estadoModal={estadoModal}
								setEstadoModal={setEstadoModal}
								nextStep={nextStep}
								prevStep={prevStep}
								currentStep={currentStep}
							>
								{renderStepContent(currentStep)}
							</Modal>
						</div>
						<div className="gap-8 flex-col ml-5 w-1/2 h-4/6  p-3 rounded-md bg-white shadow">
							<div className="h-2/5">
								<h3 className="font-bold text-lg mb-2">
									About Me
								</h3>
								<div className="flex p-2 m-1 justify-center items-center">
									<p className="items-center font-semibold justify-center flex w-5/6">
										{details.description}
									</p>
								</div>
							</div>

							{/* <StarRating size={20} /> */}

							<div className="">
								<h3 className="font-bold text-lg">
									Recent Reviews
								</h3>
								<div className="gap-5 flex mt-2">
									<div className="rounded-md bg-[#faf9f9] w-full px-6 py-3 shadow-md italic">
										<p>Good</p>
									</div>
									<div className="rounded-md bg-[#faf9f9] w-full px-6 py-3 shadow-md italic">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit.
											Exercitationem, autem veniam amet
											cupiditate aliquid maiores
										</p>
									</div>{' '}
									<div className="rounded-md bg-[#faf9f9] w-full px-6 py-3 shadow-md">
										<p>Ok sjkladjas</p>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default WalkerDetail;
