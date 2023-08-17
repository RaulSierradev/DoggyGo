import Single from './Single';

const dummyData = [
	{
		id: 1,
		img: 'https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		lastName: 'Hubbard',
		firstName: 'Eula',
		email: 'kewez@@gmail.com',
		phone: '123 456 789',
		createdAt: '01.02.2023',
		verified: true,
	},
];

const User = () => {
	// fetch data and pass it to single component
	return (
		<div className="user">
			<h1 className="font-bold text-4xl mb-5">User</h1>
			{dummyData.map((data) => (
				<Single key={data.id} {...dummyData} />
			))}
		</div>
	);
};

export default User;
