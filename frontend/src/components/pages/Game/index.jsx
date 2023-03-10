import { useState } from "react";
import { Container, Grid } from "@mui/material/";
import { Tablero } from "../../Tablero";
import { Controls } from "../../Controls";
import { Timer } from "../../Timer";
import { Ranking } from "../../Ranking";
import { Estado } from "../../Estado";

export const Game = () => {
  // const [count, setCount] = useState(0);
  const [jugar, setjugar] = useState(true); //estado global de un boton jugar

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
      sx={{ width: "100vw", heght: "100vh", backgroundColor: "red" }}
      component="main"
    >
      <Grid item xs={3} sx={{ backgroundColor: "white", padding: "1em" }}>
        <Timer />
      </Grid>
      <Grid item xs={8} sx={{ backgroundColor: "orange", padding: "1em" }}>
        <Controls />
      </Grid>
      <Grid item xs={3} sx={{ backgroundColor: "green", padding: "1em" }}>
        <Ranking />
      </Grid>
      <Grid item xs={5} sx={{ backgroundColor: "yellow", padding: "1em" }}>
        {!jugar ? <p>vamos iniciar el juego</p> : <Tablero />}
      </Grid>
      <Grid item xs={3} sx={{ backgroundColor: "green", padding: "1em" }}>
        <Estado />
      </Grid>
      {/* <Grid item xs={12} sx={{ backgroundColor: "yellow" }}>
        <Tablero />
      </Grid> */}
    </Grid>
  );
};
