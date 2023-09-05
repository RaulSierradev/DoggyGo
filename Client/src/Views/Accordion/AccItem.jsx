export default function AccItem({
	title,
	text,
	number,
	onActive,
	activeIndex,
}) {
	const active = number === activeIndex;

	function handleToogle() {
		onActive(active ? null : number);
	}

	return (
		<div
			className={`cursor-pointer p-2 grid grid-cols-4 gap-2 ${
				active
					? 'border-t-4 border-b-4 border-green-500'
					: 'border-t-4 border-b-4 border-white'
			} shadow-sm shadow-slate-200`}
			onClick={handleToogle}
		>
			<p
				className={` text-xl col-span-1 font-semibold ml-3 ${
					active ? 'text-green-500' : 'text-gray-400'
				}`}
			>
				0{number + 1}
			</p>
			<p
				className={` text-xl col-span-2 font-semibold ${
					active ? 'text-green-500' : 'text-black'
				}`}
			>
				{title}
			</p>
			<p className={`text-xl col-span-1 font-semibold text-right mr-3`}>
				{active ? '-' : '+'}
			</p>
			{active && (
				<div className="col-span-4 ml-4 mt-4 pb-4 gap-3 ">{text}</div>
			)}
		</div>
	);
}
