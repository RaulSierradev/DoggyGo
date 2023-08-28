import { Button } from '@mui/material';
import { useState } from 'react';

function ImageUpload({ imageUrl, setImageUrl }) {
	const [image, setImage] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState(''); // save the image url
	// const [imageUrl, setImageUrl] = useState(''); // save the image url

	async function uploadImage() {
		if (!image) return alert('Please choose a valid image');
		const formData = new FormData();
		formData.append('file', image);
		formData.append('upload_preset', 'zihghzim');

		try {
			setLoading(true);
			const res = await fetch(
				'https://api.cloudinary.com/v1_1/dmohefijy/image/upload',
				{ method: 'POST', body: formData }
			);
			const data = await res.json();
			console.log(data);
			// console.log(data.secure_url);
			setImageUrl(data.secure_url);
			setLoading(false);
			setMessage('Image uploaded successfully');
		} catch (error) {
			console.log(error.message);
			alert(error.message);
		}
	}
	return (
		<div className="flex flex-col gap-8 items-center">
			<input
				className="p-2 border-2 border-gray-400 rounded-md"
				type="file"
				onChange={(e) => setImage(e.target.files[0])}
			/>
			{loading ? <p>Loading...</p> : <p>{message}</p>}
			<Button onClick={uploadImage} className="" variant="contained">
				Upload
			</Button>
		</div>
	);
}

export default ImageUpload;
