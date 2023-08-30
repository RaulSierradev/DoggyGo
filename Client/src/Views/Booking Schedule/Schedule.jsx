import dayjs from "dayjs";
import "dayjs/locale/es";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
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

  const [dateSelected, setDateSelected] = useState(minDate);
  const [timeSelected, setTimeSelected] = useState("");
  // const [book, setBook] = useState(false);

  const handleChanges = () => {
    if (timeSelected === "") return alert("Seleccione un horario");

    dispatch(
      setWalk({
        ...walk,
        dateSelected: dayjs(dateSelected).format("LL"),
		timeSelected
      })
    );
    alert(`Fecha y hora seleccionada: ${dateSelected.format("LL")}, ${timeSelected}`);
  };

  const selectHandleChange = (event) => {
    setTimeSelected(event.target.value);
  };

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
            onChange={(newDate) => setDateSelected(newDate)}
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
              <MenuItem value='6 - 7 AM'>6 - 7 AM</MenuItem>
              <MenuItem value='7 - 8 AM'>7 - 8 AM</MenuItem>
              <MenuItem value='8 - 9 AM'>8 - 9 AM</MenuItem>
              <MenuItem value='9 - 10 AM'>9 - 10 AM</MenuItem>
              <MenuItem value='10 - 11 AM'>10 - 11 AM</MenuItem>
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
        </div>
      </Stack>
    </div>
  );
};

export default Schedule;
