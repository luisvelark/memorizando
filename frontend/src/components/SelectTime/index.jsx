import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function SelectTime() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Tiempo</InputLabel>
      <Select value={value} label="Dificultad" onChange={handleChange}>
        <MenuItem value={5}>5 minutos</MenuItem>
        <MenuItem value={10}>10 minutos</MenuItem>
        <MenuItem value={20}>20 minutos</MenuItem>
        <MenuItem value={0}>Sin tiempo</MenuItem>
      </Select>
    </FormControl>
  );
}
