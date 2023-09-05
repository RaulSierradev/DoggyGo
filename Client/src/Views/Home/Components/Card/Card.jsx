/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import AlertDialog from './AlertDialog';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';

const Card = ({ walker }) => {
	const [showDialog, setShowDialog] = useState(false);

	const token = Cookies.get('auth') ? Cookies.get('auth') : null;
	const decoded = token ? jwt_decode(token) : null;
	const userRole = decoded ? decoded.rol : '';
	const { id, name, image, description, country, state, city, status, ratingAvg } =
		walker;
	const showAlert = () => {
		// e.preventDefault();
		if (userRole !== 'Client') {
			setShowDialog(true); // Toggle the state to show the dialog
		}
	};

	const handleClose = () => {
		setShowDialog(false); // Toggle the state to hide the dialog
	};

	//! Hacer el link cuando lo hayan terminado
	return (
		<div className="w-full">
			{/*<Link to={`/detail/${id}`}></Link>*/}
			<div className="flex flex-row justify-around items-center pt-2 mt-4 leading-normal space-x-4 border-y-4">
				<div className="basis-11 text-sm text-gray-600 pr-2">
					{status ? 'Disponible' : 'No disponible'}
				</div>
				<img
					className="basis-11 h-16 w-16 rounded-full"
					src={image}
					alt="url"
				/>
				<p className="basis-11 pr-2 text-gray-900 font-bold text-xl mb-2">
					{name}
				</p>
				<p className="basis-40 pr-2 text-gray-700 text-base">
					{description}
				</p>
				<p className="basis-6 text-gray-900 leading-none">{country}</p>
				<p className="basis-6 text-gray-900 leading-none">{state}</p>
				<p className="basis-6 pl-2 text-gray-900 leading-none">
					{city}
				</p>
				<p className="basis-6 pl-2 text-gray-900 leading-none">
					{ratingAvg}
				</p>
				<NavLink
					className={'rounded-md text-white bg-green-500 p-2'}
					onClick={userRole !== 'Client' ? showAlert : undefined}
					to={userRole === 'Client' ? `detail/${id}` : '/home'}
				>
					Ver Perfil
				</NavLink>
				{showDialog && ( // Conditionally rendering AlertDialog
					<div className="fixed bg-transparent z-[100] flex items-center justify-center h-full w-full">
						<AlertDialog onClose={handleClose} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
