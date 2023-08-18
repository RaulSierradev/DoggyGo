import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import ImageUpload from './ImageUpload';

const initailState = {
	name: '',
	email: '',
	birthDate: '',
	phone: '',
	description: '',
	image: '',
};

function EditForm({ setEdit }) {
	const [forms, setForms] = useState(initailState);

	function onChange(e) {
		setForms({ ...forms, [e.target.name]: e.target.value });
	}

	// handle submit confirm button
	function handleSubmit() {
		// send data to server
		setEdit(false);
		setForms(initailState);
	}

	return (
		<>
			<div className="flex items-center gap-8 w-9/12">
				<div className="flex items-center flex-col mt-6 gap-1">
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
						label="Email"
						variant="standard"
						value={forms.email}
						name="email"
						onChange={onChange}
					/>
					<TextField
						id="standard-basic"
						value={forms.birthDate}
						name="birthDate"
						label="Birth Date"
						variant="standard"
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
							rows={2}
							maxRows={4}
							value={forms.description}
							name="description"
							onChange={onChange}
						/>
					</div>
				</div>
				<div className="flex-1">
					<ImageUpload />
				</div>
			</div>
			<div className="item-center mt-5">
				<Button onClick={handleSubmit} variant="contained">
					Confirm
				</Button>
			</div>
		</>
	);
}

export default EditForm;
