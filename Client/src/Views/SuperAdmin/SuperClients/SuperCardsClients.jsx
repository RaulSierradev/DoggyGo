import { Link } from 'react-router-dom';
import { useState } from 'react';
import SuperPaginadoAdmin from '../SuperPaginadoAdmin';

const SuperCardsClients = (props) => {
	const { clients } = props;
	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 6;

	const totalCards = clients.length;

	const lastIndex = currentPage * cardsPerPage;
	const firstIndex = lastIndex - cardsPerPage;
	return (
		<div className="mt-16">
			<table className="m-10 text-center">
				<tr className="p-10">
					<td className="font-bold text-xl text-amber-800">Nombre</td>
					<td className="font-bold text-xl text-amber-800">Correo</td>
					<td className="font-bold text-xl text-amber-800">
						Telefono
					</td>
					<td className="font-bold text-xl text-amber-800">Estado</td>
				</tr>
				{clients
					?.map((e, index) => {
						return (
							<tr key={index}>
								<td className="px-8 py-3">{e.name}</td>
								<td className="px-8">{e.email}</td>
								<td className="px-8">{e.phone}</td>
								<td className="px-8">{e.country}</td>
								<td className="px-10">
									<Link
										className="bg-green-600 p-2 text-sm text-white font-semibold rounded-lg hover:bg-green-500"
										to={`/sadmin/detail/${e.id}`}
									>
										Ver perfil
									</Link>
								</td>
							</tr>
						);
					})
					.slice(firstIndex, lastIndex)}
			</table>
			<SuperPaginadoAdmin
				cardsPerPage={cardsPerPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalCards={totalCards}
			/>
		</div>
	);
};

export default SuperCardsClients;
