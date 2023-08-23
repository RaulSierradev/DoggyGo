function Orders({ name = '', email, amount, time }) {
	return (
		<>
			<div
				className={`flex-col justify-center text-black items-center basis-1/2 py-2 shadow-sm rounded-sm ${
					!amount && 'hover:bg-slate-100 rounded-xl'
				}`}
			>
				<div className="flex justify-center item">
					<div className="ml-4 space-y-1">
						<p className="text-sm font-medium leading-none">
							{name}
						</p>
						<p className="text-sm text-muted-foreground">
							{email ? email : time}
						</p>
					</div>
					{amount ? (
						<div className="ml-auto font-medium">+${amount}</div>
					) : (
						<div className="ml-auto font-medium">
							<button className="mr-5 shadow-md rounded-sm hover:scale-125">
								✅
							</button>
							<button className="mr-5 shadow-md rounded-sm hover:scale-125">
								🚫
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Orders;
