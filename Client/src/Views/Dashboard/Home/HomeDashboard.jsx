import MoneyCard from './MoneyCard';
import Orders from './Orders';
// import Nav from '../../Nav';

function HomeDashboard() {
	return (
		<div>
			{/* <Nav /> */}

			<div className="px-10 py-10 h-screen gap-4 ">
				<div className="bg-amber-400 rounded-lg h-full">
					<div className="flex justify-start py-4 px-4">
						<h2 className="text-black text-3xl font-medium mb-2">
							Bienvenido
						</h2>
					</div>
					<div className="flex  justify-evenly py-2 rounded-lg">
						<MoneyCard totalMoney={'$200'} />
						<MoneyCard
							totalMoney={25}
							type="Walks Completed"
							message="You walk 25 dogs!"
						/>
					</div>
					<div className="flex mt-8 flex-1 gap-4">
						<div className="basis-1/2 ml-5 bg-white rounded-xl py-2 px-2 shadow-lg">
							<h2 className=" text-black text-3xl font-medium mb-3">
								Peticiones Recientes
							</h2>
							<Orders name="request" time={'25 december 18:00'} />
							<Orders name="request" time={'25 december 18:00'} />
							<Orders name="request" time={'25 december 18:00'} />
						</div>
						<div className="basis-1/2 flex-col rounded-lg bg-white py-2 px-2 mr-5 shadow-lg">
							<h2 className=" text-black text-3xl font-medium mb-3">
								Paseos Recientes
							</h2>
							<Orders
								name="test"
								email="test@gmail.com"
								amount={'19'}
							/>
							<Orders
								name="test"
								email="test@gmail.com"
								amount={'19'}
							/>
							<Orders
								name="test"
								email="test@gmail.com"
								amount={'19'}
							/>
							<Orders
								name="test"
								email="test@gmail.com"
								amount={'19'}
							/>
							<Orders
								name="test"
								email="test@gmail.com"
								amount={'19'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeDashboard;
