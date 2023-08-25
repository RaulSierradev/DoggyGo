import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Summary({ details }) {
	return (
		<div className="w-3/6 h-16 px-4 py-1 bg-white rounded border border-slate-300 justify-start items-center gap-2 inline-flex">
			<div className="w-10 h-10 relative">
				<img
					className="w-10 h-10 left-0 top-0 absolute rounded-full"
					src={details.image}
				/>
			</div>
			<div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-1 inline-flex">
				<div className="self-stretch justify-start items-start gap-8 inline-flex">
					<div className="grow shrink basis-0 text-slate-800 text-base font-normal">
						<CalendarTodayIcon />
						Thu, 24 Aug
					</div>
					<div className="grow shrink basis-0 text-slate-800 text-base font-normal">
						3:15PM - 4:15PM
					</div>
					<div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal">
						1 hour
					</div>
					<div className="grow shrink basis-0 text-right text-slate-800 text-base font-normal">
						$20
					</div>
				</div>
			</div>
		</div>
	);
}

export default Summary;
