import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Divider, Paper, Stack, Typography } from "@mui/material/";
import { Estadistica } from "../common/Estadistica";

import EventRepeatRoundedIcon from "@mui/icons-material/EventRepeatRounded";
import DeviceHubRoundedIcon from "@mui/icons-material/DeviceHubRounded";
import RepeatOneRoundedIcon from "@mui/icons-material/RepeatOneRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
export function Estado() {
  return (
    <div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Estadistica
          title="Dificultad"
          data="dato"
          icon={<DeviceHubRoundedIcon fontSize="large" sx={{ mr: 2 }} />}
        />
        <Estadistica
          title="Maximo de Intentos"
          data="dato"
          icon={<EventRepeatRoundedIcon fontSize="large" sx={{ mr: 2 }} />}
        />
        <Estadistica
          title="Intentos"
          data="dato"
          icon={<RepeatOneRoundedIcon fontSize="large" sx={{ mr: 2 }} />}
        />
        <Estadistica
          title="Aciertos"
          data="dato"
          icon={<CheckCircleRoundedIcon fontSize="large" sx={{ mr: 2 }} />}
        />
      </Stack>
    </div>
  );
}
