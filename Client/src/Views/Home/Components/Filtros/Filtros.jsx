import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterWalkers,
  getCountries,
  restoreWalkers,
} from "../../../../Redux/actions";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";

const Filtros = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const countriesNames = countries.map((country) => country.name);

  useEffect(() => {
    dispatch(restoreWalkers());
    if (!countries.length) dispatch(getCountries());
  }, [dispatch]);

  const [selectsFilter, setSelectsFilter] = useState({
    time: "",
  });

  const [inputValue, setInputValue] = useState("");
  const [countryValue, setCountryValue] = useState(null);

  //const [sizeFilter, setSizeFilter] = useState("");
  const [cprFilter, setCprFilter] = useState(false);

  const handleSelectsFilter = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    dispatch(
      filterWalkers({
        ...selectsFilter,
        cpr: cprFilter,
        country: countryValue,
        [name]: value,
      })
    );
    setSelectsFilter({
      ...selectsFilter,
      [name]: value,
    });
  };

  const handleCountryFilter = (event, value) => {
    event.preventDefault();
    setCountryValue(value);

    //Cuando elimino la opcion seleccionada en el Autocomplete, este handle se activa y se manda con valor nulo
    if (!value)
      return dispatch(
        filterWalkers({
          ...selectsFilter,
          cpr: cprFilter,
          status: true,
        })
      );

    dispatch(
      filterWalkers({
        ...selectsFilter,
        cpr: cprFilter,
        country: value,
      })
    );
  };

  const handleCprFilter = (event) => {
    const checked = event.target.checked;

    setCprFilter(checked);

    if (!checked)
      return dispatch(
        filterWalkers({
          ...selectsFilter,
          country: countryValue,
          status: true,
        })
      );

    dispatch(
      filterWalkers({
        ...selectsFilter,
        country: countryValue,
        cpr: checked,
      })
    );
  };

  /*const handleSizeFilter = (event, newSize) => {
    event.preventDefault();
    setSizeFilter(newSize);
  };*/

  const handleResetFilter = () => {
    dispatch(restoreWalkers());
    dispatch(filterWalkers({ status: true }));
    setSelectsFilter({ time: "" });
    //setSizeFilter("");
    setCountryValue(null);
    setCprFilter(false);
  };

  return (
    <div>
      <Stack spacing={10} direction={"row"} sx={{display: "flex", alignItems: "center"}}>
        <Stack
        spacing={1}
        direction={"row"}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <InputLabel sx={{ fontWeight: "bold" }} id='filter-label'>
          FILTRAR POR:
        </InputLabel>
        <Autocomplete
          autoComplete
          noOptionsText='No hay resultados'
          value={countryValue}
          onChange={handleCountryFilter}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id='country-input-select'
          options={countriesNames}
          sx={{ width: 200, backgroundColor: "white" }}
          renderInput={(params) => (
            <TextField {...params} label='Selecciona el pais' />
          )}
        />
        {/*<FormControl variant='outlined' sx={{ width: 180, top: 12 }}>
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
            {countries?.map((country, index) => (
              <MenuItem value={`${country.name}`} key={index}>{country.name}</MenuItem>
            ))}
          </Select>
            </FormControl>*/}
        <FormControl variant='outlined' sx={{ width: 200 }}>
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
      </Stack>
      <SearchBar reset={handleResetFilter}/>
      <button
        onClick={handleResetFilter}
        className='mr-2 px-1 py-2 text-gray-500 border border-gray-200 rounded-md bg-white h-10 flex items-center'
      >
        Restablecer
      </button>
      </Stack>
    </div>
  );
};

export default Filtros;
