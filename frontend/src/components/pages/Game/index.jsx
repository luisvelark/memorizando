import { useState } from "react";
import { Container, Grid } from "@mui/material/";
import { Tablero } from "../../Tablero";
import { Controls } from "../../Controls";

export const Game = () => {
  // const [count, setCount] = useState(0);
  const [jugar, setjugar] = useState(true); //estado global de un boton jugar

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ width: "100vw", heght: "100vh", backgroundColor: "red" }}
      component="main"
    >
      <Grid item xs={3} sx={{ backgroundColor: "green", padding: "1em" }}>
        <p>tiempo</p>
      </Grid>
      <Grid item xs={9} sx={{ backgroundColor: "orange", padding: "1em" }}>
        <Controls />
      </Grid>
      <Grid item xs={3} sx={{ backgroundColor: "green", padding: "1em" }}>
        <p>ranking</p>
      </Grid>
      <Grid item xs={6} sx={{ backgroundColor: "yellow", padding: "1em" }}>
        {!jugar ? <p>vamos iniciar el juego</p> : <Tablero />}
      </Grid>
      <Grid item xs={3} sx={{ backgroundColor: "green", padding: "1em" }}>
        <p>Tablero secundario</p>
      </Grid>
      {/* <Grid item xs={12} sx={{ backgroundColor: "yellow" }}>
        <Tablero />
      </Grid> */}
    </Grid>
  );
};
