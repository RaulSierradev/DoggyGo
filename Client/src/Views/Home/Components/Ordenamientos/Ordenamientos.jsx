import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderWalkers } from "../../../../Redux/actions";

const Ordenamientos = () => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState("Alphabetic");

  const handleOrder = (event) => {
    event.preventDefault();
    const value = event.target.value;

    dispatch(orderWalkers(value));
    setOrder(value);
  };

  return (
    <div>
      <Stack direction={"row"} sx={{display: "flex", alignItems: "center"}}>
        <InputLabel sx={{ fontWeight: "bold" }} id='order-select-label'>
          ORDENAR POR:
        </InputLabel>
        <FormControl variant='standard' sx={{ width: 120, display: "flex", alignItems: "center" }}>
          <Select
            sx={{ backgroundColor: "white" }}
            labelId='order-select-label'
            id='order-select'
            value={order}
            onChange={handleOrder}
          >
            <MenuItem value='Alphabetic'>Alfabético</MenuItem>
            <MenuItem value='rating'>Calificación</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </div>
  );
};

export default Ordenamientos;
