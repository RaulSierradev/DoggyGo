import dayjs from "dayjs";
import "dayjs/locale/es";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setWalk } from "../../Redux/actions";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

dayjs.locale("es");

const Schedule = () => {
  const dispatch = useDispatch();
  const walk = useSelector((state) => state.walk);
  console.log(walk);

  const minDate = dayjs().add(1, "day");
  const maxDate = dayjs().endOf("year");
  const minTime = dayjs().set("hour", 6).set("minute", 0).set("second",0);
  const maxTime = dayjs().set("hour", 11);

  const [dateTimeSelected, setDateTimeSelected] = useState(minDate);
  const [dateSelected, setDateSelected] = useState(minDate);
  const [timePickerSelected, setTimePickerSelected] = useState(minTime);
  const [timeSelected, setTimeSelected] = useState("");
  // const [book, setBook] = useState(false);

  const handleDateTimeChange = (newDate, newTime) => {
    const combinedDateTime = newDate
      .set("hour", newTime.hour())
      .set("minute", newTime.minute());
    setDateTimeSelected(combinedDateTime);
  };

  const handleChanges = () => {
    dispatch(
      setWalk({
        ...walk,
        dateTimeSelected: dateTimeSelected.format("LLL"),
      })
    );
    alert(`Fecha y hora seleccionada: ${dateTimeSelected.format("LLL")}`);
  };

  const selectHandleChange = (event) => {
    setTimeSelected(event.target.value);
  };

  //const minTime = dayjs().isSame(dateTimeSelected, "day") ? dayjs() : null;
  console.log(
    "Time picker selected: ",
    dayjs(timePickerSelected).format("hh:mm")
  );
  
  console.log(dateTimeSelected.format("LLL"));

  return (
    <div className='flex flex-col items-center'>
      <div className='text-indigo-500 text-2xl font-bold'>
        En que momento le gustaria?
      </div>
      <label className='my-3 text-slate-500 text-2xl font-bold'>
        Selecciona la Fecha y Hora
        <EditCalendarIcon />
      </label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} direction={"row"}>
          <DatePicker
            label='Selecciona la fecha'
            openTo='day'
            views={["year", "month", "day"]}
            minDate={minDate}
            maxDate={maxDate}
            value={dateSelected}
            onChange={(newDate) =>
              setDateSelected(newDate)
            }
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label='Selecciona la hora'
            minTime={minTime}
            maxTime={maxTime}
            minutesStep={60}
            orientation='portrait'
            ampm={false}
            value={timePickerSelected}
            onChange={(newTime) => setTimePickerSelected(newTime)}
            renderInput={(params) => <TextField {...params} />}
          />
          <FormControl variant='outlined' sx={{ width: 250 }}>
            <InputLabel id='demo-simple-select-label'>
              Selecciona el horario
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={timeSelected}
              onChange={selectHandleChange}
              label='Selecciona el horario'
            >
              <MenuItem value='6-7am'>
                6 - 7 AM
              </MenuItem>
              <MenuItem value='7-8am'>7 - 8 AM</MenuItem>
              <MenuItem value='8-9am'>8 - 9 AM</MenuItem>
              <MenuItem value='9-10am'>9 - 10 AM</MenuItem>
              <MenuItem value='10-11am'>10 - 11 AM</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </LocalizationProvider>
      <Stack spacing={1} direction={"row"} sx={{ marginTop: 1 }}>
        {/* <Button variant="outlined">Atras</Button> */}
        <div className='mt-5'>
          <Button onClick={handleChanges} variant='contained'>
            Confirm
          </Button>
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

        </div>
      </Stack>
    </div>
  );
};

export default Schedule;
