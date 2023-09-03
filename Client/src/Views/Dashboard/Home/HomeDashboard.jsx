import { useSelector } from 'react-redux';
import MoneyCard from './MoneyCard';
import Orders from './Orders';

// import Nav from '../../Nav';

function HomeDashboard() {
	const walks = useSelector((state) => state.walks);

	console.log(walks);

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
						<h2 className="text-black text-3xl font-medium mb-2">
							Bienvenido
						</h2>
					</div>
					<div className="flex  justify-evenly py-2 rounded-lg">
						<MoneyCard totalMoney={`$ ${total}`} />
						<MoneyCard
							totalMoney={walks.length}
							type="Walks Completed"
							message={`You walk ${walks.length} dogs!`}
						/>
					</div>
					<div className="flex mt-8 flex-1 gap-4 items-center justify-center">
						<div className="basis-1/2 ml-5 bg-white rounded-xl py-2 px-2 shadow-lg">
							<h2 className=" text-black text-3xl font-medium mb-3">
								Paseos Recientes
							</h2>
							{walks.map((walk) => (
								<Orders
									key={walk._id}
									name={walk.startDate}
									time={walk.time}
									amount={walk.cost}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeDashboard;
