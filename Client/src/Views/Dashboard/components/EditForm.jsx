import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import ImageUpload from './ImageUpload';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { editUser } from '../../../Redux/actions';

const initailState = {
	name: '',
	birthDate: '',
	email: '',
	phone: '',
	description: '',
	image: '',
};

function EditForm({ setEdit }) {
	const dispatch = useDispatch();

	const [forms, setForms] = useState(initailState);
	const [imageUrl, setImageUrl] = useState(''); // save the image url

	const cookiesString = Cookies.get('auth'); // {"email":"test","password":"test"}
	const cookies = JSON.parse(cookiesString);

	function onChange(e) {
		setForms({
			...forms,
			image: imageUrl,
			email: cookies.email,
			[e.target.name]: e.target.value,
		});
	}

	// handle submit confirm button
	function handleSubmit(e) {
		e.preventDefault();
		// send data to server
		try {
			dispatch(editUser(forms));
			setForms(initailState);
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
					<button type="submit">Confirm</button>
				</form>
				<div className="flex-1">
					<ImageUpload
						imageUrl={imageUrl}
						setImageUrl={setImageUrl}
					/>
				</div>
			</div>
			<div className="item-center mt-5">
				{/* <Button type="submit" variant="contained">
					Confirm
				</Button> */}
			</div>
		</>
	);
}

export default EditForm;
