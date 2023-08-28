import dayjs from "dayjs";
import "dayjs/locale/es";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
//import { TimePicker } from "@mui/x-date-pickers";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

dayjs.locale('es');

const Schedule = () => {
  const minDate = dayjs().add(1, "day")
  const maxDate = dayjs().endOf("year");

  const [dateTimeSelected, setDateTimeSelected] = useState(minDate);
  const [timeSelected, setTimeSelected] = useState('');
  // const [book, setBook] = useState(false);

  const handleDateTimeChange = (newDate, newTime) => {
    const combinedDateTime = newDate
      .set("hour", newTime.hour())
      .set("minute", newTime.minute());
    setDateTimeSelected(combinedDateTime);
  };

  console.log(dateTimeSelected.format("LLL"));

  const handleChange = (event) => {
    setTimeSelected(event.target.value);
  };

  return (
    <div className='flex flex-col items-center'>
      <label className='my-2 font-bold'>CREAR AGENDAMIENTO</label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} direction={"row"}>
          <DatePicker
            label='Selecciona la fecha'
            openTo='day'
            views={["year", "month", "day"]}
            minDate={minDate}
            maxDate={maxDate}
            value={dateTimeSelected}
            onChange={(newDate) =>
              handleDateTimeChange(newDate, dateTimeSelected)
            }
            renderInput={(params) => <TextField {...params} />}
          />
          <FormControl variant="outlined" sx={{width:250}}>
            <InputLabel id='demo-simple-select-label'>Selecciona el horario</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={timeSelected}
              onChange={handleChange}
              label="Selecciona el horario"
            >
              <MenuItem value="6 - 9 AM">6 - 9 AM</MenuItem>
              <MenuItem value="9 - 12 AM">9 - 12 AM</MenuItem>
              <MenuItem value="12 - 3 PM">12 - 3 PM</MenuItem>
              <MenuItem value="3 - 6 PM">3 - 6 PM</MenuItem>
            </Select>
          </FormControl>
          {/*<TimePicker
						label="Selecciona la hora"
						minTime={minTime}
						minutesStep={10}
						orientation="portrait"
						value={dateTimeSelected}
						onChange={(newTime) =>
							handleDateTimeChange(dateTimeSelected, newTime)
						}
						renderInput={(params) => <TextField {...params} />}
					/>*/}
        </Stack>
      </LocalizationProvider>
      <Stack spacing={1} direction={"row"} sx={{marginTop: 1}}>
        {/* <Button variant="outlined">Atras</Button> */}
          <Button
            onClick={() =>
              alert(
                timeSelected === ""
                ? "Seleccione un horario" 
                : `Fecha y horario seleccionado: ${dateTimeSelected.format("LL")}, ${timeSelected}`
              )
            }
            variant='contained'
          >
            Confirm
          </Button>
      </Stack>
    </div>
  );
};

export default Schedule;
