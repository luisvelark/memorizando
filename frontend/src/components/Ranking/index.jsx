import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material/";

import { resultados } from "../../const/ranking";

export function Ranking() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 270, padding: "2em" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>N° de partida</TableCell>
            <TableCell align="right">Aciertos</TableCell>
            <TableCell align="right">Tiempo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultados.map((res) => (
            <TableRow
              key={res.partida}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {res.partida}
              </TableCell>
              <TableCell align="right">{res.aciertos}</TableCell>
              <TableCell align="right">{res.tiempo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
