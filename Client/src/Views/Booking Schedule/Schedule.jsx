import dayjs from 'dayjs';
import 'dayjs/locale/es';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setWalk } from '../../Redux/actions';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

dayjs.locale('es');

const Schedule = () => {
	const dispatch = useDispatch();
	const { walk, currentUser } = useSelector((state) => ({
		walk: state.walk,
		currentUser: state.currentUser,
	}));
	const [hoursArray, setHoursArray] = useState([]);

	const minDate = dayjs().add(1, 'day');
	const maxDate = dayjs().endOf('year');

	const [dateSelected, setDateSelected] = useState(minDate);
	const [timeSelected, setTimeSelected] = useState('');
	// const [book, setBook] = useState(false);

	const handleChanges = () => {
		if (timeSelected === '') return alert('Seleccione un horario');

		dispatch(
			setWalk({
				...walk,
				startDate: dateSelected.format('YYYY-MM-DD'),
				time: timeSelected,
			})
		);
		alert(
			`Fecha y hora seleccionada: ${dateSelected.format(
				'LL'
			)}, ${timeSelected}`
		);
	};

	const selectHandleChange = (event) => {
		setTimeSelected(event.target.value);
	};

	console.log(currentUser.schedule);

	useEffect(() => {
		let array = [];

		switch (currentUser.schedule) {
			case '6am-11am':
				array = [6, 7, 8, 9, 10];
				break;
			case '11am-3pm':
				array = [11, 12, 13, 14];
				break;
			case '3pm-10pm':
				array = [15, 16, 17, 18, 19, 20, 21];
				break;
			default:
				array = [
					6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
				];
		}

		setHoursArray(array);
	}, [currentUser.schedule]);

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
						minDate={minDate}
						maxDate={maxDate}
						value={dateSelected}
						onChange={(newDate) => setDateSelected(newDate)}
						renderInput={(params) => <TextField {...params} />}
					/>
					<FormControl variant="outlined" sx={{ width: 250 }}>
						<InputLabel id="demo-simple-select-label">
							Selecciona el horario
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={timeSelected}
							onChange={selectHandleChange}
							label="Selecciona el horario"
						>
							{hoursArray.map((hour) => (
								<MenuItem
									key={hour}
									value={`${hour <= 12 ? hour : hour - 12} ${
										hour <= 12 ? 'AM' : 'PM'
									} - ${hour < 12 ? hour + 1 : hour - 11} ${
										hour < 12 ? 'AM' : 'PM'
									}`}
								>
									{hour <= 12 ? hour : hour - 12}{' '}
									{hour <= 12 ? 'AM' : 'PM'} -{' '}
									{hour < 12 ? hour + 1 : hour - 11}{' '}
									{hour < 12 ? 'AM' : 'PM'}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Stack>
			</LocalizationProvider>
			<Stack spacing={1} direction={'row'} sx={{ marginTop: 1 }}>
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
