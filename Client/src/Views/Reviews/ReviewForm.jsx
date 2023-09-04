import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import StarRating from './StartRating';
import axios from 'axios';

export default function ReviewForm({walkerId, clientId}) {

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
        console.log("clientId: ", clientId);
        console.log("walkerId: ", walkerId);
        try {
            const response = await axios.post(`http://localhost:3001/review/${walkerId}`, {
                rating: rating,
                comment: comment,
                clientId: clientId
            });
            console.log(response);
      
            console.log('Reseña guardada:', response.data);
            
            //reset a los estados
            setRating(0);
            setComment('');

            // console.log('Calificación:', rating);
            // console.log('Comentario:', comment);
          } catch (error) {
            console.error('Error al guardar la reseña:', error.response.data.error);
            alert(error.response.data.error);
           
          }
    };

    



    return(
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <h2 className="font-bold text-lg">Write a customer review</h2>
            </div>
            <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating:</label>
                <StarRating onRatingChange={handleRatingChange} size={35}/>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your review:</label>
                <textarea value={comment} onChange={handleCommentChange} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your review here..."></textarea>
            </div>
            <div>
                <label />
                <button className="rounded-md mt-2 text-white bg-green-500 p-2" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}
