import { useState } from "react";

import { Stack, Button, Typography } from "@mui/material/";

import { formatearTiempo } from "../../utils/tiempo";

export function Timer() {
  const [tiempoActual, setTiempoActual] = useState(0);
  const [intervalo, setIntervalo] = useState();

  const iniciarCronometro = () => {
    setIntervalo(
      setInterval(() => {
        setTiempoActual((prev) => prev + 1);
      }, 1000)
    );
  };

  const pararCronometro = () => {
    clearInterval(intervalo);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="h4">Tiempo</Typography>
      <Typography variant="h5">{formatearTiempo(tiempoActual)}</Typography>

      <Button variant="contained" color="primary" onClick={iniciarCronometro}>
        Iniciar
      </Button>
      <Button variant="contained" color="primary" onClick={pararCronometro}>
        detener
      </Button>
    </Stack>
  );
}
