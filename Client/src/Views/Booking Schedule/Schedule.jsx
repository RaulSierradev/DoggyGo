import dayjs from 'dayjs';
import 'dayjs/locale/es';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { TimePicker } from '@mui/x-date-pickers';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setWalk } from '../../Redux/actions';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

dayjs.locale('es');

const Schedule = () => {
	const dispatch = useDispatch();
	const walk = useSelector((state) => state.walk);
	console.log(walk);

	const [dateTimeSelected, setDateTimeSelected] = useState(dayjs());
	// const [book, setBook] = useState(false);

	const handleDateTimeChange = (newDate, newTime) => {
		const combinedDateTime = newDate
			.set('hour', newTime.hour())
			.set('minute', newTime.minute());
		setDateTimeSelected(combinedDateTime);
	};

	const handleChanges = () => {
		dispatch(
			setWalk({
				...walk,
				dateTimeSelected: dateTimeSelected.format('LLL'),
			})
		);
		alert(`Fecha y hora seleccionada: ${dateTimeSelected.format('LLL')}`);
	};

	const maxDate = dayjs().endOf('year');
	const minTime = dayjs().isSame(dateTimeSelected, 'day') ? dayjs() : null;

	console.log(dateTimeSelected.format('LLL'));

	return (
		<div className="flex flex-col items-center">
      <div className="text-indigo-500 text-2xl font-bold">
				En que momento le gustaria?
			</div>
			<label className="my-3 text-slate-500 text-2xl font-bold">
        Selecciona la Fecha y Hora 
        <EditCalendarIcon />
      </label>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Stack spacing={3} direction={'row'}>
					<DatePicker
						label="Selecciona la fecha"
						openTo="day"
						views={['year', 'month', 'day']}
						minDate={dayjs()}
						maxDate={maxDate}
						value={dateTimeSelected}
						onChange={(newDate) =>
							handleDateTimeChange(newDate, dateTimeSelected)
						}
						renderInput={(params) => <TextField {...params} />}
					/>
					<TimePicker
						label="Selecciona la hora"
						minTime={minTime}
						minutesStep={10}
						orientation="portrait"
						value={dateTimeSelected}
						onChange={(newTime) =>
							handleDateTimeChange(dateTimeSelected, newTime)
						}
						renderInput={(params) => <TextField {...params} />}
					/>
				</Stack>
			</LocalizationProvider>
			<Stack spacing={1} direction={'row'} sx={{marginTop: 1}}>
				{/* <Button variant="outlined">Atras</Button> */}
				<div className="mt-5">
					<Button onClick={handleChanges} variant="contained">
						Confirm
					</Button>
				</div>
			</Stack>
		</div>
	);
};

export default Schedule;
