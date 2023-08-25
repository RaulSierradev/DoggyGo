import { useSelector } from 'react-redux';
import PetsIcon from '@mui/icons-material/Pets';
import { useState } from 'react';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

function WalkCosts() {
	const currentUser = useSelector((state) => state.currentUser);
	console.log(currentUser);

	const [details, setDetails] = useState({});
	const [checked, setChecked] = useState(false);

	const handleChange = (e) => {
		setDetails({
			...details,
			[e.target.name]: e.target.value,
		});
		setChecked(!checked);
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
					details.service === 'basic'
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

					<p>$12</p>
				</label>
			</div>

			<div
				className={`flex items-center border-4 rounded-md border-black p-4 ${
					details.service === 'mid'
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

					<p>$16</p>
				</label>
			</div>

			<div
				className={`flex items-center border-4 rounded-md border-black p-4 ${
					details.service === 'long'
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
		</div>
	);
}

export default WalkCosts;
