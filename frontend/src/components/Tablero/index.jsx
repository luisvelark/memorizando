import { useState, useEffect } from "react";

import { Grid } from "@mui/material/";

import { MyCard } from "../MyCard";

import { deportes } from "../../const/imagenes";

export const Tablero = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(deportes);
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 2, md: 2 }}
      // columns={{ xs: 2, sm: 12, md: 8 }}
    >
      {cards.map((dato) => (
        <Grid item xs={8} sm={6} md={4} lg={3} key={dato.id}>
          <MyCard nombre={dato.nombre} />
        </Grid>
      ))}
    </Grid>
  );
};
