import { useDispatch, useSelector } from 'react-redux';
import PetsIcon from '@mui/icons-material/Pets';
import { useState } from 'react';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { setWalk } from '../../Redux/actions';

function WalkCosts() {
	const currentUser = useSelector((state) => state.currentUser);
	console.log(currentUser);

	const [details, setDetails] = useState({});
	const [selectedService, setSelectedService] = useState(null);

	const dispatch = useDispatch();

	function setWalkDetail() {
		try {
			dispatch(setWalk(details));
			alert('Se ha seleccionado el servicio correctamente');
		} catch (error) {
			console.error(error.message);
			alert(error.message);
		}
	}

	const handleChange = (e) => {
		const service = e.target.value;
		if (service === 'basic') {
			setDetails({
				...details,
				title: 'Fast Walk',
				duration: '20 min',
				cost: '8',
			});
		} else if (service === 'mid') {
			setDetails({
				...details,
				title: 'Basic Walk',
				duration: '30 min',
				cost: '12',
			});
		} else if (service === 'long') {
			setDetails({
				...details,
				title: 'Long Walk',
				duration: '60 min',
				cost: '20',
			});
		}
		setSelectedService(service);
	};

	console.log(details);

	return (
		<div className="flex flex-col items-center w-full h-full gap-6">
			<div className="text-indigo-500 text-2xl font-bold">
				Que tipo de Paseo necesita tu mascota?
			</div>
			<div className="text-slate-500 text-2xl font-bold">
				<PetsIcon />
				Selecciona el Paseo
			</div>
			<div
				className={`flex items-center border-4 rounded-md border-black p-4 ${
					selectedService === 'basic'
						? 'bg-green-100 border-green-500'
						: ''
				}`}
			>
				<input
					type="radio"
					name="service"
					id="basic"
					className="invisible"
					onChange={handleChange}
					checked={details.service === 'basic'}
					value="basic"
				/>
				<label
					htmlFor="basic"
					className="cursor-pointer flex items-center gap-8"
				>
					<div>
						<ElectricBoltIcon />
					</div>

					<div className="flex flex-col gap-1">
						<p>Fast Walk</p>
						<p className="text-sm font-thin text-slate-800">
							20 minutes
						</p>
					</div>

					<p>$8</p>
				</label>
			</div>

			<div
				className={`flex items-center border-4 rounded-md border-black p-4 ${
					selectedService === 'mid'
						? 'bg-green-100 border-green-500'
						: ''
				}`}
			>
				<input
					type="radio"
					name="service"
					id="mid"
					className="invisible"
					onChange={handleChange}
					checked={details.service === 'mid'}
					value="mid"
				/>
				<label
					htmlFor="mid"
					className="cursor-pointer flex items-center gap-8"
				>
					<div>
						<EmojiPeopleIcon />
					</div>

					<div className="flex flex-col gap-1">
						<p>Basic Walk</p>
						<p className="text-sm font-thin text-slate-800">
							30 minutes
						</p>
					</div>

					<p>$12</p>
				</label>
			</div>

			<div
				className={`flex items-center border-4 rounded-md border-black p-4 ${
					selectedService === 'long'
						? 'bg-green-100 border-green-500'
						: ''
				}`}
			>
				<input
					type="radio"
					name="service"
					id="long"
					className="invisible"
					onChange={handleChange}
					checked={details.service === 'long'}
					value="long"
				/>
				<label
					htmlFor="long"
					className="cursor-pointer flex items-center gap-8"
				>
					<div>
						<DirectionsWalkIcon />
					</div>

					<div className="flex flex-col gap-1">
						<p>Long Walk</p>
						<p className="text-sm font-thin text-slate-800">
							1 hour
						</p>
					</div>

					<p>$20</p>
				</label>
			</div>
			<button
				className="bg-slate-800 text-white p-2 rounded-md"
				onClick={setWalkDetail}
			>
				confirm
			</button>
		</div>
	);
}

export default WalkCosts;
