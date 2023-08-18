import { Button } from '@mui/material';
import { useState } from 'react';

function ImageUpload() {
	const [image, setImage] = useState('');
	const [imageUrl, setImageUrl] = useState(''); // save the image url

	async function uploadImage() {
		const formData = new FormData();
		formData.append('file', image);
		formData.append('upload_preset', 'zihghzim');

		try {
			const res = await fetch(
				'https://api.cloudinary.com/v1_1/dmohefijy/image/upload',
				{ method: 'POST', body: formData }
			);
			const data = await res.json();
			console.log(data);
			// console.log(data.secure_url);
			setImageUrl(data.secure_url);
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
			<Button onClick={uploadImage} className="" variant="contained">
				Upload
			</Button>
			<img
				src={imageUrl}
				alt=""
				size="small"
				className=" mr-5 rounded-full h-14 w-14 object-cover"
			/>
		</div>
	);
}

export default ImageUpload;
