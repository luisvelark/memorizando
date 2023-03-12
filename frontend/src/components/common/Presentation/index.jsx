import { Typography } from "@mui/material/";

export function Presentation({ title, color }) {
  return (
    <Typography
      variant="h3"
      component="h2"
      sx={{ color: "#00838F", marginBottom: "0.3em" }}
    >
      {title}!
    </Typography>
  );
}
