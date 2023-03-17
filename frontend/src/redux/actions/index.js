// ACTION CREATORS : son funciones que devuelven una acción!
export function authenticateUser(data) {
  return {
    type: "@login/authenticate",
    payload: data,
  };
}
