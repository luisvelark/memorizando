import { TextField, FormControl } from "@mui/material/";

export function Email({ register }) {
  return (
    <FormControl sx={{ width: "300px" }} variant="outlined">
      <TextField
        {...register("email", { required: true })}
        color="primary"
        label="Correo"
        variant="outlined"
        // value={Register.email}
        // onChange={handleInputChange}
        fullWidth
      />
    </FormControl>
  );
}
