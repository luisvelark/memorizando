import { useState } from "react";
import { Container, Grid } from "@mui/material/";
import { Tablero } from "../../Tablero";
import { Controls } from "../../Controls";
import { Timer } from "../../Timer";
import { Ranking } from "../../Ranking";
import { Estado } from "../../Estado";
import { NavBar } from "../../layout/NavBar";
import { Footer } from "../../layout/Footer";

export const GameView = () => {
  // const [count, setCount] = useState(0);
  const [jugar, setjugar] = useState(true); //estado global de un boton jugar

  return (
    <>
      <NavBar />
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        sx={{
          width: "100vw",
          // height: "100vh",
          backgroundColor: "white",
          marginTop: "3.75em",
          paddingTop: "2em",
        }}
        component="main"
      >
        <Grid
          item
          xs={12}
          md={3}
          sx={{ backgroundColor: "white", padding: "1em" }}
        >
          <Timer />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ backgroundColor: "orange", padding: "1em" }}
        >
          <Controls />
        </Grid>

        <Grid
          container
          item
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          // backgroundColor="red"
          rowSpacing={2}
          columnSpacing={2}
          // spacing={2}
          xs={3}
          sx={{ overflow: "hidden" }}
        >
          <Grid
            item
            md="auto"
            sx={{ backgroundColor: "green", padding: "1em" }}
          >
            <Estado />
          </Grid>
          <Grid item md="auto" sx={{ backgroundColor: "blue", padding: "1em" }}>
            <Ranking />
          </Grid>
        </Grid>

        {/* <Grid
          item
          xs={12}
          md={3}
          sx={{ backgroundColor: "green", padding: "1em" }}
        >
        </Grid> */}
        <Grid
          item
          // xs={12}
          md={8}
          sx={{ backgroundColor: "yellow", padding: "1em" }}
        >
          {!jugar ? <p>vamos iniciar el juego</p> : <Tablero />}
        </Grid>
        {/* <Grid
          item
          xs={12}
          md={12}
          sx={{ backgroundColor: "blue", padding: "1em" }}
        >
          <Ranking />
        </Grid> */}

        {/* <Grid item xs={12 md={3}} sx={{ backgroundColor: "yellow" }}>
        <Tablero />
      </Grid> */}
      </Grid>
      <Footer />
    </>
  );
};
