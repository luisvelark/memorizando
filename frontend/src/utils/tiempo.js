export const formatearTiempo = (tiempo) => {
  const horas = Math.floor(tiempo / 3600);
  const minutos = Math.floor((tiempo - horas * 3600) / 60);
  const segundos = tiempo - horas * 3600 - minutos * 60;

  const horasStr = horas.toString().padStart(2, "0");
  const minutosStr = minutos.toString().padStart(2, "0");
  const segundosStr = segundos.toString().padStart(2, "0");

  return `${horasStr}:${minutosStr}:${segundosStr}`;
};
