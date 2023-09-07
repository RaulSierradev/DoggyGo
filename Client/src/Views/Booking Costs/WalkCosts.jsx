import { useDispatch, useSelector } from 'react-redux';
import PetsIcon from '@mui/icons-material/Pets';
import { useState } from 'react';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { setWalk } from '../../Redux/actions';
import Swal from 'sweetalert2';

function WalkCosts() {
	const currentUser = useSelector((state) => state.currentUser);
	console.log(currentUser);

	const [details, setDetails] = useState({});
	const [selectedService, setSelectedService] = useState(null);

	const dispatch = useDispatch();

	function setWalkDetail() {
		try {
			dispatch(setWalk(details));
			Swal.fire({
				icon: 'success',
				text: 'Has seleccionado el servicio!',
			});
			// alert('Se ha seleccionado el servicio correctamente');
		} catch (error) {
			console.error(error.message);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Algo salio mal!',
			});
			// alert(error.message);
		}
	}

	const handleChange = (e) => {
		const service = e.target.value;
		if (service === 'basic') {
			setDetails({
				...details,
				title: 'Paseo Rapido',
				duration: '20 min',
				cost: '8',
			});
		} else if (service === 'mid') {
			setDetails({
				...details,
				title: 'Paseo Basico',
				duration: '30 min',
				cost: '12',
			});
		} else if (service === 'long') {
			setDetails({
				...details,
				title: 'Paseo Largo',
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
						<p>Paseo Rapido</p>
						<p className="text-sm font-thin text-slate-800">
							20 minutos
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
						<p>Paseo Basico</p>
						<p className="text-sm font-thin text-slate-800">
							30 minutos
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
						<p>Paseo Largo</p>
						<p className="text-sm font-thin text-slate-800">
							1 hora
						</p>
					</div>

					<p>$20</p>
				</label>
			</div>
			<button
				className="bg-slate-800 text-white p-2 rounded-md"
				onClick={setWalkDetail}
			>
				Confirma
			</button>
		</div>
	);
}

export default WalkCosts;
