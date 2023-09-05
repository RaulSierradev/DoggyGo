import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useSelector } from 'react-redux';

function Summary() {
	const currentUser = useSelector((state) => state.currentUser);
	console.log(currentUser);

	const walk = useSelector((state) => state.walk);

	return (
		<div className="w-5/6 h-16 px-4 py-1 bg-white rounded border border-slate-300 justify-start items-center  inline-flex">
			<div className="w-10 h-10 relative">
				<img
					className="w-10 h-10 left-0 top-0 absolute rounded-full"
					src={currentUser.image}
				/>
			</div>
			<div className="grow shrink basis-0 px-4 py-2 flex-col justify-start items-start  inline-flex">
				<div className="self-stretch justify-around items-center flex">
					<div className=" text-slate-800 text-base font-normal">
						<CalendarTodayIcon />
						<span className="font-bold">{walk.startDate}</span>
						{' / '}
						{walk.time}
					</div>
					<div className="text-center text-slate-800 text-base font-normal">
						{walk.duration}
					</div>
					<div className=" text-center text-slate-800 text-base font-normal">
						${walk.cost}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Summary;
