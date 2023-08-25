import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import ImageUpload from './ImageUpload';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { editUser } from '../../../Redux/actions';

function EditForm({ setEdit, edit }) {
	const dispatch = useDispatch();

	const [forms, setForms] = useState({});
	const [imageUrl, setImageUrl] = useState(''); // save the image url

	const cookiesString = Cookies.get('auth'); // {"email":"test","password":"test"}
	const cookies = JSON.parse(cookiesString);

	useEffect(() => {
		setForms((prevDetails) => ({
			...prevDetails,
			image: imageUrl,
		}));
	}, [imageUrl]);

	function onChange(e) {
		setForms({
			...forms,
			email: cookies.email,
			[e.target.name]: e.target.value === '' ? '' : e.target.value,
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
			alert('Edit success');
		} catch (error) {
			console.log(error.message);
			alert(error.message);
		}
	}

	console.log(forms);

	return (
		<>
			{' '}
			{edit ? (
				<button onClick={() => setEdit(!edit)}>cancel</button>
			) : (
				<h1 className="font-bold">Edit</h1>
			)}
			<div className="flex items-center gap-8 w-9/12">
				<form
					className="flex items-center flex-col mt-6 gap-1"
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
				<div className="flex-1">
					<ImageUpload
						imageUrl={imageUrl}
						setImageUrl={setImageUrl}
					/>
				</div>
			</div>
			<div className="item-center mt-5"></div>
		</>
	);
}

export default EditForm;
