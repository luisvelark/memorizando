import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

// redux
import { useSelector, useDispatch } from "react-redux";
import { authenticateUser } from "../redux/actions";

// token about
import { setToken, getToken, deleteToken } from "../utils/authToken";
import { authLogin } from "../services/login";

export function useLogin() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    if (data.name === " " || data.password === " ") {
      // setAlertLogin(true);
      console.log("datos vacios");
      return;
    }
    try {
      const response = await authLogin(data);

      if (response.access) {
        //llamada a la api de login
        console.log("no hay token");
        console.log(response.data.message);

        console.log(response.data.token);
        // establecer el estado
        dispatch(authenticateUser(true));

        // setToken(theToken);
      }
    } catch (error) {
      console.log(error);
    }

    navigate("/app/juego");
  };

  return {
    register,
    handleSubmit,
    onSubmit,
  };
}
