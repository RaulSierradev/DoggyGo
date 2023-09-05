import Cookies from 'js-cookie';
import Single from './Single';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { getAll } from '../../../Redux/actions';

const dummyData = [
	{
		id: 1,
		name: 'Hubbard',
		image: 'https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		email: 'kewez@@gmail.com',
		birthdate: '1999-01-01',
		phone: '123456789',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
	},
];

const User = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		try {
			dispatch(getAll());
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	// get email from cookies
	const token = Cookies.get('auth'); // {"email":"test","password":"test"}
	const decoded = jwt_decode(token);
	const id = decoded.id;

	// fetch data from store and pass it to single component
	const users = useSelector((state) => state.users);
	const userProfile = users.filter((user) => user.id === id)[0];
	console.log(userProfile);
	// console.log(users);
	return (
		<div className="user">
			<h1 className="font-bold text-4xl mb-5">Profile</h1>
			{dummyData.map((data) => (
				<Single key={data.id} {...userProfile} />
			))}
		</div>
	);
};

export default User;
