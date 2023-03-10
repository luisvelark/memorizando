import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function SelectDifficulty() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Dificultad</InputLabel>
      <Select value={value} label="Dificultad" onChange={handleChange}>
        <MenuItem value={8}>Baja</MenuItem>
        <MenuItem value={16}>Media</MenuItem>
        <MenuItem value={32}>Alta</MenuItem>
      </Select>
    </FormControl>
  );
}
