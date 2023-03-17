const MY_TOKEN = "TOKEN_USER";

export function setToken(token) {
  localStorage.setItem(MY_TOKEN, token);
}

export function getToken() {
  localStorage.getItem(MY_TOKEN);
}

export function deleteToken() {
  localStorage.removeItem(MY_TOKEN);
}
