function UserInfo({ props }) {
	return (
		<>
			<div className="text-lg w-1/3">
				<div className="my-7">
					<div className="text-sm text-gray-500 font-light">
						Username
					</div>
					<div className="border-solid border-2 border-gray-400 rounded-md mb-3 font-semibold p-1">
						{props.name}
					</div>

					<div className="text-sm text-gray-500 font-light">
						Email
					</div>
					<div className="border-solid border-2 border-gray-400 rounded-md mb-3 font-semibold p-1">
						{props.email}
					</div>

					<div className="text-sm text-gray-500 font-light">
						Birth Date
					</div>
					<div className="border-solid border-2 border-gray-400 rounded-md mb-3 font-semibold p-1">
						{props.birthdate}
					</div>
					<div className="text-sm text-gray-500 font-light">
						Phone
					</div>
					<div className="border-solid border-2 border-gray-400 rounded-md mb-3 font-semibold p-1">
						{props.phone}
					</div>
				</div>
			</div>
			<div className="text-sm text-gray-500 font-light">Description</div>
			<div className="itemValue">{props.description}</div>
		</>
	);
}

export default UserInfo;
