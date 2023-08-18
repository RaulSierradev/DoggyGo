import Single from './Single';

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
	// fetch data and pass it to single component
	return (
		<div className="user">
			<h1 className="font-bold text-4xl mb-5">Profile</h1>
			{dummyData.map((data) => (
				<Single key={data.id} {...dummyData} />
			))}
		</div>
	);
};

export default User;
