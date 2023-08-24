import Button from '@mui/material/Button';
import UserInfo from './UserInfo';
import { useState } from 'react';
import EditForm from './EditForm';

const Single = (props) => {
	console.log(props);
	const [edit, setEdit] = useState(false);

	function handleEdit() {
		setEdit(!edit);
	}

	return (
		<div className="h-[80vh] bg-slate-50  text-black rounded-3xl flex ">
			<div>
				<img
					src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
					alt=""
					className="h-full object-cover rounded-3xl"
				/>
			</div>
			<div className="mr-5 flex-1">
				<div className="flex items-center justify-center flex-col gap-2 mt-5">
					<div className="flex items-center gap-5 space-x-5">
						<img
							src={props.image}
							alt=""
							className="w-24 h-24 rounded-full object-cover"
						/>
						<h1 className="font-bold">{props.name}</h1>
						{edit ? (
							''
						) : (
							<Button onClick={handleEdit} variant="contained">
								Edit
							</Button>
						)}
					</div>
					{edit ? (
						<EditForm setEdit={setEdit} edit={edit} />
					) : (
						<UserInfo props={props} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Single;
