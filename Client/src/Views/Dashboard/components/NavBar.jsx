const Navbar = () => {
	return (
		<div className="w-full p-5 flex items-center justify-between">
			<div className="flex items-center font-bold gap-3">
				<img src="logo.svg" alt="" />
				<span>Dashboard</span>
			</div>
			<div className="flex items-center gap-5">
				<div className="flex items-center">
					<img
						src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
						alt=""
						className="w-6 h-6 rounded-full object-cover"
					/>
					<span>John</span>
				</div>
				<img src="/settings.svg" alt="" className="icon" />
			</div>
		</div>
	);
};

export default Navbar;
