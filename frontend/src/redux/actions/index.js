// ACTION CREATORS : son funciones que devuelven una acción!
// la unica logica que debemos tener es la logica de estado de la aplicación.
// limitarnos a que la logica de los action creators sea la minima posible y que sean los servicios externos los que lo hagan.
export function authenticateUser(data) {
  return {
    type: "@login/authenticate",
    payload: data,
  };
}
