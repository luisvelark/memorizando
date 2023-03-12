import { TextField, FormControl } from "@mui/material/";

export function UserName({ register }) {
  return (
    <FormControl sx={{ width: "300px" }} variant="outlined">
      <TextField
        {...register("name", { required: true })}
        color="primary"
        label="Usuario"
        variant="outlined"
        // value={Register.email}
        // onChange={handleInputChange}
        fullWidth
      />
    </FormControl>
  );
}
