import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function SelectTopic() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Temática</InputLabel>
      <Select value={value} label="Dificultad" onChange={handleChange}>
        <MenuItem value={0}>Deportes</MenuItem>
        <MenuItem value={1}>Figuras</MenuItem>
        <MenuItem value={2}>Animales</MenuItem>
      </Select>
    </FormControl>
  );
}
