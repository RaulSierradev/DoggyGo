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
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Filtros = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreWalkers());
  }, [dispatch]);

  const [countryFilter, setCountryFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [cprFilter, setCprFilter] = useState(false);

  console.log(countryFilter);
  console.log(sizeFilter);
  console.log(cprFilter);

  const handleCountryFilter = (event) => {
    event.preventDefault();
    const value = event.target.value;

    dispatch(filterWalkers(value));
    setCountryFilter(value);
  };

  const handleCprFilter = (event) => {
    event.preventDefault();
    setCprFilter(event.target.checked);
  };

  const handleSizeFilter = (event, newSize) => {
    event.preventDefault();
    setSizeFilter(newSize);
  };

  const handleResetFilter = () => {
    dispatch(restoreWalkers());
    setCountryFilter("");
    setSizeFilter("");
    setCprFilter(false);
  };

  return (
    <div>
      <Stack spacing={2} direction={"row"}>
        <FormControl variant='outlined' sx={{ width: 200, top: 12 }}>
          <InputLabel id='country-select-label'>Selecciona el pais</InputLabel>
          <Select
            sx={{ backgroundColor: "white" }}
            labelId='country-select-label'
            id='country-select'
            value={countryFilter}
            onChange={handleCountryFilter}
            label='Selecciona el pais'
          >
            <MenuItem value='Country - Colombia'>Colombia</MenuItem>
            <MenuItem value='Country - Argentina'>Argentina</MenuItem>
            <MenuItem value='Country - Mexico'>Mexico</MenuItem>
            <MenuItem value='Country - Chile'>Chile</MenuItem>
            <MenuItem value='Country - Uruguay'>Uruguay</MenuItem>
          </Select>
        </FormControl>
        <Stack spacing={1} direction={"column"}>
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
        </Stack>
        <Stack spacing={1} direction={"column"}>
          <InputLabel sx={{ fontWeight: "bold" }} id='cpr-checkbox-label'>
            Servicios adicionales
          </InputLabel>
        <FormControlLabel
          control={<Checkbox checked={cprFilter} onChange={handleCprFilter} />}
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
