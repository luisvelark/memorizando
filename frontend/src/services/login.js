import axios from "axios";

export const authLogin = async (login) => {
  console.log(login, "axios");
  const baseUrl = `http://localhost:80/api/login`;

  const res = await axios.post(baseUrl, login);
  return res;
};
