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

import { ganadas } from "../../../const/general";

export function RankingGeneral({ tipo }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 270, padding: "2em" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Usuario</TableCell>
            <TableCell align="right">tipo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ganadas.map((res) => (
            <TableRow
              key={res.nombre}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {res.nombre}
              </TableCell>
              <TableCell align="right">{res.ganada}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
