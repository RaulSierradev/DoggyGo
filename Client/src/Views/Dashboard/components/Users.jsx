import { userRows } from '../data';
import DataTable from './DataTable';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'avatar',
		headerName: 'Avatar',
		width: 100,
		renderCell: (params) => (
			<img
				src={params.row.img || '/noavatar.png'}
				alt="avatar"
				className="w-10 h-10 object-cover rounded-full"
			/>
		),
	},
	{
		field: 'firstName',
		headerName: 'First name',
		width: 150,
		editable: true,
	},
	{
		field: 'lastName',
		headerName: 'Last name',
		width: 150,
		editable: true,
	},
	{
		field: 'age',
		headerName: 'Age',
		type: 'number',
		width: 110,
		editable: true,
	},
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: 160,
		valueGetter: (params) =>
			`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
	{
		field: 'status',
		headerName: 'Status',
		width: 100,
		type: 'boolean',
	},
];

const Users = () => {
	return (
		<div className="users">
			<div className="flex items-center gap-5 mb-5">
				<h1 className="font-bold text-4xl">History</h1>
			</div>
			<DataTable slug="users" columns={columns} rows={userRows} />
		</div>
	);
};

export default Users;
