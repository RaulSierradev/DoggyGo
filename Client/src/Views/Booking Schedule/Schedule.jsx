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

dayjs.locale('es');

const Schedule = () => {
	const [dateTimeSelected, setDateTimeSelected] = useState(dayjs());
	// const [book, setBook] = useState(false);

	const handleDateTimeChange = (newDate, newTime) => {
		const combinedDateTime = newDate
			.set('hour', newTime.hour())
			.set('minute', newTime.minute());
		setDateTimeSelected(combinedDateTime);
	};

	const maxDate = dayjs().endOf('year');
	const minTime = dayjs().isSame(dateTimeSelected, 'day') ? dayjs() : null;

	console.log(dateTimeSelected.format('LLL'));

	return (
		<div className="flex flex-col items-center">
			<label className="my-2 font-bold">CREAR AGENDAMIENTO</label>
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
			<Stack spacing={1} direction={'row'}>
				{/* <Button variant="outlined">Atras</Button> */}
				<div className="mt-5">
					<Button
						onClick={() =>
							alert(
								'Fecha y hora seleccionada: ' +
									dateTimeSelected.format('LLL')
							)
						}
						variant="contained"
					>
						Confirm
					</Button>
				</div>
			</Stack>
		</div>
	);
};

export default Schedule;
