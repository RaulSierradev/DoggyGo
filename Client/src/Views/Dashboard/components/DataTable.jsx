import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const DataTable = (props) => {
	console.log(props.rows);
	// const actionCol = {
	// 	field: 'actions',
	// 	headerName: 'Actions',
	// 	width: 100,
	// 	renderCell: (params) => (
	// 		<div className="flex gap-4">
	// 			<Link to={`/dash/${props.slug}/${params.row.id}`}>
	// 				<img
	// 					className='h-5 w-5 cursor-pointer"'
	// 					src="/view.svg"
	// 					alt=""
	// 				/>
	// 			</Link>
	// 		</div>
	// 	),
	// };

	return (
		<div className="dataTable">
			<DataGrid
				className="bg-slate-50 p-5"
				rows={props.rows}
				columns={props.columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 10,
						},
					},
				}}
				pageSizeOptions={[6]}
				checkboxSelection
				// disable some options the options
				disableRowSelectionOnClick
				disableColumnFilter
				disableDensitySelector
				disableColumnSelector
				// add search bar and time to search
				slots={{ toolbar: GridToolbar }}
				slotProps={{
					toolbar: {
						showQuickFilter: true,
						quickFilterProps: {
							placeholder: 'Search...',
							debounceMs: 500,
						},
						style: { flexDirection: 'row-reverse' },
					},
				}}
			/>
		</div>
	);
};

export default DataTable;
