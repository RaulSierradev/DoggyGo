const Single = (props) => {
	props = props[0];

	return (
		<div className="h-[60vh]">
			<div className="view">
				<div className="info">
					<div className="flex items-center gap-5">
						<img
							src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="w-24 h-24 rounded-full object-cover"
						/>
						<h1 className="font-medium">{props.firstName}</h1>
					</div>
					<div className="text-lg">
						<div className="my-7">
							<div className="font-semibold mr-3 capitalize">
								Username:
							</div>
							<div className="itemValue">{props.firstName}</div>

							<div className="font-semibold mr-3 capitalize">
								Email:
							</div>
							<div className="itemValue">{props.email}</div>

							<div className="font-semibold mr-3 capitalize">
								Verified:
							</div>
							<div className="itemValue">{props.verified}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Single;
