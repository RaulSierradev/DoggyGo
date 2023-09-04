import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterWalkers, restoreWalkers } from "../../../../Redux/actions";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Filtros = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreWalkers());
  }, [dispatch]);

  const [selectsFilter, setSelectsFilter] = useState({
    country: "",
    time: "",
  });
  //const [sizeFilter, setSizeFilter] = useState("");
  const [cprFilter, setCprFilter] = useState(false);

  console.log(selectsFilter);
  //console.log(sizeFilter);
  console.log(cprFilter);

  const handleSelectsFilter = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    dispatch(filterWalkers({
      ...selectsFilter,
      cpr: cprFilter,
      [name]: value
    }));
    setSelectsFilter({
      ...selectsFilter,
      [name]: value,
    });
  };

  const handleCprFilter = (event) => {
    event.preventDefault();
    const checked = event.target.checked

    dispatch(filterWalkers({
      ...selectsFilter,
      cpr: checked,
    }));
    setCprFilter(checked);
  };

  /*const handleSizeFilter = (event, newSize) => {
    event.preventDefault();
    setSizeFilter(newSize);
  };*/

  const handleResetFilter = () => {
    dispatch(restoreWalkers());
    setSelectsFilter({ country: "", time: "" });
    //setSizeFilter("");
    setCprFilter(false);
  };

  return (
    <div>
      <Stack spacing={2} direction={"row"}>
        <FormControl variant='outlined' sx={{ width: 180, top: 12 }}>
          <InputLabel id='country-select-label'>Selecciona el pais</InputLabel>
          <Select
            sx={{ backgroundColor: "white" }}
            labelId='country-select-label'
            id='country-select'
            name='country'
            value={selectsFilter.country}
            onChange={handleSelectsFilter}
            label='Selecciona el pais'
          >
            <MenuItem value='Colombia'>Colombia</MenuItem>
            <MenuItem value='Argentina'>Argentina</MenuItem>
            <MenuItem value='Mexico'>Mexico</MenuItem>
            <MenuItem value='Chile'>Chile</MenuItem>
            <MenuItem value='Uruguay'>Uruguay</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant='outlined' sx={{ width: 200, top: 12 }}>
          <InputLabel id='time-select-label'>Selecciona el horario</InputLabel>
          <Select
            sx={{ backgroundColor: "white" }}
            labelId='time-select-label'
            id='time-select'
            name='time'
            value={selectsFilter.time}
            onChange={handleSelectsFilter}
            label='Selecciona el horario'
          >
            <MenuItem value='6am-11am'>6 AM - 11 AM</MenuItem>
            <MenuItem value='11am-3pm'>11 AM - 3 PM</MenuItem>
            <MenuItem value='3pm-10pm'>3 PM - 10 PM</MenuItem>
          </Select>
        </FormControl>
        {/*<Stack spacing={1} direction={"column"}>
          <InputLabel sx={{ fontWeight: "bold" }} id='dog-size-toggle-button-label'>
            Tamaño del perro (kg)
          </InputLabel>
          <ToggleButtonGroup
            sx={{ backgroundColor: "white" }}
            color='primary'
            value={sizeFilter}
            exclusive
            onChange={handleSizeFilter}
          >
            <ToggleButton value='Size - SMALL'>
              Pequeño (3 - 10)
            </ToggleButton>
            <ToggleButton value='Size - MEDIUM'>Mediano (10 - 25)</ToggleButton>
            <ToggleButton value='Size - LARGE'>Grande (25 - 45)</ToggleButton>
            <ToggleButton value='Size - GIANT'>Gigante (45+)</ToggleButton>
          </ToggleButtonGroup>
        </Stack>*/}
        <Stack spacing={1} direction={"column"}>
          <InputLabel sx={{ fontWeight: "bold" }} id='cpr-checkbox-label'>
            Servicios adicionales
          </InputLabel>
          <FormControlLabel
            control={
              <Checkbox checked={cprFilter} onChange={handleCprFilter} />
            }
            label='RCP / Primeros auxilios'
            labelPlacement='end'
          />
        </Stack>

        <IconButton disableRipple size='large' onClick={handleResetFilter}>
          <HighlightOffIcon />
        </IconButton>
      </Stack>
    </div>
  );
};

export default Filtros;
