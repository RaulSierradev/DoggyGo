import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import StarIcon from '@mui/icons-material/Star';
//import { yellow } from '@mui/material/colors';
import Payment from '../Booking Confirmation/Payment';
import { setCurrentUser } from '../../Redux/actions/';
import Modal from '../../Views/Modal/Modal';
import FormDogs from '../Home/Components/FormDogs/FormDogs';
import WalkCosts from '../Booking Costs/WalkCosts';
import Schedule from '../Booking Schedule/Schedule';
import Swal from 'sweetalert2';
import ReviewForm from '../Reviews/reviewForm';
import idFromToken from '../utils/getToken';
import CardsReview from '../Reviews/CardsReview';



function WalkerDetail() {
	const dispatch = useDispatch();

	const clientId = idFromToken();
console.log(clientId);
	const [details, setDetails] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(false);
	console.log("reviews en walkerdetail",reviews);

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
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Something went wrong!',
			});
			// alert(error.message);
		}
	}

	async function getReviews() {
		try {
			// setLoading(true);

			const res = await axios.get(`http://localhost:3001/review/`);
			console.log(res.data);
			setReviews(res.data);

			// setLoading(false);
		} catch (error) {
			console.error(error.message);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Something went wrong!',
			});
			// alert(error.message);
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
		getReviews();
		getDetails(id);
	}, [id]);

	return (
		<>
			<Nav />
			<div className="flex gap-10 bg-[#e9ecef] p-6 w-full h-screen">
				{loading ? (
					<h1>Cargando...</h1>
				) : (
					<>
						<div className="border-md h-full w-1/3 flex items-center flex-col justify-center gap-4 bg-white p-3 rounded-md shadow">
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
								<div className="text-sm text-black flex gap-2">
									<div>
										<StarIcon color="inherit" />
									</div>
									<p>{details.ratingAvg}</p>
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
								Agenda a {details.name}
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


						<div className="gap-10 flex flex-col h-full w-2/3 bg-[#e9ecef]">
							<div className="gap-10 flex h-[35%] bg-[#e9ecef]">
								<div className="gap-8 flex-col w-1/3 p-3 rounded-md bg-white shadow">
									<h3 className="font-bold text-lg mb-2">
										Sobre mi
									</h3>
									<div className="flex p-2 m-1 justify-center items-center">
										<p className="items-center font-semibold justify-center flex w-5/6">
											{details.description}
										</p>
									</div>
								</div>
								<div className="gap-8 flex-col w-2/3 p-3 rounded-md bg-white shadow">
									<ReviewForm walkerId={id} clientId={clientId}/>
								</div>
							</div>
							<div className="gap-10 flex w-full h-[61%] rounded-md bg-[#e9ecef]">
								{/* <ReviewForm walkerId={id} clientId={clientId}/> */}
								<div className="flex flex-col w-full h-auto p-3 rounded-md bg-white shadow">
									<h3 className="font-bold text-lg mb-2">
										Reseñas
									</h3>
									<div className="flex flex-col w-full h-auto p-3 rounded-md bg-white shadow overflow-scroll">
										<CardsReview reviews={reviews}></CardsReview>
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
