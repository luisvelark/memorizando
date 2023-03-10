import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material/";

export function Estadistica({ title, data, icon }) {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      component="div"
    >
      <Typography variant="h5" component="h3" align="justify">
        {icon}
        {title}
      </Typography>

      <Typography variant="h6" component="h4">
        {data}
      </Typography>
    </Stack>
  );
}
