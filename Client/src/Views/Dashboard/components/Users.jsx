import { useDispatch, useSelector } from 'react-redux';
import { userRows } from '../data';
import DataTable from './DataTable';
import idFromToken from '../../utils/getToken';
import { useEffect, useState } from 'react';
import { getAll, getAllUsers, getById } from '../../../Redux/actions';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'avatar',
		headerName: 'Avatar',
		width: 100,
		renderCell: (params) => (
			<img
				src={params.row.img || '/noavatar.jpg'}
				alt="avatar"
				className="w-10 h-10 object-cover rounded-full"
			/>
		),
	},
	{
		field: 'startDate',
		headerName: 'Fecha de inicio',
		width: 150,
		editable: true,
	},
	{
		field: 'time',
		headerName: 'Hora',
		width: 150,
		editable: true,
	},
	{
		field: 'duration',
		headerName: 'Duración',
		width: 150,
		editable: true,
	},
	{
		field: 'cost',
		headerName: 'Ingreso',
		width: 150,
		editable: true,
	},
	// {
	// 	field: 'fullName',
	// 	headerName: 'Full name',
	// 	description: 'This column has a value getter and is not sortable.',
	// 	sortable: false,
	// 	width: 160,
	// 	valueGetter: (params) =>
	// 		`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	// },
	{
		field: 'status',
		headerName: 'Status',
		width: 100,
		type: 'boolean',
	},
];

const Users = () => {
	const id = idFromToken();
	console.log(id);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(getAllUsers()).then(() => setLoading(false));
	}, []);

	// get all the users
	const allUsers = useSelector((state) => state.users);
	// console.log(allUsers);

	// get the current user based on token id
	const userProfile = allUsers.filter((user) => user.id === id)[0];
	// console.log(userProfile);

	// change all walks to walks made by the user
	const allWalks = useSelector((state) => state.walks);

	// this are the walks for the walker
	const walks = allWalks.filter((walk) => walk.WalkerId === id);

	// this are the walks for the client
	const clientWalks = allWalks.filter((walk) => walk.ClientId === id);

	return (
		<div className="users">
			<div className="flex items-center gap-5 mb-5">
				<h1 className="font-bold text-4xl">Paseos</h1>
			</div>
			{userProfile?.rol === 'Walker' ? (
				<DataTable slug="users" columns={columns} rows={walks} />
			) : (
				<DataTable slug="users" columns={columns} rows={clientWalks} />
			)}
		</div>
	);
};

export default Users;
