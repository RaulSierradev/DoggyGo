import { useDispatch, useSelector } from 'react-redux';
import ImageUpload from '../../../Dashboard/components/ImageUpload';
import { useEffect, useState } from 'react';
import DogSize from './DogSize';
import { createDog } from '../../../../Redux/actions';
import Swal from 'sweetalert2';
import idFromToken from '../../../utils/getToken';

const FormDogs = () => {
	const id = idFromToken();
	const currentUser = useSelector((state) => state.currentUser);
	console.log(currentUser);

	const client = useSelector(
		(state) => state.users.filter((user) => user.id === id)[0]
	);
	console.log(client);

	const dispatch = useDispatch();

	const [details, setDetails] = useState({});
	const [imageUrl, setImageUrl] = useState(''); // save the image url

	useEffect(() => {
		setDetails((prevDetails) => ({
			...prevDetails,
			image: imageUrl,
			ownerID: client.id,
		}));
	}, [imageUrl, client]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		let convertedValue = value;

		if (value === 'true') {
			convertedValue = true;
		} else if (value === 'false') {
			convertedValue = false;
		}
		setDetails({
			...details,
			[name]: convertedValue,
		});
	};

	const handleSubmit = (e) => {
		try {
			e.preventDefault();
			dispatch(createDog(details));
			setDetails({});
			Swal.fire({
				icon: 'success',
				title: 'Felicitaciones!',
				text: 'Has registrado a tu mascota!',
			});
		} catch (error) {
			console.log(error.message);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Algo salio mal!',
			});
		}
	};

	console.log(details);
	return (
		<div className="w-full flex flex-col items-center justify-center">
			<div className="text-gray-700 text-4xl">
				<h1>
					Contacta con{' '}
					<span className="text-indigo-600 font-bold">
						{currentUser.name}
					</span>
				</h1>
			</div>
			<div className="text-indigo-500 text-2xl font-bold mt-4">
				Cuentanos de tu Mascota
			</div>

			<form
				className="text-lg p-5 gap-3 flex flex-col  w-5/6 rounded-md shadow-sm"
				onSubmit={handleSubmit}
			>
				<div className="pt-3 pb-3 flex items-center justify-center">
					<input
						placeholder="Nombre Mascota"
						type="text"
						name="name"
						id="name"
						value={details.name}
						onChange={handleChange}
						required
						className="w-96 rounded-md border-0 py-1.5 bg-slate-100 text-gray-900 shadow-lg ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
					/>
				</div>
				<div className="pt-3 pb-3 flex items-center justify-center">
					<label className="pr-3">Raza</label>
					<select
						className="w-48 text-base text-gray-700 p-3 rounded-md"
						onChange={handleChange}
						value={details.breed}
						name="breed"
					>
						<option>Akita Japonés</option>
						<option>Beagle</option>
						<option>Boyero de Berna</option>
						<option>Bull Terrier</option>
						<option>Chihuahua</option>
						<option>Crocker Spaniel</option>
						<option>Dóberman</option>
						<option>Golden Retriver</option>
						<option>Maltés</option>
						<option>Pastor Alemán</option>
					</select>
				</div>
				<div className="pt-3 pb-3 flex items-center justify-center">
					<label className="pr-3">Edad:</label>
					<input
						placeholder="Ej: 3"
						type="number"
						name="age"
						value={details.age}
						onChange={handleChange}
						className="w-24 rounded-md border-0 py-1.5 bg-slate-200 text-gray-900 shadow-lg ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-3"
					/>
				</div>
				<div className="flex items-center justify-center">
					<label>Castrado/esterilizada: </label>
					<label className="text-gray-900 px-3">
						<input
							type="radio"
							name="castrated"
							value="true"
							checked={details.castrated === true}
							onChange={handleChange}
						/>{' '}
						Sí
					</label>
					<label className="text-gray-900 px-3">
						<input
							type="radio"
							name="castrated"
							value="false"
							checked={details.castrated === false}
							onChange={handleChange}
						/>{' '}
						No
					</label>
				</div>
				<div className="flex items-center justify-center">
					<label>Sexo: </label>
					<label className="text-gray-900 px-3">
						<input
							type="radio"
							name="sex"
							value={'MACHO'}
							checked={details.sex === 'MACHO'}
							onChange={handleChange}
						/>{' '}
						Macho
					</label>
					<label className="text-gray-900 px-3">
						<input
							type="radio"
							name="sex"
							value={'HEMBRA'}
							checked={details.sex === 'HEMBRA'}
							onChange={handleChange}
						/>{' '}
						Hembra
					</label>
				</div>
				<DogSize
					setDetails={setDetails}
					details={details}
					handleChange={handleChange}
				/>
				<div className="mt-5">
					<ImageUpload setImageUrl={setImageUrl} />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default FormDogs;
