import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import {
  Card,
  Box,
  CardContent,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material/";
import { SelectDifficulty } from "../SelectDifficulty";
import { SelectTopic } from "../SelectTopic";
import { SelectTime } from "../SelectTime";
// const Caja = styled(Card)`
//   background-color: gris;
//   height: 120px;
//   min-width: 120px;
//   cursor: pointer;
//   &:hover {
//     transform: scale(0.95);
//   }
// `;

// peticion a la base para que traiga las dificultades
export const Controls = () => {
  const [jugar, setJugar] = useState(false);

  // useEffect(() => {

  // }, []);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="h4" gutterBottom>
        N° Partida: 000001
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <SelectDifficulty />
        <SelectTopic />
        <SelectTime />
        {!jugar ? (
          <Button variant="contained" color="primary">
            Jugar
          </Button>
        ) : (
          <Button variant="contained" color="error">
            Finalizar
          </Button>
        )}
      </Stack>
    </Stack>
  );
};
