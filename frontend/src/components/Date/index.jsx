import { FormControl } from "@mui/material/";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";

import { useRegister } from "../../hooks/useRegister";

export function Date({ register }) {
  // const { register } = useRegister();
  return (
    <FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateField"]}>
          {/* dayjs('2022-04-17') */}
          <DateField
            sx={{ width: "300px" }}
            // name="date"
            {...register("birth_date", { required: true })}
            value={null}
            label="Fecha de Nacimiento"
          />
        </DemoContainer>
      </LocalizationProvider>
    </FormControl>
  );
}
