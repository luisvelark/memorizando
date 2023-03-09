import { useState } from "react";
import { Container, Grid } from "@mui/material/";
import { Tablero } from "../../Tablero";

export const Game = () => {
  // const [count, setCount] = useState(0);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100vw", backgroundColor: "red" }}
      component="main"
    >
      <Grid item xs={6} sx={{ backgroundColor: "yellow", padding: "1em" }}>
        <Tablero />
      </Grid>
      {/* <Grid item xs={12} sx={{ backgroundColor: "yellow" }}>
        <Tablero />
      </Grid> */}
    </Grid>
  );
};
