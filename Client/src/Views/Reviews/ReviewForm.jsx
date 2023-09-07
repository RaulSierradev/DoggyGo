import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import StarRating from './StartRating';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ReviewForm({ walkerId, clientId }) {
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');

	const handleRatingChange = (newRating) => {
		setRating(newRating);
	};

	const handleCommentChange = (event) => {
		setComment(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('clientId: ', clientId);
		console.log('walkerId: ', walkerId);
		try {
			const response = await axios.post(`/review/${walkerId}`, {
				rating: rating,
				comment: comment,
				clientId: clientId,
			});
			console.log(response);

			console.log('Reseña guardada:', response.data);

			//reset a los estados
			setRating(0);
			setComment('');

			// console.log('Calificación:', rating);
			// console.log('Comentario:', comment);
		} catch (error) {
			console.error(
				'Error al guardar la reseña:',
				error.response.data.error
			);
			Swal.fire(error.response.data.error);
		}
	};

	return (
		<form className="form h-full" onSubmit={handleSubmit}>
			<div>
				<h2 className="font-bold text-lg mb-2">Escribe una reseña</h2>
			</div>
			<div className="flex h-5/6">
				<div className="">
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							calificacion:
						</label>
						<StarRating
							onRatingChange={handleRatingChange}
							size={35}
						/>
					</div>
					<div>
						<button
							className="rounded-md mt-2 text-white bg-green-500 p-2"
							type="submit"
						>
							Enviar
						</button>
					</div>
				</div>
				<div className="ml-5 h-full w-full">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Comentario:
					</label>
					<textarea
						value={comment}
						onChange={handleCommentChange}
						className=" block p-2.5 h-[75%] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Write your review here..."
					></textarea>
				</div>
			</div>
		</form>
	);
}
