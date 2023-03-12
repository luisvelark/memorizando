import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import { authRegister } from "../services/Register";

// import { useSelector, useDispatch } from "react-redux";

// import { createUser } from "../redux/action";

export function useRegister() {
  // const navigate = useNavigate();
  // const [Register, setRegister] = useState({ email: "", password: "" });
  // const [alertRegister, setAlertRegister] = useState(false);
  // const dispatch = useDispatch();
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   const newRegister = { ...Register, [name]: value };
  //   setRegister(newRegister);
  // };
  // const handleSubmit = () => {
  //   if (Register.email === "" || Register.passwords === "") {
  //     setAlertRegister(true);
  //     return;
  //   }
  //   setAlertRegister(false);
  //   authRegister(Register)
  //     .then((data) => {
  //       // ME TRAE EL TOKEN Y EL ESTUDIANTE; SI ES ESTUDIANTE ME REDIRIGUE A HOME
  //       if (data.profile.rol === "ESTUDIANTE") {
  //         dispatch(
  //           createUser({
  //             jwt: data.jwt,
  //             isAuthenticated: true,
  //             profile: data.profile,
  //           })
  //         );
  //         navigate("/");
  //         setAlertRegister(false);
  //       }
  //     })
  //     .catch((error) => {
  //       setAlertRegister(true);
  //       console.log(error);
  //     });
  // };
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  // return {
  //   showPassword,
  //   handleClickShowPassword,
  //   register,
  //   handleSubmit,
  //   onSubmit,
  // };
}
