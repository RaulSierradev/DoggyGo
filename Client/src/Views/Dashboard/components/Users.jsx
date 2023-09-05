import { useSelector } from 'react-redux';
import { userRows } from '../data';
import DataTable from './DataTable';
import idFromToken from '../../utils/getToken';

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
	const allWalks = useSelector((state) => state.walks);
	const walks = allWalks.filter((walk) => walk.WalkerId === id);

	return (
		<div className="users">
			<div className="flex items-center gap-5 mb-5">
				<h1 className="font-bold text-4xl">History</h1>
			</div>
			<DataTable slug="users" columns={columns} rows={walks} />
		</div>
	);
};

export default Users;
