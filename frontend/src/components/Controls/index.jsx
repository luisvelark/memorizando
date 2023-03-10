import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import {
  Card,
  Box,
  CardContent,
  Typography,
  Stack,
  Divider,
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
  // const [isFlipped, setIsFlipped] = useState(false);

  // useEffect(() => {

  // }, []);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
    >
      <Typography variant="h4" gutterBottom>
        N° Partida: 000001
      </Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <SelectDifficulty />
        <SelectTopic />
        <SelectTime />
      </Stack>
    </Stack>
  );
};
