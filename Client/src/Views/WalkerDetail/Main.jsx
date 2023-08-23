import { useSelector } from 'react-redux';
import StarRating from '../Reviews/StartRating';

function Main() {
	const email = 'test3@gmail.com';

	const users = useSelector((state) => state.users);
	console.log(users);
	const userProfile = users.filter((user) => user.email === email)[0];
	console.log(userProfile);

	return (
		<div className="mt-5 flex items-center gap-10 justify-center bg-slate-400 h-96 p-20">
			<div className="border-md shadow-sm w-1/2">
				<img className="w-10 h-10 rounded-lg" src="" alt="shit" />
				<StarRating size={20} />
				<h3>{userProfile.description}</h3>

				<button>Book {userProfile.name}</button>
			</div>
			<div className="gap-5 flex-col ml-5 bg-slate-100 w-1/2">
				<h1 className="font-bold text-lg capitalize">
					{userProfile.name}
				</h1>
				<h2>{userProfile.email}</h2>
				<p className="text-sm text-slate-300">{userProfile.phone}</p>
				<p className="text-sm text-slate-300">
					{userProfile.country}, {userProfile.city}
				</p>
				<div className="mt-5 ">
					<h3>Reviews</h3>
					<div className="rounded-sm bg-white w-full">
						<p>Good</p>
					</div>
					<p>Good</p>
					<p>Good</p>
					<p>Good</p>
				</div>
			</div>
		</div>
	);
}

export default Main;
