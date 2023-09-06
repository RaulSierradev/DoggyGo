import { useDispatch, useSelector } from 'react-redux';
import MoneyCard from './MoneyCard';
import Orders from './Orders';
import idFromToken from '../../utils/getToken';
import { useEffect, useState } from 'react';
import { getAllDogs, getById } from '../../../Redux/actions';
import Dogs from '../components/Dogs';

function HomeDashboard() {
	const [user, setUser] = useState({});

	const dispatch = useDispatch();
	const id = idFromToken();
	console.log(id);

	useEffect(() => {
		dispatch(getById(id)).then((res) => setUser(res.payload));
		dispatch(getAllDogs());
	}, []);

	const dogs = useSelector((state) =>
		state.dogs.filter((dog) => dog.ownerID === id)
	);
	console.log(dogs);

	// const user = useSelector((state) => state.users);
	// console.log(user);
	// const userProfile = user.filter((user) => user.id === id)[0];
	// console.log(userProfile);

	const allWalks = useSelector((state) => state.walks);
	console.log(allWalks);

	// grab only walks that are for the current user
	const walks = allWalks.filter((walk) => walk.WalkerId === id);

	console.log(user);

	// ! missing the conecction with the back end to get the data
	const total = walks
		.map((walk) => Number(walk.cost))
		.reduce((a, b) => a + b, 0);
	return (
		<div>
			{/* <Nav /> */}

			<div className="px-10 py-10 h-screen gap-4 ">
				<div className=" rounded-lg h-full">
					<div className="flex justify-start py-4 px-4">
						<h2 className="text-white text-3xl font-medium mb-2">
							Bienvenido
						</h2>
					</div>
					{user.rol === 'Walker' ? (
						<>
							<div className="flex  justify-evenly py-2 rounded-lg">
								<MoneyCard totalMoney={`$ ${total}`} />
								<MoneyCard
									totalMoney={walks.length}
									type="Paseos Agendados"
									message={`Tienes ${walks.length} perros por pasear!`}
								/>
							</div>
							<div className="flex mt-8 flex-1 gap-4 items-center justify-center">
								<div className="basis-1/2 ml-5 bg-white rounded-xl py-2 px-2 shadow-lg">
									<h2 className=" text-black text-3xl font-medium mb-3">
										Paseos Recientes
									</h2>
									{walks.map((walk) => (
										<Orders
											key={walk.id}
											name={walk.startDate}
											time={walk.time}
											amount={walk.cost}
										/>
									))}
								</div>
							</div>
						</>
					) : (
						<Dogs dogs={dogs} />
					)}
				</div>
			</div>
		</div>
	);
}

export default HomeDashboard;
