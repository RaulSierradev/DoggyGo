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
				src={params.row.image || '/noavatar.jpg'}
				alt="avatar"
				className="w-10 h-10 object-cover rounded-full"
			/>
		),
	},
	{
		field: 'name',
		headerName: 'Nombre',
		width: 150,
		editable: true,
	},
	{
		field: 'size',
		headerName: 'Tamaño',
		width: 150,
		editable: true,
	},
	{
		field: 'age',
		headerName: 'Edad',
		width: 150,
		editable: true,
	},
	{
		field: 'breed',
		headerName: 'Raza',
		width: 150,
		editable: true,
	},
	{
		field: 'status',
		headerName: 'Status',
		width: 100,
		type: 'boolean',
	},
];

const Dogs = ({ dogs }) => {
	return (
		<div className="flex items-center justify-center flex-col">
			<div className="flex items-center gap-5 mb-5">
				<h1 className="font-bold">Mis perros</h1>
			</div>
			<DataTable slug="users" columns={columns} rows={dogs} />
		</div>
	);
};

export default Dogs;
