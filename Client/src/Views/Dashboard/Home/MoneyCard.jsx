function MoneyCard({
	totalMoney = '0',
	type = 'Total Amount',
	message = 'Money Available',
}) {
	return (
		<>
			<div className="w-96 h-40 relative shadow-sm border-zinc-700">
				<div className="w-96 h-40 left-[-18px] top-0 absolute">
					<div className="w-96 h-40 left-[18px] top-0 absolute justify-center items-center inline-flex">
						<div className="w-96 h-40 bg-white rounded-lg" />
					</div>
				</div>
				<div className="left-[30px] top-[76px] absolute text-black text-xl font-normal">
					{type}
				</div>
				<div className="left-[30px] top-[106px] absolute opacity-40 text-black text-sm font-normal leading-tight">
					{message}
				</div>
				<div className="left-[30px] top-[20px] absolute text-black text-4xl font-medium">
					{totalMoney}
				</div>
			</div>
		</>
	);
}

export default MoneyCard;
