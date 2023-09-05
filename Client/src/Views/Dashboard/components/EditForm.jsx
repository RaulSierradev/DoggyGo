import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import ImageUpload from './ImageUpload';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../../Redux/actions';
import idFromToken from '../../utils/getToken';
import Swal from 'sweetalert2';

function EditForm({ setEdit, edit }) {
	const dispatch = useDispatch();

	const [forms, setForms] = useState({});
	const [imageUrl, setImageUrl] = useState(''); // save the image url

	// get the current user id from the token
	const id = idFromToken();

	// fetch data from store and pass it to single component
	const users = useSelector((state) => state.users);
	const userProfile = users.filter((user) => user.id === id)[0];
	console.log(userProfile);

	// useEffect(() => {
	// 	setForms((prevDetails) => ({
	// 		...prevDetails,
	// 		email: userProfile.email,
	// 		image: imageUrl ? imageUrl : userProfile.image,
	// 		cpr: userProfile.cpr ? userProfile.cpr : false,
	// 		schedule: userProfile.schedule ? userProfile.schedule : '',
	// 		status: userProfile.status ? userProfile.status : false,
	// 		size: userProfile.size ? userProfile.size : null,
	// 	}));
	// }, [
	// 	imageUrl,
	// 	userProfile.cpr,
	// 	userProfile.schedule,
	// 	userProfile.status,
	// 	userProfile.size,
	// 	userProfile.image,
	// ]);

	useEffect(() => {
		setForms((prevDetails) => {
			const newDetails = {
				...prevDetails,
				email: userProfile.email,
				image: imageUrl ? imageUrl : userProfile.image,
				cpr: userProfile.cpr ? userProfile.cpr : false,
				status: userProfile.status ? userProfile.status : false,
				size: userProfile.size ? userProfile.size : null,
			};

			if (userProfile.schedule) {
				newDetails.schedule = userProfile.schedule;
			}

			return newDetails;
		});
	}, [
		imageUrl,
		userProfile.cpr,
		userProfile.schedule,
		userProfile.status,
		userProfile.size,
		userProfile.image,
	]);

	function onChange(e) {
		const { name, value, type } = e.target;

		const newValue = type === 'checkbox' ? e.target.checked : value;

		setForms({
			...forms,
			email: userProfile.email,
			[name]: newValue,
		});
	}

	// handle submit confirm button
	function handleSubmit(e) {
		e.preventDefault();
		// send data to server
		try {
			dispatch(editUser(forms));
			setForms({});
			setEdit(false);
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Edicion Exitosa',
				showConfirmButton: false,
				timer: 1500,
			});
		} catch (error) {
			console.log(error.message);

			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Algo salio mal!',
			});
		}
	}

	console.log(forms);
	console.log(userProfile.rol);

	return (
		<>
			<div className="flex  items-center gap-2 w-5/6">
				<form
					className="flex flex-1 items-center flex-col mt-6 gap-1"
					onSubmit={handleSubmit}
				>
					<TextField
						id="standard-basic"
						label="Name"
						name="name"
						variant="standard"
						value={forms.name}
						onChange={onChange}
					/>
					<TextField
						id="standard-basic"
						value={forms.birthDate}
						name="birthDate"
						label="Birth Date"
						variant="standard"
						placeholder="yyyy-mm-dd"
						onChange={onChange}
					/>
					<TextField
						id="standard-basic"
						value={forms.phone}
						name="phone"
						label="Phone"
						variant="standard"
						onChange={onChange}
					/>
					<div className="mt-5">
						<TextField
							id="standard-basic"
							label="Description"
							multiline
							rows={4}
							value={forms.description}
							name="description"
							onChange={onChange}
						/>
					</div>

					<button
						className="rounded-md text-white bg-green-500 p-2 mt-1"
						type="submit"
					>
						Confirm
					</button>
				</form>
				<div className="flex-1 items-center justify-center flex flex-col gap-5">
					<h3 className="font-bold">Edita tus preferencias</h3>
					{userProfile.rol === 'Walker' ? (
						<>
							<div className="pt-3 pb-3 flex items-center justify-center">
								<label className="pr-3">
									Horario de paseos
								</label>
								<select
									className="w-48 text-base text-gray-700 p-3 rounded-md"
									onChange={onChange}
									value={forms.schedule}
									name="schedule"
								>
									<option hidden value>
										Selecciona Horario
									</option>
									<option>6am-11am</option>
									<option>11am-3pm</option>
									<option>3pm-10pm</option>
								</select>
							</div>
							<div className="flex border-2 p-2 items-center justify-center w-4/6">
								<h3 className="flex mr-auto">Status</h3>
								<label className="text-gray-900 px-3">
									No Disponible{' '}
									<input
										type="radio"
										name="status"
										checked={forms.status === false}
										onChange={() =>
											onChange({
												target: {
													name: 'status',
													value: false,
												},
											})
										}
									/>{' '}
								</label>

								<label className="text-gray-900 px-3">
									Disponible{' '}
									<input
										type="radio"
										name="status"
										checked={forms.status === true}
										onChange={() =>
											onChange({
												target: {
													name: 'status',
													value: true,
												},
											})
										}
									/>{' '}
								</label>
							</div>
							<div className="flex border-2 p-2 items-center justify-around w-4/6">
								<h3 className="">CPR</h3>
								<label className="text-gray-900 px-3">
									No{' '}
									<input
										type="radio"
										name="cpr"
										checked={forms.cpr === false}
										onChange={() =>
											onChange({
												target: {
													name: 'cpr',
													value: false,
												},
											})
										}
									/>{' '}
								</label>

								<label className="text-gray-900 px-3">
									Si{' '}
									<input
										type="radio"
										name="cpr"
										checked={forms.cpr === true}
										onChange={() =>
											onChange({
												target: {
													name: 'cpr',
													value: true,
												},
											})
										}
									/>{' '}
								</label>
							</div>
							<div className="flex border-2 p-2 items-center justify-around w-5/6">
								<h3 className="">Tamaño perro</h3>
								<label className="text-gray-900 px-3">
									Pequeño{' '}
									<input
										type="radio"
										name="size"
										checked={forms.size === 'SMALL'}
										onChange={() =>
											onChange({
												target: {
													name: 'size',
													value: 'SMALL',
												},
											})
										}
									/>{' '}
								</label>
								<label className="text-gray-900 px-3">
									Mediano{' '}
									<input
										type="radio"
										name="size"
										checked={forms.size === 'MEDIUM'}
										onChange={() =>
											onChange({
												target: {
													name: 'size',
													value: 'MEDIUM',
												},
											})
										}
									/>{' '}
								</label>
								<label className="text-gray-900 px-3">
									Grande{' '}
									<input
										type="radio"
										name="size"
										checked={forms.size === 'LARGE'}
										onChange={() =>
											onChange({
												target: {
													name: 'size',
													value: 'LARGE',
												},
											})
										}
									/>{' '}
								</label>
								<label className="text-gray-900 px-3">
									Gigante{' '}
									<input
										type="radio"
										name="size"
										checked={forms.size === 'GIANT'}
										onChange={() =>
											onChange({
												target: {
													name: 'size',
													value: 'GIANT',
												},
											})
										}
									/>{' '}
								</label>
							</div>
						</>
					) : null}
					<ImageUpload
						imageUrl={imageUrl}
						setImageUrl={setImageUrl}
					/>
				</div>
			</div>
			{edit ? (
				<button
					className="rounded-md bg-red-500 p-2 text-white mb-2"
					onClick={() => setEdit(!edit)}
				>
					cancel
				</button>
			) : (
				<h1 className="font-bold">Edit</h1>
			)}
		</>
	);
}

export default EditForm;
