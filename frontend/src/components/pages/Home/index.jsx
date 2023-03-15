import { useState } from "react";

import Alert from "@mui/material/Alert";
import { Stack, Grid } from "@mui/material/";
import { NavBar } from "../../layout/NavBar";
NavBar;

import { Footer } from "../../layout/Footer";
import Typography from "@mui/material/Typography";
import { RankingGeneral } from "../../common/RankingGeneral";

export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={0}
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
          xs={11}
          md={10}
          lg={10}
          sx={{
            backgroundColor: "#ff5722",
            padding: "1em",
            marginBottom: "1em",
          }}
        >
          <Typography variant="h4" color="white" align="center">
            GANADORES 🏆️
          </Typography>
        </Grid>
        <Grid
          item
          xs={11}
          md={10}
          lg={3}
          sx={{ backgroundColor: "#ff5722", padding: "1em" }}
        >
          <RankingGeneral title=" Ranking general🏆️" tipo="Victorias" />
        </Grid>
        <Grid
          item
          xs={11}
          md={10}
          lg={3}
          sx={{ backgroundColor: "#ff5722", padding: "1em" }}
        >
          <RankingGeneral
            title=" Ranking por Dificultad 🏆️"
            tipo="Victorias"
          />
        </Grid>
        <Grid
          item
          xs={11}
          md={10}
          lg={3}
          sx={{ backgroundColor: "#ff5722", padding: "1em" }}
        >
          <RankingGeneral title=" Ranking por Velocidad 🏆️" tipo="Tiempo" />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
